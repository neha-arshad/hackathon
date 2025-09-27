import Image from "next/image";
import FrontlineNavbar from "./Component/Navbar";
import HomePage from "./Component/HomePage";
import ServicesPage from "./Component/ServicesPage";
import ContactPage from "./Component/ContactPage"
import Footer from "./Component/Footer";
import AboutPage from "./Component/AboutPage";
export default function Home() {
  return (
    <>
      <FrontlineNavbar />
			<HomePage />
			<ServicesPage />
			<AboutPage />
			
			<ContactPage />
			<Footer />

     
    </>
  );
}
