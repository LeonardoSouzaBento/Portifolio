import {
  AboutMe,
  Experience,
  Profile,
  Projects,
  Technologies,
  TopNavBar,
  PatternBackground,
} from "@/components/index";
// import { Index as GitHubFilesExplorer } from "github-project-file-explorer";
// import "github-project-file-explorer/dist/style.css";

interface HomeProps {
  resizeCount: number;
}

const Home = ({ resizeCount }: HomeProps) => {
  return (
    <>
      <TopNavBar />
      <main className={`px-3 md:px-6 lg:px-12 pb-8`}>
        <PatternBackground resizeCount={resizeCount} />
        <Profile />
        <Technologies />
        <AboutMe resizeCount={resizeCount} />
        <Projects resizeCount={resizeCount} />
        <Experience />
        {/* <GitHubFilesExplorer
          repoUrls={ [
            "https://github.com/LeonardoSouzaBento/SupermercadoDoBom",
            "https://github.com/LeonardoSouzaBento/CatalogoDeRoupas",
            "https://github.com/LeonardoSouzaBento/GeradorDeCSS ",
            "https://github.com/LeonardoSouzaBento/Pet-ShopLandingPage",
            "https://github.com/LeonardoSouzaBento/MeusFilmesFavoritos",
            "https://github.com/LeonardoSouzaBento/Portifolio",
          ]}
          cssWrapper="min-h-[600px]"
        /> */}
      </main>
    </>
  );
};

export default Home;
