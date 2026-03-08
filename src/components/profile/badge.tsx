import { useRef } from "react";

export const Badge = () => {
  const h1Ref = useRef(null);
  return (
    <div
      className="flex flex-col gap-4 overflow-hidden sm:flex-row sm:gap-5 max-w-max mx-auto lg:mx-0 
       border-border/66 border-b pb-5 bp-9:border-b-0 bp-9:pb-0 bp-9:border-r bp-9:pr-4"
    >
      <div
        className={
          "h-max w-full sm:max-w-max flex justify-center [&>div]:relative"
        }
      >
        <div className="pt-2">
          <div className="size-50 rounded-full overflow-hidden">
            <img
              className={"size-full rounded-full shadow-profile scale-105"}
              src="/profile-photo.png"
              alt="Foto do Leonardo Souza Bento"
            />
          </div>
          <img
            className={"size-15 absolute bottom-1 right-1 bg-transparent"}
            src="/logo-icons/react.svg"
            alt="Logo do React"
          />
        </div>
      </div>
      <div
        className={
          "flex flex-col items-start justify-center [&>h1]:max-w-max [&>p]:text-large"
        }
      >
        <h1 ref={h1Ref} className="mb-1">
          Leonardo Souza Bento
        </h1>
        <p className="max-w-90">
          Desenvolvedor <strong>React</strong> Front End formando em Engenharia
          de Software
        </p>
      </div>
    </div>
  );
};
