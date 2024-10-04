import { Link } from 'react-router-dom';

import { ContactProps } from '../../types/types';
import { Container, Info } from './ContactCardstyles';
import ContactIcon from '../ContactIcon/ContactIcon';

//import trashIcon from '../../assets/images/trash.svg';
const trashIcon = require("../../assets/images/trash.svg") as string; //works fine in *.tsx 
const editIcon = require("../../assets/images/edit.svg") as string; //works fine in *.tsx 

interface ContactCardProps  {
  contact: ContactProps; // interface de contact
  onDelete: () => void;
  //toggleFunction: (param: any) => void;
}



const apiServer = process.env.REACT_APP_API_SERVER;


export default function ContactCard({ contact, onDelete }: ContactCardProps) {
 
  //export const ContactCard: React.FC<ContactCardProps> = ({ contact, onDelete }) => {
  const imageUrl = (
    contact.imagePath ? `${apiServer}/uploads/${contact.imagePath}` : ''
   // contact.imagePath ? 'http://localhost:9000/uploads/1701817147433-FOTOMOD001.jpg' : ''
  );


  return (
    <Container>
      <div className="details">
      
        <h2>{`${apiServer}/uploads/${contact.imagePath}`}</h2>
        <img src={`${apiServer}/uploads/${contact.imagePath}`} alt='Avatar'/>
        <ContactIcon name={contact.name} image={imageUrl} size={45} />

        <Info>
          <div className="name">
            <h3>{contact.name}</h3>

            {contact.category && (
              <span className="label">{contact.category}</span>
            )}
          </div>

          <div className="phone">
            {contact.phone ? (
              <h2>{contact.phone}</h2>
            ) : (
              <h2 className="empty">Sin numero</h2>
            )}
          </div>

          {contact.email && (
            <div className="email">
              <span>{contact.email}</span>
            </div>
          )}
        </Info>
      </div>

      <div className="actions">
        <Link to={`/editar/${contact._id}`}>
          <img src={editIcon} alt="Icono de edición" />
        </Link>
        <button onClick={onDelete}>
          <img src={trashIcon} alt="icono de papelera" />
        </button>
      </div>
    </Container>
  );
}
