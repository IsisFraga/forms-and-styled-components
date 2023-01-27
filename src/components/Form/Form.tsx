import React, { useState } from 'react';
import * as FC from './Form.styles';

export default function LoginForm() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameValid, setUserNameValid] = useState<boolean>();
  const [passwordValid, setPasswordValid] = useState<boolean>();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordValid(false)
    } else {
      setPasswordValid(true);
    }
  }

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <FC.StyledForm onSubmit={handleSubmit}>
      <FC.StyledLabel>Nome de usuário:</FC.StyledLabel>
      <FC.StyledInput type="text" placeholder="teste" value={userName} onChange={(e) => handleUserName(e)}/>
      <FC.StyledLabel valid={passwordValid}>Senha:</FC.StyledLabel>
      <FC.StyledInput type="password" onChange={(e) => handlePassword(e)}/>
      {passwordValid && <FC.StyledAlert>Senha inválida!</FC.StyledAlert>}
      <FC.StyledButton type="submit">Enviar</FC.StyledButton>
    </FC.StyledForm>
  )
}