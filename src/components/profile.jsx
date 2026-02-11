import { findTitle } from "@/utils/findTitle";
import { Badge, SocialMedia } from "./profile/index";

const title = findTitle("redes sociais");

export const Profile = ({ resizeCount }) => {
  return (
    <section
      id={`${title.keyWord}`}
      className={`grid grid-cols-1 gap-6 min-[830px]:grid-cols-2 mb-6 home-section`}
    >
      <Badge resizeCount={resizeCount} />
      <SocialMedia />
    </section>
  );
};
