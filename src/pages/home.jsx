import {
  AboutMe,
  Expertises,
  Profile,
  Projects,
  Technologies,
  TopNavBar,
} from '@/components/index';

const Home = ({ resizingCounter }) => {
  return (
    <>
      <TopNavBar />
      <main className={`px-3 md:px-6 lg:px-12 pb-8`}>
        {/* <PatternBackground resizingCounter={resizingCounter} /> */}
        <Profile resizingCounter={resizingCounter} />
        <Technologies />
        <AboutMe resizingCounter={resizingCounter} />
        <Projects resizingCounter={resizingCounter} />
        <Expertises />
      </main>
    </>
  );
};

export default Home;
