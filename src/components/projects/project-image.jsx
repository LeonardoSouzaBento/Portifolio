import React from 'react';

const css = {
  imageWrapper: `w-full h-60 overflow-y-scroll rounded-t-lg relative bg-background/12 cursor-pointer`,
  gradient: `h-8 absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-1000/3 to-primary-50/0`,
  img: `w-full h-auto object-cover bg-background/8`,
};

const ProjectImage = ({ project, imageContraste }) => {
  return (
    <div className="relative">
      <div className={css.imageWrapper}>
        <img src={project.image} className={`${css.img} ${imageContraste}`} alt="" />
      </div>
      <div className={css.gradient} />
    </div>
  );
};

export { ProjectImage };
