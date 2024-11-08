import CustomImage from "./Image";

const SpecializeCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 group">
      <div className="w-full aspect-square overflow-hidden rounded-full">
        <CustomImage
          src={image}
          alt={name}
          width={200}
          height={200}
          quality={100}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="title-base text-center transition-colors duration-300 group-hover:text-primary">
        {name}
      </h3>
    </div>
  );
};

export default SpecializeCard;
