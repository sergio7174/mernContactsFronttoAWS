import React from 'react';
import { Container } from './Headerstyles';
//import logo from './logo.svg';
const logo = require("../../assets/images/logo.svg") as string; //works fine in *.tsx files
export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Contacts" />
    </Container>
  );
}
