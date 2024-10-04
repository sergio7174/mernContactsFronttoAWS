import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ContactFormData, ContactProps } from '../../types/types';
import FormModal from '../../components/FormModal/FormModal';
import ContactForm from '../../components/ContactForm/ContactForm';
import Loader from '../../components/Loader/Loader';
import ContactsService from '../../services/contactsService';


interface ContactFormRefProps {
  setFieldsValues: (contact: ContactProps) => void;
}

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef<ContactFormRefProps>(null);

  const { id } = useParams() as { id: string };

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        setContactName(contact.name);
        contactFormRef.current?.setFieldsValues(contact);
        setIsLoading(false);
      } catch {
        window.history.back();
        setIsLoading(false);
      }
    }

    loadContact();
  }, [id]);

  async function handleFormSubmit(contactData: ContactFormData) {
    await ContactsService.updateContact(id, contactData);
    window.history.back();
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <FormModal title={`Editar ${contactName}`}>
        <ContactForm
          ref={contactFormRef}
          buttonLabel="Edit Contact"
          onSubmit={handleFormSubmit}
        />
      </FormModal>
    </>
  );
}
