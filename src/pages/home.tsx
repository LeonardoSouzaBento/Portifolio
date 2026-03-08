import {
  AboutMe,
  Experience,
  Profile,
  Projects,
  Technologies,
  TopNavBar,
  PatternBackground
} from '@/components/index';

interface HomeProps {
  resizeCount: number;
}

const Home = ({ resizeCount }: HomeProps) => {
  return (
    <>
      <TopNavBar />
      <main className={`px-3 md:px-6 lg:px-12 pb-8`}>
        <PatternBackground resizeCount={resizeCount} />
        <Profile/>
        <Technologies />
        <AboutMe resizeCount={resizeCount} />
        <Projects resizeCount={resizeCount} />
        <Experience />
      </main>
    </>
  );
};

export default Home;
