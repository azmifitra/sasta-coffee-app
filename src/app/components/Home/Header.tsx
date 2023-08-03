export default function Header() {
  return (
    <div className="flex min-h-[640px] w-full items-center bg-[url('assets/images/beans-hand-filter.jpg')] bg-center bg-no-repeat p-6 md:min-h-screen md:justify-end md:bg-cover md:px-12 md:py-24">
      <div className="flex flex-col text-white md:w-[65%] md:items-end">
        <h1 className="mb-5 text-4xl font-semibold md:text-6xl md:font-bold">
          Indonesian Coffee
        </h1>
        <h3 className="pb-2 text-justify text-sm leading-tight md:text-lg md:leading-5">
          As a prominent coffee producer in Indonesia, we take immense pride in
          presenting to you the exquisite flavors and aromas that our diverse
          nation has to offer.
        </h3>
        <h3 className="pb-2 text-justify text-sm leading-tight md:text-lg md:leading-5">
          Inspired by the Indonesian drinking coffee tradition, we committed to
          improve the whole sector of the coffee industry from farm, roastery,
          and customer. By offering a better price and trading condition we aim
          to empower local farmers.
        </h3>
        <h3 className="pb-2 text-justify text-sm leading-tight md:text-lg md:leading-5">
          We strive to provide an exceptional coffee experience that reflects
          our commitment to quality, sustainability, and customer satisfaction.
        </h3>
      </div>
    </div>
  );
}
