import { findTitle } from "@/utils/findTitle";
import { Badge, SocialMedia } from "./profile/index";
import { Card } from "@/ui";

const title = findTitle("redes sociais");

export const Profile = () => {
  if (!title) return null;
  return (
    <section
      id={`${title.keyWord}`}
      className={`mb-6 home-section`}
    >
      <Card className="h-max flex flex-col items-start bp-9:flex-row bp-9:items-center gap-4">
        <Badge />
        <SocialMedia />
      </Card>
    </section>
  );
};
