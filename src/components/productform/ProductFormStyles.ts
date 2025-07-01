import { 
  Box, Button, TextField, Typography,
  styled, Theme 
} from '@mui/material';

export const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  padding: theme.spacing(4),
  borderRadius: 16,
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 40px rgba(31, 38, 135, 0.2)',
    transform: 'translateY(-3px)',
  },
}));

export const FormHeader = styled(Typography)({
  fontWeight: 600,
  position: 'relative',
  marginBottom: '16px',
  '&:after': {
    content: '""',
    display: 'block',
    width: 60,
    height: 4,
    background: 'linear-gradient(45deg,rgb(185, 171, 121) 0%,rgb(35, 63, 3) 100%)',
    borderRadius: 8,
    marginTop: '8px',
  },
});

export const FormInput = styled(TextField)({
  marginBottom: '24px',
  '& .MuiOutlinedInput-root': { 
    borderRadius: 8 
  },
});

export const SubmitButton = styled(Button)({
  padding: '12px 24px',
  borderRadius: 8,
  fontWeight: 600,
  letterSpacing: 1.05,
  background: 'linear-gradient(45deg,rgb(185, 171, 121) 0%,rgb(35, 63, 3) 100%)',
  boxShadow: '0 4px 10px rgba(76, 175, 80, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 15px rgba(76, 175, 80, 0.4)',
    background: 'linear-gradient(45deg,rgb(185, 171, 121) 0%,rgb(35, 63, 3) 100%)',
  },
});