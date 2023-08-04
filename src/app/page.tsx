import Header from "./components/Home/Header";
import AboutUs from "./components/Home/AboutUs";
import FeaturesBenefits from "./components/Home/FeaturesBenefits";
import Products from "./components/Home/Products";
import CoffeeNumbersGallery from "./components/Home/CoffeeNumbersGallery";
import ContactUs from "./components/Home/ContactUs";
import WAButton from "./components/UI/WhatsappButton";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <AboutUs />
      <FeaturesBenefits />
      <Products />
      <CoffeeNumbersGallery />
      <ContactUs />
      <WAButton />
    </main>
  );
}
