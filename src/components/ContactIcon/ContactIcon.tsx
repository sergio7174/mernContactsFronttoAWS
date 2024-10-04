import { Wrapper } from './ContactIconstyles';

interface ContactIconProps {
  name: string;
  size?: number;
  image?: File | string;
}

export default function ContactIcon({ name, size, image }: ContactIconProps) {
  const imageSource = image && (
    typeof image === 'string' ? image : URL.createObjectURL(image)
  );

  return (
    <Wrapper iconSize={size} className="contact-icon">
      {imageSource ? (<img src={imageSource} alt={`Contact ${name}`}/>
      ) : (
        <div className="letter">{name[0]}</div>
      )}
    </Wrapper>
  );
}
