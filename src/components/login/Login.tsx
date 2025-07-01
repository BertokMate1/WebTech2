import React, { useState } from 'react';
import { Fade, Slide } from '@mui/material';
import { loginRequest } from '../../services/api';
import { AxiosError } from 'axios';
import { 
   LoginCard, LoginForm,
  LoginHeader, LoginInput, LoginButton 
} from './LoginStyles';

interface Props {
  onSuccess: () => void;
}

export default function Login({ onSuccess }: Props) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    loginRequest(username, password)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        onSuccess();
      })
      .catch((err: AxiosError) => {
        alert('Hibás felhasználónév vagy jelszó! (' + err.message + ')');
      });
  };

  return (
      <Slide in direction="up" timeout={500}>
        <LoginCard>
          <Fade in timeout={800}>
            <LoginForm>
              <LoginHeader variant="h4">
                Bejelentkezés
              </LoginHeader>
              
              <LoginInput
                label="Név"
                value={username}
                onChange={e => setUsername(e.target.value)}
                fullWidth
                required
                variant="outlined"
              />
              
              <LoginInput
                label="Jelszó"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
                required
                variant="outlined"
              />
              
              <LoginButton 
                variant="contained" 
                onClick={handleLogin}
              >
                Bejelentkezés
              </LoginButton>
            </LoginForm>
          </Fade>
        </LoginCard>
      </Slide>
  );
}