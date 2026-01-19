import SocialMedia from './hero/social-media';
import Badge from './hero/badge';
import { findTitle } from '@/utils/findTitle';

const title = findTitle('redes sociais');

export const Hero = ({ resizingCounter }) => {
  return (
    <section
      id={title.keyWord}
      className={`grid grid-cols-1 gap-6 min-[830px]:grid-cols-2 mb-6 home-section`}>
      <Badge resizingCounter={resizingCounter} />
      <SocialMedia />
    </section>
  );
};
