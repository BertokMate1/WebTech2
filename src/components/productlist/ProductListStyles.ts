import { styled } from '@mui/material/styles';
import { Fade } from '@mui/material';

export const Container = styled('div')({
  marginTop: '32px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '70vh', // Set a fixed height for the container
});

export const Header = styled('h2')({
  marginBottom: '16px',
  fontWeight: 600,
  color: 'white',
  position: 'relative',
  paddingBottom: '8px',
  
});

export const HeaderUnderline = styled('div')({
  display: 'block',
  width: '60px',
  height: '4px',
  background: 'linear-gradient(45deg, rgb(204, 204, 200) 0%, rgb(7, 77, 44) 100%)',
  borderRadius: '8px',
  marginTop: '8px',
});

export const TableWrapper = styled('div')({
  borderRadius: '4px',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(8px)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const Table = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
});

export const TableHeader = styled('thead')({
  display: 'table',
  width: '100%',
  tableLayout: 'fixed',
  height:'100%'
});

export const TableBody = styled('tbody')({
  display: 'block',
  overflowY: 'auto',
  maxHeight: 'calc(70vh - 150px)',
  width: '100%',
  
  '& tr': {
    display: 'table',
    width: '100%',
    tableLayout: 'fixed',
    
  }
});

export const TableHeaderRow = styled('tr')({
  background: 'linear-gradient(45deg, rgb(153, 153, 144) 0%, rgb(20, 61, 7) 100%)',
  color: 'white',
});

export const TableHeaderCell = styled('th')((props: { width: string; align?: string }) => ({
  padding: '16px',
  cursor: 'pointer',
  width: props.width,
  textAlign: props.align as any || 'left',
  position: 'sticky',
  top: 0,
  background: 'gradient(45deg, rgb(153, 153, 144) 0%, rgb(20, 61, 7) 100%)',
}));

export const TableRow = styled('tr')({
  transition: 'all 0.2s ease',
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  
  '&:nth-of-type(even)': {
    backgroundColor: 'rgba(245, 247, 250, 0.5)',
  },
  
  '&:hover': {
    transform: 'translateX(5px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
  },
});

export const NameCell = styled('td')({
  padding: '16px',
  textAlign: 'left',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '70%',
});

export const PriceCell = styled('td')({
  padding: '16px',
  textAlign: 'right',
  fontWeight: 600,
  color: 'rgba(4, 51, 33, 0.9)',
  width: '30%',
});

export const InstructionText = styled('div')({
  textAlign: 'center',
  marginTop: '16px',
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.8)',
});

export const AnimatedContainer = styled(Fade)({});