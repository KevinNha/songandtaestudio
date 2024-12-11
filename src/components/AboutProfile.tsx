import Image from 'next/image';

type AboutProfileProps = {
  font: string;
  name: string;
  description: string;
  imageUrl: string;
  alt: string;
  leftToRight?: boolean;
};

const Name = ({
  font,
  position,
  name,
  description,
}: {
  font: string;
  position: string;
  name: string;
  description: string;
}) => {
  return (
    <div
      className={`${font} ${position} md:max-w-[500px] flex flex-col gap-4 md:gap-10 md:pt-10`}
    >
      <p className="text-2xl">{name}</p>
      <p>{description}</p>
    </div>
  );
};

const ImageContainer = ({
  imageUrl,
  alt,
  position,
}: {
  imageUrl: string;
  alt: string;
  position: string;
}) => {
  return (
    <div className={`${position} w-full h-auto md:max-w-[500px] shadow-2xl`}>
      <Image
        className="object-cover rounded-lg"
        src={`https://${imageUrl}`}
        alt={alt}
        width={1500} // using arbitrary values
        height={1500} // using arbitrary values
        sizes="(max-width: 1280) 55vw, 33vw"
      />
    </div>
  );
};

const AboutProfile = (props: AboutProfileProps) => {
  return props.leftToRight ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
      <ImageContainer
        imageUrl={props.imageUrl}
        alt={props.alt}
        position="md:justify-self-end"
      />
      <Name
        font={props.font}
        position="md:justify-self-start"
        name={props.name}
        description={props.description}
      />
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
      <Name
        font={props.font}
        position="md:justify-self-end"
        name={props.name}
        description={props.description}
      />
      <ImageContainer
        imageUrl={props.imageUrl}
        alt={props.alt}
        position="md:justify-self-start"
      />
    </div>
  );
};

export default AboutProfile;
