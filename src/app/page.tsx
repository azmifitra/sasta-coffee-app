import Header from "./components/Home/Header";
import AboutUs from "./components/Home/AboutUs";
import FeaturesBenefits from "./components/Home/FeaturesBenefits";
import Products from "./components/Home/Products";
import CoffeeNumbersGallery from "./components/Home/CoffeeNumbersGallery";
import ContactUs from "./components/Home/ContactUs";
// import { ThreeDots } from 'react-loader-spinner'

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <FeaturesBenefits />
      <Products />
      <CoffeeNumbersGallery />
      <ContactUs />
    </main>
  );
}
