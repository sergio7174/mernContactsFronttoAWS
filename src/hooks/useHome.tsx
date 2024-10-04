import { useState, useEffect } from 'react';

import { ContactProps } from '../types/types';
import {loadContacts} from '../Functions/HomeFuntions/loadContacts';

export default function useHome() {

  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contactToBeDeleted, setContactToBeDeleted] = useState<null | ContactProps>(null);
  const [isDeletingContact, setIsDeletingContact] = useState(false);


  const values = Object.values(contacts);


  useEffect(() => {
    loadContacts(setIsLoading,setHasError,setContacts);
  }, []);

  return { contacts, setContacts, searchTerm, setSearchTerm, isLoading, setIsLoading,
           hasError, setHasError, isModalVisible, setIsModalVisible, contactToBeDeleted, setContactToBeDeleted,isDeletingContact, setIsDeletingContact,values, loadContacts}
          
  }

