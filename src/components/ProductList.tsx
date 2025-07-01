import React from 'react';
import { Fade } from '@mui/material';
import { Product } from '../types';
import { 
  ProductListContainer, ProductListHeader,
  StyledTableContainer, StyledTable,
  StyledTableHeaderRow, StyledTableRow,
  PriceCell
} from './ProductListStyles';

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Fade in timeout={800}>
      <ProductListContainer>
        <ProductListHeader variant="h5">
          Terméklista
        </ProductListHeader>
        
        <StyledTableContainer>
          <StyledTable>
            <thead>
              <StyledTableHeaderRow>
                <th>Név</th>
                <th>Ár (Ft)</th>
              </StyledTableHeaderRow>
            </thead>
            <tbody>
              {products.map(p => (
                <StyledTableRow key={p.name}>
                  <td>{p.name}</td>
                  <PriceCell>{p.price.toLocaleString()} Ft</PriceCell>
                </StyledTableRow>
              ))}
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      </ProductListContainer>
    </Fade>
  );
}