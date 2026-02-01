import React from 'react';

const css = {
  labelsWrapper: `flex flex-wrap gap-2 py-3 border-t border-b border-border/66`,
  label: `text-xs bg-primary-50 text-primary-700 rounded-full px-[1cap] pb-0.5 max-w-max`,
};

const ProjectHeader = ({ project , textTransform}) => {
  return (
    <div className="px-4">
      <h6 className={`${textTransform} mt-ex-offset pb-ex-offset`}>{project.name}</h6>
      <div className={css.labelsWrapper}>
        {project.labels.map((label) => (
          <p key={label} className={css.label}>
            {label}
          </p>
        ))}
      </div>
    </div>
  );
};

export { ProjectHeader };
