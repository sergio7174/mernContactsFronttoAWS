import ReactDOM from 'react-dom';
import { ContactFormData } from '../../types/types';

import FormModal from '../../components/FormModal/FormModal';
import ContactForm from '../../components/ContactForm/ContactForm';

import React from 'react';
import ContactsService from '../../services/contactsService';

export default function CreateContact() {
  async function handleFormSubmit(contactData: ContactFormData) {
    await ContactsService.createContact(contactData);
    window.history.back();
  }

  return ReactDOM.createPortal(
    <FormModal title="New Contact">
      <ContactForm
        buttonLabel="New Contact"
        onSubmit={handleFormSubmit}
      />
    </FormModal>,
    document.getElementById('overlay') as HTMLElement
  );
}
