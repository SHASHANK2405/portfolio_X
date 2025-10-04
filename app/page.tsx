import Image from "next/image";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Stats from "@/components/ui/Stats";
import Clients from "@/components/Clients";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import MyGames from "@/components/MyGames";

export default function Home() {
  return (
    <main className="relative flex bg-[#45089D] justify-center items-center flex-col mx-auto overflow-clip">
      <NavBar />
      <div className="w-full">
        <Hero />
        {/* <Grid /> */}
        <Stats />
        <MyGames />
        <Experience />
        <Clients />
        <Contactus />
        <Footer />
      </div>
    </main>
  );
}
