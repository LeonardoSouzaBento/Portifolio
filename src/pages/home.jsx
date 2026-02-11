import {
  AboutMe,
  Experience,
  Profile,
  Projects,
  Technologies,
  TopNavBar,
  PatternBackground
} from '@/components/index';

const Home = ({ resizeCount }) => {
  return (
    <>
      <TopNavBar />
      <main className={`px-3 md:px-6 lg:px-12 pb-8`}>
        <PatternBackground resizeCount={resizeCount} />
        <Profile resizeCount={resizeCount} />
        <Technologies />
        <AboutMe resizeCount={resizeCount} />
        <Projects resizeCount={resizeCount} />
        <Experience />
      </main>
    </>
  );
};

export default Home;
