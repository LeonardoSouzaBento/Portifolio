import { sectionStyles } from '@/App';
import Contacts from './hero/contacts';
import Profile from './hero/profile';
import { findTitle } from '@/utils/findTitle';

const title = findTitle('redes sociais');

const Hero = ({ resizingCounter }) => {
  return (
    <section
      id={title.keyWord}
      className={`grid grid-cols-1 gap-6 min-[830px]:grid-cols-2 ${sectionStyles} mb-6`}>
      <Profile resizingCounter={resizingCounter} />
      <Contacts />
    </section>
  );
};

export default Hero;
