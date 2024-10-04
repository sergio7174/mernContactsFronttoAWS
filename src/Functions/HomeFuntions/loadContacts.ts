//import ContactsService from '../../services/contactsService';
import ContactsService from '../../services/contactsService';

export async function loadContacts(setIsLoading: any,setHasError:any,setContacts:any) {

  try {
    setIsLoading(true);
    const contactsList = await ContactsService.listContacts();
    setHasError(false);
    setContacts(contactsList);
  } catch {
    setHasError(true);
  } finally {
    //setTimeout(() => setIsLoading(false), 500);
    setIsLoading(false);
  }
    return {setIsLoading,setHasError,setContacts}
}


