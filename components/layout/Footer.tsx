import CustomImage from "../common/Image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary mt-6">
      <div className="container">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-5">
            <div className="md:col-span-full lg:col-span-2 flex flex-col gap-6 justify-between">
              <Link href="/">
                <CustomImage
                  src="/logo2.svg"
                  alt="Chef finder"
                  width={150}
                  height={55}
                  className="w-32 h-11 object-contain"
                  quality={100}
                />
              </Link>

              <p className="desc !text-primary-foreground">
                A Gastronomy platform for those who prefer fine dinning at home,
                an easy access to recipes from all around the world with our
                talented chefs
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="http://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/70 hover:text-primary transition duration-300"
                >
                  <svg
                    width="12"
                    height="21"
                    viewBox="0 0 12 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.19678 19.6995H7.19678V11.6895H10.8008L11.1968 7.70946H7.19678V5.69946C7.19678 5.43425 7.30214 5.17989 7.48967 4.99236C7.67721 4.80482 7.93156 4.69946 8.19678 4.69946H11.1968V0.699463H8.19678C6.8707 0.699463 5.59893 1.22625 4.66125 2.16393C3.72357 3.10161 3.19678 4.37338 3.19678 5.69946V7.70946H1.19678L0.800781 11.6895H3.19678V19.6995Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="http://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/70 hover:text-primary transition duration-300"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.8 1.19946H15.2C18.4 1.19946 21 3.79946 21 6.99946V15.3995C21 16.9377 20.3889 18.413 19.3012 19.5007C18.2135 20.5884 16.7383 21.1995 15.2 21.1995H6.8C3.6 21.1995 1 18.5995 1 15.3995V6.99946C1 5.46121 1.61107 3.98595 2.69878 2.89824C3.78649 1.81053 5.26174 1.19946 6.8 1.19946ZM6.6 3.19946C5.64522 3.19946 4.72955 3.57875 4.05442 4.25388C3.37928 4.92901 3 5.84468 3 6.79946V15.5995C3 17.5895 4.61 19.1995 6.6 19.1995H15.4C16.3548 19.1995 17.2705 18.8202 17.9456 18.145C18.6207 17.4699 19 16.5542 19 15.5995V6.79946C19 4.80946 17.39 3.19946 15.4 3.19946H6.6ZM16.25 4.69946C16.5815 4.69946 16.8995 4.83116 17.1339 5.06558C17.3683 5.3 17.5 5.61794 17.5 5.94946C17.5 6.28098 17.3683 6.59893 17.1339 6.83335C16.8995 7.06777 16.5815 7.19946 16.25 7.19946C15.9185 7.19946 15.6005 7.06777 15.3661 6.83335C15.1317 6.59893 15 6.28098 15 5.94946C15 5.61794 15.1317 5.3 15.3661 5.06558C15.6005 4.83116 15.9185 4.69946 16.25 4.69946ZM11 6.19946C12.3261 6.19946 13.5979 6.72625 14.5355 7.66393C15.4732 8.60161 16 9.87338 16 11.1995C16 12.5255 15.4732 13.7973 14.5355 14.735C13.5979 15.6727 12.3261 16.1995 11 16.1995C9.67392 16.1995 8.40215 15.6727 7.46447 14.735C6.52678 13.7973 6 12.5255 6 11.1995C6 9.87338 6.52678 8.60161 7.46447 7.66393C8.40215 6.72625 9.67392 6.19946 11 6.19946ZM11 8.19946C10.2044 8.19946 9.44129 8.51553 8.87868 9.07814C8.31607 9.64075 8 10.4038 8 11.1995C8 11.9951 8.31607 12.7582 8.87868 13.3208C9.44129 13.8834 10.2044 14.1995 11 14.1995C11.7956 14.1995 12.5587 13.8834 13.1213 13.3208C13.6839 12.7582 14 11.9951 14 11.1995C14 10.4038 13.6839 9.64075 13.1213 9.07814C12.5587 8.51553 11.7956 8.19946 11 8.19946Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="http://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/70 hover:text-primary transition duration-300"
                >
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.4591 3.19946C20.6891 3.54946 19.8591 3.77946 18.9991 3.88946C19.8791 3.35946 20.5591 2.51946 20.8791 1.50946C20.0491 2.00946 19.1291 2.35946 18.1591 2.55946C17.3691 1.69946 16.2591 1.19946 14.9991 1.19946C12.6491 1.19946 10.7291 3.11946 10.7291 5.48946C10.7291 5.82946 10.7691 6.15946 10.8391 6.46946C7.27906 6.28946 4.10906 4.57946 1.99906 1.98946C1.62906 2.61946 1.41906 3.35946 1.41906 4.13946C1.41906 5.62946 2.16906 6.94946 3.32906 7.69946C2.61906 7.69946 1.95906 7.49946 1.37906 7.19946V7.22946C1.37906 9.30946 2.85906 11.0495 4.81906 11.4395C4.18979 11.6117 3.52916 11.6356 2.88906 11.5095C3.16067 12.3619 3.6926 13.1079 4.41008 13.6424C5.12756 14.1769 5.99451 14.4732 6.88906 14.4895C5.37269 15.6899 3.49306 16.3388 1.55906 16.3295C1.21906 16.3295 0.879063 16.3095 0.539062 16.2695C2.43906 17.4895 4.69906 18.1995 7.11906 18.1995C14.9991 18.1995 19.3291 11.6595 19.3291 5.98946C19.3291 5.79946 19.3291 5.61946 19.3191 5.42946C20.1591 4.82946 20.8791 4.06946 21.4591 3.19946Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="http://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/70 hover:text-primary transition duration-300"
                >
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.04 20.7395C9 21.0295 9.97 21.1995 11 21.1995C13.6522 21.1995 16.1957 20.1459 18.0711 18.2705C19.9464 16.3952 21 13.8516 21 11.1995C21 9.88624 20.7413 8.58588 20.2388 7.37263C19.7362 6.15937 18.9997 5.05698 18.0711 4.1284C17.1425 3.19981 16.0401 2.46321 14.8268 1.96067C13.6136 1.45812 12.3132 1.19946 11 1.19946C9.68678 1.19946 8.38642 1.45812 7.17317 1.96067C5.95991 2.46321 4.85752 3.19981 3.92893 4.1284C2.05357 6.00376 1 8.5473 1 11.1995C1 15.4495 3.67 19.0995 7.44 20.5395C7.35 19.7595 7.26 18.4695 7.44 17.5795L8.59 12.6395C8.59 12.6395 8.3 12.0595 8.3 11.1395C8.3 9.75946 9.16 8.72946 10.14 8.72946C11 8.72946 11.4 9.35946 11.4 10.1695C11.4 11.0295 10.83 12.2595 10.54 13.4395C10.37 14.4195 11.06 15.2795 12.06 15.2795C13.84 15.2795 15.22 13.3795 15.22 10.6995C15.22 8.29946 13.5 6.65946 11.03 6.65946C8.21 6.65946 6.55 8.75946 6.55 10.9695C6.55 11.8295 6.83 12.6995 7.29 13.2695C7.38 13.3295 7.38 13.4095 7.35 13.5595L7.06 14.6495C7.06 14.8195 6.95 14.8795 6.78 14.7595C5.5 14.1995 4.76 12.3795 4.76 10.9095C4.76 7.74946 7 4.87946 11.32 4.87946C14.76 4.87946 17.44 7.34946 17.44 10.6295C17.44 14.0695 15.31 16.8295 12.26 16.8295C11.29 16.8295 10.34 16.3095 10 15.6995L9.33 18.0695C9.1 18.9295 8.47 20.0795 8.04 20.7695V20.7395Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h2 className="title mb-2 text-white">Links</h2>

              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/about"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    About us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    href="/careers"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    href="/job"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Job
                  </Link>
                </li>

                <li>
                  <Link
                    href="/register"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Chef Register
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="title mb-2 text-white">Support</h2>

              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/contact"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Contact us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/chat"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Online chat
                  </Link>
                </li>

                <li>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Whatsapp
                  </a>
                </li>

                <li>
                  <a
                    href="https://t.me/Example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Telegram
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="title mb-2 text-white">FAQ</h2>

              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/account"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Account
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Manage
                  </Link>
                </li>

                <li>
                  <Link
                    href="/order"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Order
                  </Link>
                </li>

                <li>
                  <Link
                    href="/payment"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Payment
                  </Link>
                </li>

                <li>
                  <Link
                    href="/return"
                    className="title-sm text-primary-foreground !font-medium hover:text-secondary"
                  >
                    Return
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-muted/10 py-4">
        <div className="container">
          <p className="text-sm text-primary-foreground text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-secondary">Chef Finder</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
