import BookStepCard from "@/components/common/BookStepCard";
import CustomImage from "@/components/common/Image";
import ImpactCard from "@/components/common/ImpactCard";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import {
  ChefHatIcon,
  ConciergeBellIcon,
  Contact2Icon,
  MenuSquareIcon,
} from "lucide-react";

const specialization = [
  {
    name: "Seafood",
    image: "/specialization/seafood.jpeg",
  },
  {
    name: "Beverages",
    image: "/specialization/beverages.jpeg",
  },
  {
    name: "Breakfast",
    image: "/specialization/breakfast.jpeg",
  },
  {
    name: "Pasta",
    image: "/specialization/pasta.jpeg",
  },
  {
    name: "Poultry",
    image: "/specialization/poultry.png",
  },
  {
    name: "Vegetarian",
    image: "/specialization/vegetarian.jpeg",
  },
  {
    name: "Meats",
    image: "/specialization/meats.jpeg",
  },
];

const howToOrder = [
  {
    title: "Book Now",
    description: "Click the “Book Now” button to start your order.",
    img: "/how_to_order/book_step_1.png",
  },
  {
    title: "Enter Your Details",
    description:
      "Provide information like service type, attendees' ages (for groups), meal type, and cuisine.",
    info: "Choose the date for your booking.",
    img: "/how_to_order/book_step_2.png",
  },
  {
    title: "Register",
    description:
      "If you're not registered, sign up with your Email ,Passwored, phone number and address.",
    img: "/how_to_order/book_step_3.png",
  },
  {
    title: "Admin Contact",
    description:
      "One of our admins will contact you to clarify important details and finalize the payment.",
    img: "/how_to_order/book_step_4.png",
  },
  {
    title: "Enjoy the Service",
    description:
      "Sit back and relax as we provide a clean and professional experience.",
    info: "After your service, give us feedback to help us improve.",
    img: "/how_to_order/book_step_5.png",
  },
  {
    title: "Excited?",
    description: "Book your culinary experience with just a click!",
    img: "",
  },
];

const impact = [
  {
    icon: <Contact2Icon size={45} />,
    title: "Guests",
    value: "200",
  },
  {
    icon: <MenuSquareIcon size={45} />,
    title: "Order",
    value: "90",
  },
  {
    icon: <ChefHatIcon size={45} />,
    title: "Chef Quality",
    value: "4.3",
  },
  {
    icon: <ConciergeBellIcon size={45} />,
    title: "Food Quality",
    value: "4.5",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative z-10">
        <div className="absolute inset-0 -z-10">
          <CustomImage
            src="/hero_cover.png"
            alt="Chef finder home"
            fill
            sizes="100vw"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="container h-[calc(100vh-75px)] flex justify-center items-center">
          <div className="py-6 px-4 rounded-2xl max-w-xl bg-muted/50 flex flex-col justify-center items-center gap-4 md:gap-6 md:py-10 md:px-10">
            <h1 className="text-center text-2xl md:text-3xl font-semibold">
              Welcome to Chef finder
            </h1>

            <div className="flex flex-col justify-center items-center gap-6">
              <p className="text-center text-sm md:text-base">
                Enjoy a luxurious cooking experience in your home Are you
                looking for a special chef to prepare a special meal? Leave the
                effort to us! At chef finder, we provide you with the best chefs
                based on your needs and requirements
              </p>

              <span className="hidden md:block -mb-4 animate-bounce">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_491_2859"
                    maskUnits="userSpaceOnUse"
                    x="3"
                    y="1"
                    width="28"
                    height="32"
                  >
                    <path
                      d="M4.99609 7.08301H20.5794V2.83301H4.99609V7.08301Z"
                      fill="#555555"
                      stroke="white"
                      strokeWidth="2.83333"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5794 7.08301C25.1978 12.1285 27.8469 15.0525 28.5283 15.855C29.5505 17.0592 29.1212 18.4192 26.5627 18.4192C24.0042 18.4192 22.5288 14.6756 20.5794 14.6756C20.5681 14.6735 20.5674 19.4611 20.5773 29.0385C20.5777 29.3177 20.523 29.5943 20.4165 29.8524C20.31 30.1105 20.1537 30.345 19.9565 30.5427C19.7592 30.7404 19.525 30.8972 19.2672 31.0044C19.0094 31.1115 18.7329 31.1668 18.4537 31.167H18.4516C18.1721 31.167 17.8953 31.112 17.6371 31.005C17.3789 30.898 17.1443 30.7412 16.9467 30.5436C16.7491 30.3459 16.5924 30.1113 16.4855 29.853C16.3786 29.5948 16.3237 29.318 16.3238 29.0385V23.3648C10.6762 22.5091 7.60559 22.0366 7.11259 21.9481C6.37309 21.8156 4.99609 21.1094 4.99609 19.0772V7.08301H20.5794Z"
                      stroke="white"
                      strokeWidth="2.83333"
                      strokeLinejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_491_2859)">
                    <path d="M0 0H34V34H0V0Z" fill="#B22222" />
                  </g>
                </svg>
              </span>
            </div>

            <Link href={"/new-order"}>
              <Button className="px-6">Book Now</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 mb-6">
        <div className="container flex justify-between items-center gap-6 flex-wrap">
          <div className="w-full md:w-auto md:flex-1">
            <h2 className="title mb-4">About</h2>

            <p className="text-muted-foreground">
              At chef finder we provide you with chefs of your own choice, for
              home dinning,parties,birthdays. At chef finder you can as well
              find a bartender and a waiter for your special occasion. Welcome
              to chef finder a wide gastronomy platform at the tip of your
              finger.
            </p>
          </div>

          <div className="w-full md:w-auto md:flex-1 md:max-w-2xl aspect-video overflow-hidden rounded-2xl">
            <CustomImage
              src={"/about_cover.jpeg"}
              alt="Chef finder about"
              width={500}
              height={500}
              className="w-full h-full object-top object-cover hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      <section className="section-style">
        <div className="container">
          <h2 className="title mb-12 text-center">Specialization</h2>

          <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 md:gap-12">
            {specialization.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-center items-center gap-4 group"
              >
                <div className="w-full aspect-square overflow-hidden rounded-full">
                  <CustomImage
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    quality={100}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="font-semibold text-center transition-colors duration-300 md:text-lg group-hover:text-primary">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 my-6">
        <div className="container">
          <h2 className="title mb-12 text-center">How do you order a chef?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howToOrder.map((item, i) => (
              <BookStepCard
                key={i}
                title={item.title}
                img={item.img}
                description={item.description}
                info={item.info}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-style">
        <div className="container">
          <h2 className="title mb-12 text-center">The Impact We've Made</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {impact.map((item, i) => (
              <ImpactCard
                key={i}
                icon={item.icon}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
