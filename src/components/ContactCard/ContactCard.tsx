import { Link } from 'react-router-dom';
import { ContactProps } from '../../types/types';
import { Container, Info } from './ContactCardstyles';
import ContactIcon from '../ContactIcon/ContactIcon';
import trashIcon from '../../assets/images/trash.svg';
import editIcon from '../../assets/images/edit.svg';


interface ContactCardProps {
  contact: ContactProps;
  onDelete: () => void;
}

const apiServer = process.env.REACT_APP_API_SERVER;


export default function ContactCard({ contact, onDelete }: ContactCardProps) {

 const imageUrl = (
  contact.imagePath ? `${apiServer}/uploads/${contact.imagePath}` : ''
 
  );


  return (
    
 <Container>
  <div className="details">
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
              <h2 className="empty">Sin Numero</h2>
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
          <img src={editIcon} alt="Edition Icon" />
        </Link>
        <button onClick={onDelete}>
          <img src={trashIcon} alt="Trahs Icon" />
        </button>
      </div>
    </Container>
  );
}
