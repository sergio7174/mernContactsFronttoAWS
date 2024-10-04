import api from '../utils/api';
import { ContactFormData } from '../types/types';

   export function listContact () {
    const response = api.get('/contacts');

    return response;
   };


  export const getContactById = async(id: string)=> {
    const response = await api.get(`/contacts/${id}`);

    return response.data;
  };

  export const createContact= (contact: ContactFormData)=> {
    const body = new FormData();

    Object.entries(contact).forEach(([key, value]) => {
      if (value) {
        body.append(key, value);
      }
    });

    return api.post('/contacts', body);
  };

  export const updateContact = (id: string, contact: ContactFormData)=> {
    const body = new FormData();

    Object.entries(contact).forEach(([key, value]) => {
      if (value) {
        body.append(key, value);
      }
    });

    return api.put(`/contacts/${id}`, body);
  };

  export const deleteContact = (id: string) => {
    return api.delete(`/contacts/${id}`);
  };

   