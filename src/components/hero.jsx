import { sectionStyles } from '@/App';
import Contacts from './hero/contacts';
import Profile from './hero/profile';
import { sectionsTitles } from '../data/sectionsTitles';

const title = sectionsTitles.find((title) => title.keyWord === 'redes sociais');

const Hero = ({ wasResize }) => {
  return (
    <section id={title.keyWord} className={`grid grid-cols-1 gap-6 min-[830px]:grid-cols-2 ${sectionStyles} mb-6`}>
      <Profile wasResize={wasResize} />
      <Contacts />
    </section>
  );
};

export default Hero;
