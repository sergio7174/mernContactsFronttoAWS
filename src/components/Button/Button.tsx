import { StyledButton } from './Buttonstyles';
import Spinner from '../Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  isSecondary?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, isLoading, isSecondary, onClick } = props;

  return (
    <StyledButton isSecondary={isSecondary} onClick={onClick} {...props}>
      {isLoading ? (
        <>
          <Spinner spinnerSize={12} spinnerColor="#000" />
          <span>Espere...</span>
        </>
      ) : children}
    </StyledButton>
  );
}
