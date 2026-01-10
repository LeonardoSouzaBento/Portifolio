import { useEqualizeSize } from '@/hooks';
import { useRef, useState } from 'react';
import { Card } from '@/ui/card';

//max-w-[28rem]
const css = {
  header: `flex flex-col gap-3 overflow-hidden`,
  imageContainer: `h-max w-full flex justify-center`,
  wrapperImage: `relative`,
  image: `size-50 rounded-full shadow-profile`,
  logo: `size-15 absolute bottom-1 right-1`,
  wrapperName: `flex flex-col items-center`,
  name: `max-w-max`,
  p: `text-large`,
};

const Profile = ({ resizingCounter }) => {
  const h1Ref = useRef(null);
  const [titleWidth, setTitleWidth] = useState(0);
  useEqualizeSize(h1Ref, setTitleWidth, resizingCounter, 'width');

  return (
    <Card className={css.header} hasHeader={false}>
      <div className={css.imageContainer}>
        <div className={css.wrapperImage}>
          <img className={css.image} src="/profile-photo.png" alt="Foto do Leonardo Souza Bento" />
          <img className={css.logo} src="/logo-icons/React.svg" alt="Logo do React" />
        </div>
      </div>
      <div className={css.wrapperName}>
        <h1 className={css.name} ref={h1Ref}>
          Leonardo Souza Bento
        </h1>
        <p className={css.p} style={{ maxWidth: titleWidth || 'none' }}>
          Desenvolvedor <strong>React</strong> Front End formando em Engenharia de Software
        </p>
      </div>
    </Card>
  );
};

export default Profile;
