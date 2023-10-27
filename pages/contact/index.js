import Image from "next/image";
import { CiInstagram, CiMail, CiLinkedin } from "react-icons/CI";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-black w-full h-full absolute right-0 bottom-0 z-10">
      <section className=" container flex   w-full h-full">
        <div className="w-2/4 flex flex-col items-center justify-center text-center">
          <Image
            src="/contact.jpg"
            width={600}
            height={400}
            alt=""
            className="h-full  absolute left-0 bottom-0"
          />
        </div>
        <div className="w-2/4 flex flex-col items-center  text-center mt-48">
          <div>
            <h1 className="font-nomark xl:text-7xl text-2xl ">À propos</h1>
          </div>
          <div className="text-5xl flex flex-row gap-10 mt-10">
            <CiInstagram />
            <CiMail />
            <CiLinkedin />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
