require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Product = require('./models/Product');
const User = require('./models/User');
const auth = require('./middleware/auth');

const app = express();
app.use(cors());
app.use(express.json());

// 1. MongoDB csatlakozás
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✔ MongoDB kapcsolódva'))
  .catch(err => console.error('‼ MongoDB hiba:', err));

// 2. Regisztráció
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).send('Hiányzó adatok');
    const exists = await User.findOne({ username });
    if (exists) return res.status(409).send('Felhasználó már létezik');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hash });
    await newUser.save();
    res.status(201).send('Regisztráció sikeres');
  } catch (err) {
    res.status(500).send('Adatbázis hiba');
  }
});

// 3. Bejelentkezés
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).send('Hiányzó adatok');

    const user = await User.findOne({ username });
    if (!user) return res.status(401).send('Helytelen felhasználó vagy jelszó');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).send('Helytelen felhasználó vagy jelszó');

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).send('Adatbázis hiba');
  }
});

// 4. Védett termék-végpontok (csak bejelentkezett tokennel)
app.get('/api/products', auth, async (req, res) => {
  try {
    const items = await Product.find().sort({ name: 1 });
    res.json(items);
  } catch (err) {
    res.status(500).send('Hiba a lekérdezés során');
  }
});

app.post('/api/products', auth, async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || price == null) return res.status(400).send('Hiányzó adatok');
    if (await Product.findOne({ name })) return res.status(409).send('Ez a termék már létezik');

    const newProd = new Product({ name, price });
    await newProd.save();
    res.status(201).json(newProd);
  } catch (err) {
    res.status(500).send('Adatbázis hiba');
  }
});

// 5. Szerver indítása
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Szerver fut a ${PORT}-es porton`));
