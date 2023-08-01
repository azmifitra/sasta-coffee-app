import Image from "next/image";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { GiCoffeeBeans } from "react-icons/gi";

export default function AboutUs() {
  return (
    <div className="relative flex w-full flex-col-reverse items-center bg-orange-secondary p-6 md:flex-row md:px-12 md:py-24">
      <BiSolidCoffeeBean
        fontSize="54px"
        color="#FFF"
        className="absolute left-[80%] top-[2%] md:left-6 md:top-[8%]"
      />
      <GiCoffeeBeans
        fontSize="64px"
        color="#FFF"
        className="absolute bottom-[2%] right-10 md:bottom-[6%]"
      />

      <Image
        src="/us-hero.jpg"
        width={500}
        height={500}
        alt="about-us-pict"
        className="mt-5 h-1/2 w-1/2 md:h-full md:w-full"
      />
      <div className="relative text-white md:ml-6">
        <h1 className="mb-2 text-4xl font-semibold md:text-6xl md:font-bold">
          About Us
        </h1>
        <h3 className="text-justify text-sm leading-tight md:text-lg md:leading-5">
          Sasta Indonesia Coffee was founded to share a passion for producing
          high-quality coffee. Our team of experienced coffee producers
          carefully selects and roasts our beans to perfection, ensuring a rich
          and flavorful cup of coffee every time. We take pride in our
          commitment to sustainable and ethical coffee production practices,
          ensuring that our customers can enjoy their coffee with a clear
          conscience. <br />
          At our core, we champion sustainability and ethical practices. By
          collaborating closely with local farming communities, we create a
          positive impact on livelihoods while safeguarding the environment and
          also, we support eco-friendly initiatives, striving to leave a
          positive impact on both people and the planet. With our commitment to
          fair trade, you can rest assured that your partnership with us
          supports not just exceptional coffee, but also the well-being of those
          who bring it to life.
        </h3>
      </div>
    </div>
  );
}
