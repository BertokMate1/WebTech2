import React, { useState } from 'react';
import { Fade } from '@mui/material';
import { 
  FormContainer, FormHeader,
  FormInput, SubmitButton
} from './ProductFormStyles';

interface Props {
  onAdd: (name: string, price: number) => void;
  existingNames: string[];
}

export default function AddProductForm({ onAdd, existingNames }: Props) {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const handleSubmit = () => {
    if (!name || !price) {
      alert('Töltse ki az összes mezőt!');
      return;
    }
    const priceNum = parseFloat(price);
    if (isNaN(priceNum)) {
      alert('Az ár mezőben számot kell megadni!');
      return;
    }
    if (existingNames.includes(name)) {
      alert('Ez a termék már létezik!');
      return;
    }
    onAdd(name, priceNum);
    setName('');
    setPrice('');
  };

  return (
    <Fade in timeout={1000}>
      <FormContainer>
        <FormHeader variant="h5">
          Új termék hozzáadása
        </FormHeader>
        
        <FormInput
          label="Név"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
          required
        />
        
        <FormInput
          label="Ár"
          value={price}
          onChange={e => setPrice(e.target.value)}
          type="number"
          fullWidth
          required
        />
        
        <SubmitButton 
          variant="contained" 
          onClick={handleSubmit}
        >
          Hozzáadás
        </SubmitButton>
      </FormContainer>
    </Fade>
  );
}