export default function Header() {
  return (
    <div className="flex min-h-screen w-full items-center justify-end bg-[url('assets/images/coffee-hand-hero.jpg')] bg-cover bg-no-repeat p-24">
      <div className="flex w-[65%] flex-col items-end">
        <h1 className="mb-5 text-6xl font-bold">Sasta Coffee Indonesia</h1>
        <h3 className="text-justify text-lg leading-tight">
          As a prominent coffee producer in Indonesia, we take immense pride in
          presenting to you the exquisite flavors and aromas that our diverse
          nation has to offer. <br />
          Inspired by the Indonesian drinking coffee tradition, we committed to
          improve the whole sector of the coffee industry from farm, roastery,
          and customer. By offering a better price and trading condition we aim
          to empower local farmers. <br />
          We strive to provide an exceptional coffee experience that reflects
          our commitment to quality, sustainability, and customer satisfaction.
        </h3>
      </div>
    </div>
  );
}
