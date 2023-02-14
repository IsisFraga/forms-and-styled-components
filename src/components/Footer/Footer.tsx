import React, { useContext } from 'react'
import {UserContext} from '../../context/UserContext';
import { PatternFooter } from './Footer.styles';

const Footer: React.FC = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <PatternFooter>
        <h3>{user.name}</h3>
      </PatternFooter>
    </>
  )
}

export default Footer;