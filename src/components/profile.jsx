import SocialMedia from './profile/social-media';
import Badge from './profile/badge';
import { findTitle } from '@/utils/findTitle';

const title = findTitle('redes sociais');

export const Profile = ({ resizingCounter }) => {
  return (
    <section
      id={title.keyWord}
      className={`grid grid-cols-1 gap-6 min-[830px]:grid-cols-2 mb-6 home-section`}>
      <Badge resizingCounter={resizingCounter} />
      <SocialMedia />
    </section>
  );
};
