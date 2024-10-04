import api from '../utils/api';
import { ContactFormData } from '../types/types';

const apiServer = process.env.REACT_APP_API_SERVER;
class ContactsService {
  
  
  async listContacts() {
    
   // const response = await api.get('/contacts');
   
   const response = await api.get(`${apiServer}/contacts`);

   // alert("Estoy en ContactsService - ListContacts- data:"+response.data[0].name);
    return response.data;
  }

  async getContactById(id: string) {
    const response = await api.get(`${apiServer}/contacts/${id}`);

    return response.data;
  }

  createContact(contact: ContactFormData) {
    const body = new FormData();

    Object.entries(contact).forEach(([key, value]) => {
      if (value) {
        body.append(key, value);
      }
    });

    return api.post(`${apiServer}/contacts`, body);
  }

  updateContact(id: string, contact: ContactFormData) {
    const body = new FormData();

    Object.entries(contact).forEach(([key, value]) => {
      if (value) {
        body.append(key, value);
      }
    });

    return api.put(`${apiServer}/contacts/${id}`, body);
  }

  deleteContact(id: string) {
    return api.delete(`${apiServer}/contacts/${id}`);
  }
}

export default new ContactsService();