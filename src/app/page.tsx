import Header from "./components/Home/Header";
import AboutUs from "./components/Home/AboutUs";
import FeaturesBenefits from "./components/Home/FeaturesBenefits";
import Products from "./components/Home/Products";
import CoffeeNumbersGallery from "./components/Home/CoffeeNumbersGallery";
// import { ThreeDots } from 'react-loader-spinner'

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <FeaturesBenefits />
      <Products />
      <CoffeeNumbersGallery />
      <div className="flex flex-col items-center bg-orange-50 p-12">
        <h1 className="mb-4 text-4xl font-bold text-orange-main">Contact Us</h1>
        <form
          //  onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-full flex-col space-y-2 px-6 md:w-fit"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <input
              // {...register('name')}
              className="contact-input"
              type="text"
              placeholder="Name"
              autoComplete="off"
            />
            <input
              // {...register('email')}
              className="contact-input"
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <input
            // {...register('subject')}
            className="contact-input"
            type="text"
            placeholder="Subject"
            autoComplete="off"
          />
          <textarea
            // {...register('message')}
            className="contact-input scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-main/50"
            placeholder="Message"
            autoComplete="off"
          ></textarea>
          <button
            type="submit"
            className="flex h-11 flex-shrink-0 items-center justify-center rounded-md bg-orange-main py-2 text-lg font-medium text-white hover:opacity-80 disabled:cursor-not-allowed disabled:bg-[#cccccc] disabled:font-normal disabled:text-[#666666] disabled:opacity-30"
            // disabled={
            //   !name.length || !email.length || !/\S+@\S+\.\S+/.test(email) || !subject.length || !message.length
            // }
          >
            Submit
            {/* {isLoadingEmail ? (
              <ThreeDots
                height="36"
                width="36"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ justifyContent: 'center' }}
                visible={true}
              />
            ) : (
              'Submit'
            )} */}
          </button>
        </form>
      </div>
    </main>
  );
}
