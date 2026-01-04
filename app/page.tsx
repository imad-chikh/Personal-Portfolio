import BackgroundBlobs from "@/components/BackgroundBlobs";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import LetsConnect from "@/components/placeholders/LetsConnect";
import TechStack from "@/components/placeholders/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col items-center justify-center">
        <Hero />
        {/* <div className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 -z-10">
            <BackgroundBlobs />
          </div> */}
        <Gallery />
        <div className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 -z-10">
            <BackgroundBlobs />
          </div>

        <TechStack />
        <LetsConnect />

        <footer className="py-10 text-sm text-neutral-500 text-center">
          © {new Date().getFullYear()} – Built by Imad Chikh
        </footer>
      </main>
    </>
  );
}
