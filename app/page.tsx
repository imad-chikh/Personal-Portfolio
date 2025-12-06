import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ContactMe from "@/components/placeholders/ContactMe";
import LetsConnect from "@/components/placeholders/LetsConnect";
import TechStack from "@/components/placeholders/TechStack";

export default function Home() {
  return (
    <>
            {/* <BackgroundBlobs /> */}

      <Navbar />
      <main className="relative flex flex-col items-center justify-center">
        <Hero />
        <Gallery />

        <TechStack />
        <LetsConnect />
        <ContactMe />

        <footer className="py-10 text-sm text-neutral-500 text-center">
          © {new Date().getFullYear()} – Built by Imad Chikh
        </footer>
      </main>
    </>
  );
}
