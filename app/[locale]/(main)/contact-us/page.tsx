import Image from "next/image";
import ContactForm from "./ContactForm";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";

const ContactUsPage = () => {
  return (
    <section>
      <div className="w-full bg-gray-100">
        <Image
          src="/about_cover.jpeg"
          alt="order image"
          className="w-full max-h-80 min-h-40 object-cover"
          width={1500}
          height={400}
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="container section-style">
        <div className="flex flex-col gap-10 md:justify-between md:flex-row">
          <div className="w-full max-w-xl md:flex-1">
            <div className="mb-6">
              <h2 className="title mb-2">Give your feedback</h2>

              <p className="desc">
                Questions, comments, or suggestions? Simply fill in the form and
                we’ll be in touch shortly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPinIcon className="text-secondary shrink-0" />

                <span className="title-sm">
                  1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.
                </span>
              </div>

              <div className="flex items-center gap-4">
                <PhoneCallIcon className="text-secondary shrink-0" />

                <span className="title-sm">+1 234 678 9108 99 </span>
              </div>

              <div className="flex items-center gap-4">
                <MailIcon className="text-secondary shrink-0" />

                <span className="title-sm">Contact@moralizer.com</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl md:flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
