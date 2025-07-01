import { 
  Table, TableContainer, Paper, Typography, Box,
  styled, Theme 
} from '@mui/material';

export const ProductListContainer = styled(Box)({
  marginTop: '32px',
});

export const ProductListHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 600,
  color: 'rgb(255, 255, 255)',
  position: 'relative',
  '&:after': {
    content: '""',
    display: 'block',
    width: 60,
    height: 4,
    background: 'linear-gradient(45deg,rgb(204, 204, 200) 0%,rgb(7, 77, 44) 100%)',
    borderRadius: 8,
    marginTop: theme.spacing(1),
  },
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: 4,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(8px)',
}));

export const StyledTable = styled(Table)({
  minWidth: 650,
});

export const StyledTableHead = styled(Table)({
  '& th': {
    fontWeight: 600,
    fontSize: '1.05rem',
  },
});

export const StyledTableHeaderRow = styled('tr')({
  background: 'linear-gradient(45deg,rgb(153, 153, 144) 0%,rgb(20, 61, 7) 100%)',
  color: 'white',
  textAlign: 'left'

});

export const StyledTableRow = styled('tr')(({ theme }) => ({
  transition: 'all 0.2s ease',
  '&:nth-of-type(even)': { backgroundColor: 'rgba(245, 247, 250, 0.5)' },
  '&:hover': {
    transform: 'translateX(5px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
  },
  '& td': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  },
}));

export const PriceCell = styled('td')(({ theme }) => ({
  fontWeight: 600,
  color: 'rgba(4, 51, 33, 0.9)'
}));