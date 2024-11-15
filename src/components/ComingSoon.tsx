import { Lato } from 'next/font/google';

const lato = Lato({ weight: '400', subsets: ['latin'] });

const ComingSoon = () => {
  return (
    <div className="flex justify-center items-center h-60">
      <h1 className={`${lato.className} text-4xl font-bold`}>Coming Soon</h1>
    </div>
  );
};

export default ComingSoon;
