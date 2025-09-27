import Image from "next/image";
import FrontlineNavbar from "./Component/Navbar";
import HomePage from "./Component/HomePage";
import ServicesPage from "./Component/ServicesPage";
import AdminDashboard from "./Component/AdminDashboard";
export default function Home() {
  return (
    <>
      <FrontlineNavbar />
			<HomePage />
			<ServicesPage />
			<AdminDashboard />

     
    </>
  );
}
