import Facebook from '@/icons/Facebook';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-row gap-2 items-center justify-center mb-[5vw] w-80 mx-auto">
      <a
        href="https://www.facebook.com/profile.php?id=100064667021144"
        target="_blank"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <p className="text-xs">© {year} songandtaestudio</p>
    </footer>
  );
};

export default Footer;
