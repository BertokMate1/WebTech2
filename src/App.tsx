import React, { useState, useEffect } from 'react';
import Login from './components/login/Login';
import ProductList from './components/productlist/ProductList';
import AddProductForm from './components/productform/AddProductForm';
import { Product } from './types';
import { fetchProducts, addProduct } from './services/api';
import { Container, Box } from '@mui/material';
import { AxiosError, AxiosResponse } from 'axios';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!isLoggedIn) return;
    fetchProducts()
      .then((res: AxiosResponse<Product[]>) => {
        setProducts(res.data);
      })
      .catch((err: AxiosError) => {
        console.error('Hiba a termékek betöltése közben:', err.message);
      });
  }, [isLoggedIn]);

  const handleAdd = (name: string, price: number) => {
    addProduct({ name, price })
      .then((res: AxiosResponse<Product>) => {
        setProducts(prev => [...prev, res.data]);
      })
      .catch((err: AxiosError) => {
        alert('Hiba a termék hozzáadásakor: ' + err.message);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      {!isLoggedIn ? (
        <Login onSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <Box>
          <ProductList products={products} />
          <AddProductForm onAdd={handleAdd} existingNames={products.map(p => p.name)} />
        </Box>
      )}
    </Container>
  );
}