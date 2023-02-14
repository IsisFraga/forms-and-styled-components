import React, { useContext } from 'react'
import {UserContext} from '../../context/UserContext';
import { Title, PatternHeader } from './Header.styles';

const Header: React.FC = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <PatternHeader>
        <Title fontSize={24} color="green">Bem-vindo, {user.name}!</Title>
        <Title fontSize={24} color="green">sua senha é {user.password}!</Title>
      </PatternHeader>
      
    </>
  )
}

export default Header;