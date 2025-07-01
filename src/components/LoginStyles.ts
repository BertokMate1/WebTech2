import { 
  Box, Paper, Button, TextField, Typography,
  styled, Theme 
} from '@mui/material';

export const LoginCard = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  padding: theme.spacing(4),
  borderRadius: 16,
  borderStyle: 'solid' ,
  background: 'linear-gradient(190deg,rgba(6, 53, 8, 0.01) 0%,rgb(206, 207, 143) 100%)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(34, 135, 31, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(86, 170, 8, 0.2)',
  },
}));

export const LoginForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const LoginHeader = styled(Typography)({
  fontWeight: 700,
  background: 'linear-gradient(45deg,rgba(218, 224, 222, 0.54) 30%,rgb(193, 194, 173) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '8px',
  textAlign: 'center',
});

export const LoginInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    '& fieldset': { borderColor: '#e0e0e0' },
    '&:hover fieldset': { borderColor: theme.palette.primary.light },
    '&.Mui-focused fieldset': { 
      borderColor: theme.palette.primary.main,
      boxShadow: '0 0 0 2px rgba(228, 226, 149, 0.2)',
    },
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5),
  borderRadius: 8,
  fontWeight: 600,
  letterSpacing: 1.1,
  background: 'linear-gradient(45deg,rgb(8, 36, 3) 0%,rgb(206, 207, 143) 100%)',
  boxShadow: '0 4px 10px rgba(12, 34, 2, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 15px rgba(29, 51, 5, 0.8)',
    background: 'linear-gradient(45deg,rgb(6, 53, 8) 0%,rgb(206, 207, 143) 100%)',
  },
}));