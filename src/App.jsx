import { useState } from "react";
import "./App.css";
import Navlink from "./components/Navlink";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const NAVLINKS = ['About','Careers','Events','Products','Support'];
  const PROJECTS = [
    {
      id: 1,
      title: 'Deep earth',
      bgUrlMobile: './src/images/mobile/image-deep-earth.jpg',
      bgUrlDesktop: './src/images/desktop/image-deep-earth.jpg',
    },
    {
      id: 2,
      title: 'Night arcade',
      bgUrlMobile: './src/images/mobile/image-night-arcade.jpg',
      bgUrlDesktop: './src/images/desktop/image-night-arcade.jpg',
    },
    {
      id: 3,
      title: 'Soccer team VR',
      bgUrlMobile: './src/images/mobile/image-soccer-team.jpg',
      bgUrlDesktop: './src/images/desktop/image-soccer-team.jpg',
    },
    {
      id: 4,
      title: 'The grid',
      bgUrlMobile: './src/images/mobile/image-grid.jpg',
      bgUrlDesktop: './src/images/desktop/image-grid.jpg',
    },
    {
      id: 5,
      title: 'From up above VR',
      bgUrlMobile: './src/images/mobile/image-from-above.jpg',
      bgUrlDesktop: './src/images/desktop/image-from-above.jpg',
    },
    {
      id: 6,
      title: 'Pocket borealis',
      bgUrlMobile: './src/images/mobile/image-pocket-borealis.jpg',
      bgUrlDesktop: './src/images/desktop/image-pocket-borealis.jpg',
    },
    {
      id: 7,
      title: 'The curiosity',
      bgUrlMobile: './src/images/mobile/image-curiosity.jpg',
      bgUrlDesktop: './src/images/desktop/image-curiosity.jpg',
    },
    {
      id: 8,
      title: 'Make it fisheye',
      bgUrlMobile: './src/images/mobile/image-fisheye.jpg',
      bgUrlDesktop: './src/images/desktop/image-fisheye.jpg',
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="w-full max-w-[100lvw] min-h-[100lvh] bg-white font-body relative">
      <div className="hero py-10 px-6 md:py-10 md:px-16 bg-hero-mobile md:bg-hero-desktop bg-cover">
        <div className="navbar flex flex-row justify-between items-center">
          <div className="logo w-40">
            <img src="./src/images/logo.svg" alt="loopstudios logo" />
          </div>
          <ul className="hidden sm:flex flex-row gap-6">
            {NAVLINKS.map((link, index) => (
              <Navlink key={index} name={link} />
            ))}
          </ul>
          <div className="block sm:hidden">
            {menuOpen ? (
              <div className="px-6 py-10 bg-black text-white absolute top-0 left-0 bottom-0 right-0">
                <div className="flex flex-row justify-between items-start">
                  <div className="logo w-40">
                    <img src="./src/images/logo.svg" alt="loopstudios logo" />
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="flex items-center mb-1 md:hidden"
                  >
                    <img className="w-5" src="./src/images/icon-close.svg" alt="" />
                  </button>
                </div>
                <div className="mt-24">
                  <ul className="flex flex-col gap-6 uppercase font-title text-xl" >
                    {NAVLINKS.map((link, index) => (
                      <Navlink key={index} name={link} />
                    ))}
                  </ul>
                </div>
            
              </div>
            ) : (
              <button
                onClick={toggleMenu}
                className="flex items-center mb-1 md:hidden"
              >
                <img src="./src/images/icon-hamburger.svg" alt="" />
              </button>
            )}
          </div>
        </div>
        <div className="my-44 px-8 py-8 border-2 border-white ">
          <h1 className="text-[2.5rem] leading-10 text-left font-title uppercase text-white">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
      <section className="px-6 py-[90px]">
        <div>
          <img src="./src/images/mobile/image-interactive.jpg" alt="" />
        </div>
        <h2 className="text-[2rem] leading-8 font-title uppercase text-center mt-12 mb-5">
          The leader in interactive VR
        </h2>
        <p className="text-base font-body leading-6 text-center text-[#818181] px-4">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </section>
      <section className="flex flex-col justify-center">
        <h2 className="text-[2rem] leading-8 font-title uppercase text-center mb-5">
          Our creations
        </h2>
        <div className="flex flex-col gap-6 mt-12 px-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              bgMobile={project.bgUrlMobile}
              bgDesktop={project.bgUrlDesktop}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-10 mb-12">
          <button className="px-12 pt-3 pb-2 font-semibold tracking-wider font-title uppercase border border-black">
            See all
          </button>
        </div>
      </section>

      <footer className="flex flex-col justify-center items-center bg-black text-white">
        <div className="logo w-32 mt-12 mb-10">
          <img src="./src/images/logo.svg" alt="loopstudios logo" />
        </div>
        <ul className="text-center flex flex-col items-center justify-center gap-4 mb-6">
          {NAVLINKS.map((link, index) => (
            <Navlink key={index} name={link} />
          ))}
        </ul>
        <div className="flex flex-row justify-evenly items-center gap-6 my-4">
          <a href="#">
            <img src="./src/images/icon-facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="./src/images/icon-twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="./src/images/icon-pinterest.svg" alt="" />
          </a>
          <a href="#">
            <img src="./src/images/icon-instagram.svg" alt="" />
          </a>
        </div>
        <p className="my-10 text-sm text-[#818181]">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
