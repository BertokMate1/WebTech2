import React, { useState } from 'react';
import { Product } from '../../types';
import { 
  AnimatedContainer,
  Container,
  Header,
  HeaderUnderline,
  TableWrapper,
  Table,
  TableHeader,
  TableBody, // Use the new TableBody component
  TableHeaderRow,
  TableHeaderCell,
  TableRow,
  NameCell,
  PriceCell,
  InstructionText
} from './ProductListStyles';

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const [sortConfig, setSortConfig] = useState<{key: 'name' | 'price', direction: 'asc' | 'desc'}>({
    key: 'name',
    direction: 'asc'
  });

  const handleSort = (key: 'name' | 'price') => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortConfig.key === 'name') {
      return sortConfig.direction === 'asc' 
        ? a.name.localeCompare(b.name, 'hu') 
        : b.name.localeCompare(a.name, 'hu');
    } else {
      return sortConfig.direction === 'asc' 
        ? a.price - b.price 
        : b.price - a.price;
    }
  });

  return (
    <AnimatedContainer in timeout={800}>
      <Container>
        <Header>
          Terméklista
          <HeaderUnderline />
        </Header>
        
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell 
                  onClick={() => handleSort('name')} 
                  width="70%"
                  align="left"
                >
                  Név {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHeaderCell>
                <TableHeaderCell 
                  onClick={() => handleSort('price')} 
                  width="30%"
                  align="right"
                >
                  Ár (Ft) {sortConfig.key === 'price' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            
            <TableBody>
              {sortedProducts.map(p => (
                <TableRow key={p.name}>
                  <NameCell>{p.name}</NameCell>
                  <PriceCell>{p.price.toLocaleString('hu-HU')} Ft</PriceCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
        
        <InstructionText>
          Kattints a fejlécére a rendezéshez
        </InstructionText>
      </Container>
    </AnimatedContainer>
  );
}