import Facebook from '@/icons/Facebook';
import Instagram from '@/icons/Instagram';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-row gap-2 items-center justify-center w-80 mx-auto pb-4 bottom-16">
      <a
        href="https://www.facebook.com/profile.php?id=100064667021144"
        target="_blank"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a href="https://www.instagram.com/song_tae_studio/" target="_blank">
        <Instagram className="h-5 w-5" />
      </a>
      <p className="text-xs">© {year} songandtaestudio</p>
    </footer>
  );
};

export default Footer;
