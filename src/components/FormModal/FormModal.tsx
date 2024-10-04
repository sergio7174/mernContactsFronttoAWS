import { Link } from 'react-router-dom';
import { Container, Wrapper } from './FormModalStyles';
import closeIcon from '../../assets/images/close.svg';


interface FormModalProps {
  children: React.ReactNode;
  title: string;
}

export default function FormModal(props: FormModalProps) {
  const { children, title } = props;

  return (
    <Container>
      <Wrapper>
        <div className="header">
          <h3>{title}</h3>

          <Link to="/" className="close">
            <img src={closeIcon} alt="Close Icon" />
          </Link>
        </div>

        {children}
      </Wrapper>
    </Container>
  );
}
