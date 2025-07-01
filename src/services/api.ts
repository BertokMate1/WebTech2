import axios, { AxiosResponse } from 'axios';
import { Product } from '../types';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {})
  }
});

// Auth
export const loginRequest = (
  username: string,
  password: string
): Promise<AxiosResponse<{ token: string }>> => // Add response type
  api.post<{ token: string }>('/login', { username, password }); // Specify expected response

// Termékek
export const fetchProducts = (): Promise<AxiosResponse<Product[]>> =>
  api.get<Product[]>('/products');

export const addProduct = (
  product: { name: string; price: number }
): Promise<AxiosResponse<Product>> => api.post<Product>('/products', product);