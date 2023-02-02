import React from 'react'
import { Title, PatternHeader } from './Header.styles';

const Header: React.FC = () => {
  return (
    <>
      <PatternHeader>
        <Title fontSize={24} color="green">Bem-vindo, USUÁRIO!</Title>
      </PatternHeader>
      
    </>
  )
}

export default Header;