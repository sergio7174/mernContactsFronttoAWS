import useHome from '../../../hooks/useHome';
import Modal from '../../../components/Modal/Modal';
import { handleDeleteContact } from '../../../Functions/HomeFuntions/handleDeleteContact';




const ModalDeleteContact:any = () => {

  const { setContacts, isModalVisible, setIsModalVisible, contactToBeDeleted, setContactToBeDeleted,isDeletingContact, setIsDeletingContact} = useHome();

    function handleCloseDeleteModal() {
      setIsModalVisible(false);
      setContactToBeDeleted(null);
    }

    return (
               <>
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


        <p>¡No es posible recuperar el contacto una vez eliminado!</p>
      </Modal>



</> )

  }

export default ModalDeleteContact;
