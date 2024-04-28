import { useState } from "react";
import "./App.css";
import Navlink from "./components/Navlink";
import ProjectCard from "./components/ProjectCard";
import SocialLink from "./components/SocialLink";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const NAVLINKS = ['About','Careers','Events','Products','Support'];
  const SOCIAL_LINKS = ["./src/images/icon-facebook.svg","./src/images/icon-twitter.svg","./src/images/icon-pinterest.svg","./src/images/icon-instagram.svg"]
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
    <div className={`w-full max-w-[100lvw] min-h-[100lvh] ${menuOpen?'h-[100lvh]':''} bg-white font-body relative overflow-hidden`}>
      <div className="hero py-10 px-6 md:px-24 bg-hero-mobile md:bg-hero-desktop bg-cover">
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
        <div className="my-44 md:my-32 md:w-[600px] px-8 md:px-12 py-8 md:py-10 border-2 border-white ">
          <h1 className="text-[2.5rem] md:text-6xl leading-10 md:tracking-wider text-left font-title uppercase text-white">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
      <section className="px-6 py-[90px] relative lg:h-[600px] lg:mb-12 lg:mt-24">
        <div className="flex flex-col justify-center items-center lg:absolute lg:top-0 lg:left-0 lg:translate-x-20 xl:translate-x-32">
          <img src="./src/images/mobile/image-interactive.jpg" alt="" />
        </div>
        <div className="text-center lg:absolute lg:top-[27%] lg:right-0 lg:-translate-x-[10%] xl:-translate-x-1/4 lg:w-[550px] xl:w-[650px] lg:px-20 lg:py-20 bg-white">
          <h2 className="text-[2rem] lg:text-5xl leading-8 font-title uppercase lg:text-left mt-12 lg:mt-0 mb-5">
            The leader in interactive VR
          </h2>
          <p className="text-base font-body leading-6 lg:text-left text-[#818181] px-4 lg:px-0">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe. Our
            award-winning creations have transformed businesses through digital
            experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center px-6 md:px-24 md:mb-44">
        <div className="flex flex-row justify-center md:justify-between items-center">
          <h2 className="text-[2rem] md:text-5xl leading-8 font-title uppercase md:text-left text-center">
            Our creations
          </h2>
          <button className="hidden md:block px-16 pt-4 pb-3 text-xl font-semibold tracking-wider font-title uppercase border border-black mb-2 hover:bg-black hover:text-white transition-all ease-in duration-200">
            See all
          </button>
        </div>
        <div className="flex flex-col gap-6 mt-12 md:grid md:grid-cols-3 lg:grid-cols-4 md:px-0">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              bgMobile={project.bgUrlMobile}
              bgDesktop={project.bgUrlDesktop}
            />
          ))}
        </div>
        <div className="flex md:hidden justify-center items-center mt-10 mb-12">
          <button className="px-12 pt-3 pb-2 font-semibold tracking-wider font-title uppercase border border-black hover:bg-black hover:text-white transition-all ease-in duration-200">
            See all
          </button>
        </div>
      </section>
      <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-black text-white md:px-24 md:pt-10 md:pb-12">
        <div>
          <div className="logo w-32 mt-12 md:mt-0 mb-10 md:mb-8">
            <img src="./src/images/logo.svg" alt="loopstudios logo" />
          </div>
          <ul className="text-center flex flex-col md:flex-row items-center justify-center gap-4 mb-6 md:mb-0">
            {NAVLINKS.map((link, index) => (
              <Navlink key={index} name={link} />
            ))}
          </ul>
        </div>
        <div>
          <div className="flex flex-row justify-center md:justify-end items-center gap-6 md:gap-4 my-4 md:my-0">
              {SOCIAL_LINKS.map((link, index) => (
                <SocialLink key={index} iconUrl={link} />
              ))}
          </div>
          <p className="my-10 md:mt-6 md:mb-0 text-sm text-[#818181]">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
