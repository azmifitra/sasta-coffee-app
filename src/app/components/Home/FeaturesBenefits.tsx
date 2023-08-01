import Image from "next/image";

export default function FeaturesBenefits() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between px-12 py-20">
      <div className="mb-10 flex">
        <div className="w-1/2">
          <h2 className="mb-2 text-5xl font-bold">Features</h2>
          <ul className="ml-4 text-lg leading-tight">
            <li className="list-disc">
              We offer premium quality green coffee beans sourced from the
              finest coffee plantations in West Java.
            </li>
            <li className="list-disc">
              Our coffee products are carefully selected and roasted to
              perfection, ensuring a rich and flavorful taste.
            </li>
            <li className="list-disc">
              We provide a wide range of coffee green beans, roasted blends and
              single-origin beans to cater to the diverse tastes of our
              customers.
            </li>
            <li className="list-disc">
              Our coffee production process adheres to strict quality standards,
              ensuring that our products are free from any contaminants or
              impurities.
            </li>
            <li className="list-disc">
              We offer competitive pricing and timely delivery of our coffee
              products to our customers, ensuring their satisfaction and
              loyalty.
            </li>
          </ul>
        </div>
        <div className="flex w-1/2 justify-center">
          <div className="image-container w-11/12">
            <Image
              src="/green-1.jpg"
              layout="fill"
              className={"image"}
              alt="about-us-pict"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-1/2">
          <div className="image-container w-11/12">
            <Image
              src="/green-2.jpg"
              layout="fill"
              className={"image"}
              alt="about-us-pict"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="mb-2 text-5xl font-bold">Benefits</h2>
          <ul className="ml-4 text-lg leading-tight">
            <li className="list-disc">
              Our coffee is sourced directly from West Java, ensuring high
              quality and unique flavor profiles.
            </li>
            <li className="list-disc">
              We offer a wide range of coffee products, from green beans for
              home roasting to pre-roasted beans for convenience.
            </li>
            <li className="list-disc">
              Our coffee is sustainably produced, with a focus on ethical and
              environmentally friendly practices.
            </li>
            <li className="list-disc">
              By purchasing our coffee, you are supporting local farmers and
              communities in West Java.
            </li>
            <li className="list-disc">
              We provide personalized service and expert advice on choosing and
              brewing the perfect cup of coffee.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
