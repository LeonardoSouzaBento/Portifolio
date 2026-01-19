import {
  AboutMe,
  Hero,
  Implementations,
  Nav,
  Patterns,
  Projects,
  Technologies,
  // PatternBackground,
} from '@/components/index';

const Home = ({ resizingCounter }) => {
  return (
    <>
      <Nav />
      <main className={`px-3 md:px-6 lg:px-12 pb-8`}>
        {/* <PatternBackground resizingCounter={resizingCounter} /> */}
        <Hero resizingCounter={resizingCounter} />
        <Technologies />
        <AboutMe resizingCounter={resizingCounter} />
        <Projects resizingCounter={resizingCounter} />
        <Implementations />
      </main>
    </>
  );
};

export default Home;
