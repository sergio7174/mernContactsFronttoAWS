import { ContactProps } from '../../types/types';


export async function  handleShowDeleteModal(contact: ContactProps, setIsModalVisible:any, setContactToBeDeleted:any) {

  setIsModalVisible(true);
  setContactToBeDeleted(contact);

}
