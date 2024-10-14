import Image from 'next/image';
import { Lato } from 'next/font/google';

const lato = Lato({ weight: '400', subsets: ['latin'] });

const Home = () => {
  return <div className={`${lato.className}`}>home placeholder</div>;
};

export default Home;
