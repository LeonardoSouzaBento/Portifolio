import { type LucideIcon, Mail, Phone } from "lucide-react";
import { iconPaths } from "./imageIconPaths";

interface LinkItem {
  icon: LucideIcon;
  name: string;
  link: string;
}

interface ButtonItem {
  name: string;
  icon: string;
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "transparent";
  link: string;
}

export const links: LinkItem[] = [
  {
    icon: Phone,
    name: "(34) 98412-5832",
    link: "https://wa.me/5534984125832",
  },
  {
    icon: Mail,
    name: "bentosouzaleonardo@gmail.com",
    link: "mailto:bentosouzaleonardo@gmail.com",
  },
];

export const buttons: ButtonItem[] = [
  {
    name: "LinkedIn",
    icon: iconPaths.linkedin,
    variant: "default",
    link: "https://www.linkedin.com/in/leonardo-souza-bento-dev/",
  },
  {
    name: "GitHub",
    icon: iconPaths.github,
    variant: "outline",
    link: "https://github.com/LeonardoSouzaBento",
  },
];
