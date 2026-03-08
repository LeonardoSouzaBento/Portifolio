import { links, buttons } from "@/data/contactData";
import { Button, ButtonsWrapper, Icon } from "@/ui";

export const SocialMedia = () => {
  return (
    <div
      className={`h-full w-full pt-2 flex flex-col items-center lg:items-start gap-3
      justify-center bp-9:max-w-76 xl:max-w-100`}
    >
      <ButtonsWrapper className="order-2 bp-4:justify-center bp-9:justify-start">
        {buttons.map((item) => (
          <Button key={item.name} variant={item.variant} asChild>
            <a
              key={item.name}
              href={item.link}
              target="_github"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </Button>
        ))}
        {links.map((item, index) => (
          <Button
            asChild
            className={"select-auto normal-case rounded-full"}
            size="sm"
            key={item.name}
            variant="ghost"
          >
            <a
              key={item.name}
              href={item.link}
              target="_linkedin"
              rel="noopener noreferrer"
            >
              <Icon Icon={item.icon} className={index === 1 ? "mt-1" : ""} />
              {item.name}
            </a>
          </Button>
        ))}
      </ButtonsWrapper>
    </div>
  );
};
