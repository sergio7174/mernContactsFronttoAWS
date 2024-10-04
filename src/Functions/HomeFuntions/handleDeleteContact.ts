import ContactsService from '../../services/contactsService';

export async function handleDeleteContact(setIsDeletingContact:any,contactToBeDeleted:any, setContacts: any, handleCloseDeleteModal:any):Promise<void> {
  try {
    setIsDeletingContact(true);

    await ContactsService.deleteContact(contactToBeDeleted!._id);

    setContacts((prevState:any) => prevState.filter(
      (contact:any) => contact._id !== contactToBeDeleted?._id
    ));
  } catch { } finally {
    setIsDeletingContact(false);
    handleCloseDeleteModal();
  }
}
