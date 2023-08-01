export default function Products() {
  return (
    <div className="flex w-full flex-col items-center bg-orange-secondary p-12">
      <h1 className="mb-4 text-6xl font-bold text-white">Products</h1>
      <div className="flex w-full justify-evenly">
        <div className="h-[400px] w-72 rounded bg-white">
          <div className="group relative h-full overflow-hidden">
            <div className="h-[40%] w-full rounded-t bg-[url('assets/images/green-coffee-beans.jpg')] bg-cover bg-no-repeat"></div>
            <div className="p-4 leading-tight">
              <h3 className="text-center text-xl font-semibold leading-tight">
                Green Coffee Beans
              </h3>
              <p className="text-justify">
                Our premium green coffee beans are carefully sourced and
                processed to deliver a rich and aromatic flavor that will
                satisfy any coffee lover where quality and sustainability
                converge to deliver exceptional coffee beans from the heart of
                Indonesia.
              </p>
            </div>
            <div className="absolute -bottom-10 flex h-full w-full cursor-default flex-col justify-center rounded bg-brown-secondary px-4 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-95">
              <div className="mb-2">
                <p className="font-medium">1. Arabica Green Coffee Beans</p>
                <ul className="pl-6">
                  <li className="list-disc">Origin: West Java, Indonesia</li>
                  <li className="list-disc">Moisture Content: 12-13%</li>
                </ul>
              </div>
              <div className="mb-2">
                <p className="font-medium">2. Robusta Green Coffee Beans</p>
                <ul className="pl-6">
                  <li className="list-disc">Origin: West Java, Indonesia</li>
                  <li className="list-disc">Moisture Content: 12-13%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px] w-72 rounded bg-white">
          <div className="group relative h-full overflow-hidden">
            <div className="h-[40%] w-full rounded-t bg-[url('assets/images/roasted-coffee-beans.jpg')] bg-cover bg-no-repeat"></div>
            <div className="p-4 leading-tight">
              <h3 className="text-center text-xl font-semibold leading-tight">
                Roasted Coffee Beans
              </h3>
              <p className="text-justify">
                Introducing our distinguished Indonesian roasted coffee beans
                producer, where passion for coffee craftsmanship meets the
                essence of Indonesia's rich coffee heritage. Our roasted coffee
                beans are carefully selected and expertly roasted to bring out
                their rich flavor and aroma, ensuring a premium coffee
                experience.
              </p>
            </div>
            <div className="absolute -bottom-10 flex h-full w-full cursor-default flex-col justify-center rounded bg-brown-secondary px-4 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-95">
              <div className="mb-2">
                <p className="font-medium">1. Arabika Roasted Coffee Beans</p>
                <ul className="pl-6">
                  <li className="list-disc">Origin: West Java, Indonesia</li>
                  <li className="list-disc">Flavor Notes: Floral and Fruity</li>
                </ul>
              </div>
              <div className="mb-2">
                <p className="font-medium">2. Robusta Roasted Coffee Beans</p>
                <ul className="pl-6">
                  <li className="list-disc">Origin: West Java, Indonesia</li>
                  <li className="list-disc">
                    Flavor Notes: Chocolatey and Nutty
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
