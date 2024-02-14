import Center from "@components/Center";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Hero from "@components/Hero";
import { Locations } from "@components/Locations";
import Main from "@components/Main";

export default function Home() {
  return (
    <Center>
      <Header />
      <Hero />
      <Locations />
      <Main />
      <Footer />
    </Center>
  );
}
