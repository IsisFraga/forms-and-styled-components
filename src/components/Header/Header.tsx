import React from 'react'
import { Title, PatternHeader, SecondaryTitle } from './Header.styles';

const Header: React.FC = () => {
  return (
    <>
      <PatternHeader>oi sou o header</PatternHeader>
      {/* <h1>Olá sou um H1!</h1>
      <Title fontSize={14} color="green">Olá, sou o title!</Title>
      <Title fontSize={20}>
        Gato
        <span>preto</span>
      </Title>
      <span>fora do title</span>
      <SecondaryTitle fontSize={40}>Secondary title</SecondaryTitle> */}
    </>
  )
}

export default Header;