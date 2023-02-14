import React, { useContext, useState } from 'react';
import {UserContext} from '../../context/UserContext';
import * as FC from './Form.styles';

export default function LoginForm() {

  const { setUser } = useContext(UserContext)
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [buttonEnabled, seButtonEnabled] = React.useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordInvalid(true)
    } else {
      setPasswordInvalid(false);
      setUser({name: userName, password: password})
    }
  }

  const handleUserName = (e: any) => {
    setUserName(e.target.value);
    handleButtonEnabled(userName, password)
  }
  
  const handlePassword = (e: any) => {
    setPassword(e.target.value)
    handleButtonEnabled(userName, password)
  }

  const handleButtonEnabled = (username: string, password: string) => {
    if(username.length > 0 && password.length > 0) {
      seButtonEnabled(true);
    } else {
      seButtonEnabled(false);
    }
}



  return (
    <FC.StyledForm onSubmit={handleSubmit}>
      <FC.StyledLabel>Nome de usuário:</FC.StyledLabel>
      <FC.StyledInput type="text" placeholder="Seu nome aqui" value={userName} onChange={(e) => handleUserName(e)}/>
      <FC.StyledLabel invalid={passwordInvalid}>Senha:</FC.StyledLabel>
      <FC.StyledInput type="password" onChange={(e) => handlePassword(e)}/>
      {passwordInvalid && <FC.StyledAlert>Senha inválida!</FC.StyledAlert>}
      <FC.StyledButton type="submit"disabled={!userName || !password}>Enviar</FC.StyledButton>
    </FC.StyledForm>
  )
}