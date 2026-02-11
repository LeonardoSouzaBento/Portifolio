import { projectsData } from "@/data/projectsData";
import { useMouseScrollX } from "@/hooks/useMouseScrollX";
import { Card, CardContent, CardHeader, CardTitle, Separator } from "@/ui";
import { findTitle } from "@/utils/findTitle";
import { useRef } from "react";
import { Links, Patterns, ProjectHeader, ProjectImage } from "./projects/index";

//bg-linear-to-t from-primary-50/25 to-transparent
const css = {
  cardContent: `overflow-hidden p-0 bg-primary-50/12 rounded-t-xl`,
  container: `p-6 pt-5 w-full flex gap-4 sm:gap-5 overflow-x-scroll scrollbar-hidden 
  [*]:touch-scroll-x [*]:select-none bg-transparent`,
  wrapper: `h-144 xxs:min-w-70 xs:min-w-74 md-sm:min-w-80 sm:min-w-84 shadow-sm border border-border/30 hover:border-border/50 transition-all 
  duration-200 rounded-lg pb-4 bg-light-bg relative`,
  mainLabel: `pb-0.5 px-[0.9em] flex items-center backdrop-blur-xs bg-primary-50/66 rounded-full
  text-xs absolute top-2 left-2 z-2 shadow-xs/12 text-primary-1000 border border-primary-50/20`,
};

const title = findTitle("projetos");

export const Projects = ({ resizeCount }) => {
  const parentRef = useRef(null);
  const wrapperRef = useRef(null);

  useMouseScrollX(parentRef, wrapperRef, resizeCount);

  return (
    <Card id={title.keyWord} className={`home-section px-0 pb-0`}>
      <CardHeader className="px-6 mb-0">
        <CardTitle className="mb-2">
          <h3>{title.title}</h3>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className={css.cardContent} ref={parentRef}>
        <div className={css.container} ref={wrapperRef}>
          {projectsData.map((project, index) => {
            const imageContraste =
              project.id === "pet-shop" ? "hue-rotate-9" : "";
            const textTransform = index === 5 ? "normal-case" : "capitalize";
            return (
              <div key={project.id} className={css.wrapper}>
                {project.mainLabel && (
                  <div className={css.mainLabel}>{project.mainLabel}</div>
                )}
                <ProjectImage
                  project={project}
                  imageContraste={imageContraste}
                />
                <div className={"overflow-hidden"}>
                  <ProjectHeader
                    project={project}
                    textTransform={textTransform}
                  />
                  <div className={`h-max px-4 overflow-y-hidden`}>
                    <p className="text-sm pt-ex-offset pb-3">
                      {project.description}
                    </p>
                    {project.id !== "portfolio" && <Links project={project} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
      <Patterns />
    </Card>
  );
};
