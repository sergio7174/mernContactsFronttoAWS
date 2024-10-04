import {  useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Container,
  ContactsList,
  ContactSearchContainer,
  ContactNotFoundContainer,
  LoadingContainer,
  ErrorContainer
} from './HomeStyles';
import ContactCard from '../../components/ContactCard/ContactCard';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner';
import Modal from '../../components/Modal/Modal';
import sad from '../../assets/images/sad.svg';
import UseHome from '../../hooks/useHome';
// functions call
import { handleDeleteContact } from '../../Functions/HomeFuntions/handleDeleteContact';
import { loadContacts } from '../../Functions/HomeFuntions/loadContacts';
import { handleSearchContact } from '../../Functions/HomeFuntions/handleSearchContact';
import { handleShowDeleteModal } from '../../Functions/HomeFuntions/handleShowDeleteModal';
// components call

import  ModalDeleteContact  from './HomeComponents/ModalDeleteContact';

export default function Home() {

  const { contacts, setContacts, searchTerm, setSearchTerm, isLoading,setIsLoading,
    hasError, setHasError, isModalVisible, setIsModalVisible, contactToBeDeleted, setContactToBeDeleted,isDeletingContact, setIsDeletingContact,values} = UseHome();

  const filteredContacts = useMemo(() =>values.filter(contact => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [searchTerm,values]);


  function handleCloseDeleteModal() {
    setIsModalVisible(false);
    setContactToBeDeleted(null);
  }

  return (
    <>
    
      {contacts.length > 0 && (
        <ContactSearchContainer>
          <div className="search-contact">
            <Input
              placeholder="Search contact"
              value={searchTerm}
              onChange={event => handleSearchContact(event.target.value, setSearchTerm)}
            />
          </div>
        </ContactSearchContainer>
      )}

      <Modal
        danger
        title={`¿Estás seguro de que deseas eliminar el contacto? ${contactToBeDeleted?.name}?`}
        confirmLabel="Confirmar"
        cancelLabel="Cancelar"
        visible={isModalVisible}
        isLoading={isDeletingContact}
        onCancel={()=> handleCloseDeleteModal()}
        onConfirm={()=> handleDeleteContact(setIsDeletingContact,contactToBeDeleted, setContacts,handleCloseDeleteModal)}
      >


        <p>It is not possible to recover the contact once deleted!</p>
      </Modal>
      <ModalDeleteContact/>

      {isLoading && (
        <LoadingContainer>
          <Spinner spinnerSize={40} />
        </LoadingContainer>
      )}

      {!isLoading && hasError && (
        <ErrorContainer>
          <img src={sad} alt="Figura representando tristeza" />

          <div className="details">
            <h2>There was an error retrieving your contacts.</h2>
            <Button type="button" onClick={()=>loadContacts(setIsLoading,setHasError,setContacts)}>
              Try Again
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button>
              <Link to="/new-contact">Add New Contact</Link>
            </Button>
            
          </div>
        </ErrorContainer>
      )}

      {!isLoading && !hasError && (
        <Container>
          <Header>
            {contacts.length > 0 && (
              <h1>
                {contacts.length}
                {contacts.length === 1 ? ' Contacto' : ' Contactos'}
              </h1>
            )}

            <Link to="/new-contact">Add New Contact</Link>
          </Header>

          {contacts.length > 0 ? (
            filteredContacts.length > 0 ? (
              <ContactsList>
                {filteredContacts.map((contact) => (
                  <ContactCard
                    key={contact._id}
                    contact={contact}
                    onDelete={() => handleShowDeleteModal(contact, setIsModalVisible, setContactToBeDeleted)}
                  />
                ))}
              </ContactsList>
            ) : (
              <ContactNotFoundContainer>
                <span>
                No results found for: <strong>{searchTerm}</strong>.
                </span>
              </ContactNotFoundContainer>
            )
          ) : (
            <ContactNotFoundContainer>
              <h2>Don't have Contacts!</h2>
              <span>Add a new contact by clicking the button above.</span>
            </ContactNotFoundContainer>
          )}
        </Container>
      )}
    </>
  );
}
