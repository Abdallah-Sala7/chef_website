"use client";

import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <form action="" className="w-full">
      <Card className="space-y-4 px-4 py-8 md:px-8 md:py-12">
        <div className="flex-col flex gap-4 md:flex-row">
          <Input
            type="text"
            placeholder="First Name*"
            name="first-name"
            className="flex-1"
            required
          />
          <Input
            type="text"
            placeholder="Last Name*"
            name="last-name"
            className="flex-1"
            required
          />
        </div>

        <Input type="email" placeholder="Email*" name="email" required />

        <Input type="tel" placeholder="Phone Number*" name="phone" required />

        <Textarea placeholder="Your message..." name="message" />

        <div className="pt-2">
          <Button type="submit" className="w-full rounded-xl" size={"lg"}>
            Send Message
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default ContactForm;
