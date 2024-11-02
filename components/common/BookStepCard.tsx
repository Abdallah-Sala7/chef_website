import CustomImage from "./Image";
import { Button } from "../ui/button";

const BookStepCard = ({
  title,
  img,
  info,
  description,
}: {
  title: string;
  img?: string;

  description?: string;
  info?: string;
}) => {
  return (
    <div className="w-full rounded-xl overflow-hidden group flex flex-col">
      {img && (
        <div className={`w-full aspect-video max-h-52 overflow-hidden`}>
          <CustomImage
            src={img}
            alt={title}
            className="w-full h-full object-cover brightness-75  group-hover:brightness-100 group-hover:scale-110 transition-all duration-300 "
            width={400}
            height={400}
          />
        </div>
      )}

      <div
        className={`flex-1 min-h-40 bg-primary px-4 py-5 flex flex-col gap-2 ${
          !img ? "justify-center" : ""
        }`}
      >
        <h3 className="text-lg font-semibold text-white lg:text-2xl">
          {title}
        </h3>

        <p className="text-primary-foreground md:text-lg md:font-medium">
          {description}
        </p>

        {info && (
          <p className="text-primary-foreground md:text-lg md:font-medium">
            {info}
          </p>
        )}

        {!img && (
          <Button
            variant={"secondary"}
            size={"lg"}
            className="rounded-2xl font-bold text-lg mt-2"
          >
            Book now
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookStepCard;
