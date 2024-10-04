import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import EditContact from './pages/EditContact/EditContact';
import CreateContact from './pages/CreateContact/CreateContact';

export default function ContactsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-contact" element={<CreateContact />} />
      <Route path="/editar/:id" element={<EditContact />} />
    </Routes>
  );
}
