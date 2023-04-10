import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import foto from "./foto.png";
import happytails from "./happytails.jpeg";
import nobgapp from "./nobgapp.jpeg";
import dogsPI from "./dogsPI.jpeg";
import cv from "./icons/cv.png";
import github from "./icons/github.png";
import linkedin from "./icons/linkedin.png";
import cvv from "./cv.pdf";

function App() {
  const [palabras, setPalabras] = useState(true);

  function ad() {
    setPalabras(false);
  }

  setTimeout(ad, 9000);

  navigator.geolocation.getCurrentPosition(function getPosition(position) {
    const latitude = String(position.coords.latitude);
    const longitude = String(position.coords.longitude);
    localStorage.setItem("latitude", latitude);
    localStorage.setItem("longitude", longitude);
  });

  return (
    <>
      {palabras === true ? (
        <>
          <section className="w-screen h-screen flex justify-center items-center">
            <motion.p
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3.5 }}
              exit={{ opacity: 0 }}
              className="font-semibold text-xl font-poppins absolute"
            >
              Hello 👋
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3.5, delay: 4.5, type: "tween" }}
              exit={{ opacity: 0 }}
              className="font-semibold text-xl font-poppins absolute "
            >
              Welcome to my page!
            </motion.p>
          </section>
        </>
      ) : (
        <>
          <section className="h-[800px] lg:h-screen h-max-xl flex flex-col gap-10 lg:gap-0 pt-3 lg:pt-0">
            <nav className="h-16 flex justify-around items-center">
              <a href="https://www.linkedin.com/in/juan-jose-cieri/">
                <motion.img
                  src={linkedin}
                  alt="linkedin"
                  className="w-8"
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                />
              </a>
              <a href="https://github.com/JuanjoCieri">
                <motion.img
                  src={github}
                  alt="github"
                  className="w-8"
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                />
              </a>
              <a href={cvv} download="cvCieri.pdf">
                <motion.img
                  src={cv}
                  alt="cv"
                  className="w-8"
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                />
              </a>
            </nav>
            <div className="flex h-screen w-full flex-col lg:flex-row gap-10 lg:gap-0">
              <div className="lg:w-2/3 flex justify-center items-center ">
                <motion.div
                  initial={{ x: -2000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 1.5, type: "spring" }}
                  className="flex justify-center items-center flex-col "
                >
                  {/* <img
                    src={foto}
                    alt="profile"
                    class="mx-auto object-cover rounded-full h-72 w-72"
                  /> */}
                  <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-10 lg:gap-0">
                    <div>
                      <p className=" font-poppins font-extrabold text-4xl lg:text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Hello! I am
                      </p>
                      <p className="text-slate-900 font-poppins font-extrabold text-5xl lg:text-6xl tracking-tight dark:text-black">
                        Juan José <br /> Cieri
                      </p>
                      <p className="text-xl text-[#C93384] font-poppins font-extrabold">
                        Full Stack Developer
                      </p>
                    </div>
                    <p className="text-slate-900 font-poppins text-center lg:text-start">
                      {" "}
                      I'm a Full Stack Developer passionate about
                      problem-solving <br /> and enhancing user experience. My
                      projects showcases experience <br /> and ability to work
                      in teams. <br /> Contact me for committed and passionate
                      project collaboration.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/3 flex justify-center lg:justify-start items-center">
                <div className="flex flex-col">
                  <a href="#" class="relative block">
                    <motion.img
                      initial={{ x: 2000 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 1, delay: 1.5, type: "spring" }}
                      alt={foto}
                      src={foto}
                      class="mx-auto object-cover rounded-lg h-72 w-72 shadow-lg shadow-[#FEC0DC]"
                    />
                  </a>

                  {/* <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4, type: "spring" }}
                    className="text-lg font-semibold font-poppins text-[#F863AE]"
                  >
                    🙋‍♂️ About me
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6, type: "spring" }}
                    className="text-lg font-semibold font-poppins text-[#F863AE]"
                  >
                    📂 Works
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8, type: "spring" }}
                    className="text-lg font-semibold font-poppins text-[#F863AE]"
                  >
                    👨‍💼 Contact me
                  </motion.p> */}
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-center items-center text-3xl font-semibold my-28 lg:my-0">
            <h3 className="font-poppins">About me</h3>
          </div>
          <section className="h-[800px] lg:h-screen flex flex-col lg:flex-row gap-10 lg:gap-0">
            <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
              <div className="">
                <div className="border-b border-[#FFA1CC] pb-4 mx-5 lg:mx-0">
                  <p className="text-5xl font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Who am I?
                  </p>
                </div>
                <div className="w-96 pt-4 ">
                  <p className="font-poppins mx-5 lg:mx-0">
                    Hi!, I'm Juan José Cieri, Full-Stack Developer with
                    Front-end orientation. I am a person with the ability to
                    easily adapt to any environment. I like to face problems to
                    propose creative and efficient solutions. I love working in
                    a team to have different points of view and propose ideas to
                    reach a common good.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center">
              <div className="">
                <div className="border-b border-[#D97B01] pb-4  flex flex-col items-end mx-5 lg:mx-0">
                  <p className="text-5xl font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400">
                    Knowleadge
                  </p>
                </div>
                <div className="w-96 pt-4 flex">
                  <div className="w-1/2 flex flex-col gap-3 mx-5 lg:mx-0">
                    <div className="flex gap-3">
                      <p className="text-[#ED59A5] font-poppins">></p>
                      <p className="font-poppins">Javascript</p>
                    </div>
                    <div className="flex gap-3">
                      <p className="text-[#F863AE] font-poppins">></p>
                      <p className="font-poppins">ReactJS</p>
                    </div>
                    <div className="flex gap-3">
                      <p className="text-[#FE7DBC] font-poppins">></p>
                      <p className="font-poppins">Redux</p>
                    </div>
                    <div className="flex gap-3">
                      <p className="text-[#FFA1CC] font-poppins">></p>
                      <p className="font-poppins">NodeJS</p>
                    </div>
                    <div className="flex gap-3">
                      <p className="text-[#FEC0DC] font-poppins">></p>
                      <p className="font-poppins">Express</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col items-end gap-3 mx-5 lg:mx-0">
                    <div className="flex gap-3">
                      <p className="font-poppins">PostgreSQL</p>
                      <p className="text-[#ED59A5] font-poppins">{`<`}</p>
                    </div>
                    <div className="flex gap-3">
                      <p className="font-poppins">MongoDB</p>
                      <p className="text-[#F863AE] font-poppins">{`<`}</p>
                    </div>
                    <div className="flex gap-3">
                      <p className="font-poppins">MySQL</p>
                      <p className="text-[#FE7DBC] font-poppins">{`<`}</p>
                    </div>
                    <div className="flex gap-3">
                      <p className="font-poppins">Socket.io</p>
                      <p className="text-[#FFA1CC] font-poppins">{`<`}</p>
                    </div>
                    <div className="flex gap-3">
                      <p className="font-poppins">TailwindCSS</p>
                      <p className="text-[#FEC0DC] font-poppins">{`<`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-center items-center text-3xl font-semibold mb-[500px] lg:mb-0">
            <h3 className="font-poppins">Works 🚀</h3>
          </div>
          <section className="h-[800px] lg:h-screen flex">
            <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-20 lg:gap-3">
              <div class="m-auto  rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#w" class="block w-full h-full">
                  <img
                    alt="bogphoto"
                    src={happytails}
                    class="object-cover w-full max-h-40"
                  />
                  <div class="w-full p-4 bg-white dark:bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                    <p class="font-medium text-indigo-500 text-md">2022</p>
                    <p class="mb-2 text-xl font-medium text-gray-800 dark:text-[#D97B01]">
                      HappyTails
                    </p>
                    <p class="font-semibold text-black dark:text-black text-md">
                      Social Network with the aim of facilitating the adoption
                      of animals. It has an online chat, marketplace,
                      notifications, mailing, payment gateway, among many
                      others.
                    </p>
                    <div class="flex flex-wrap items-center mt-4 justify-starts">
                      <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                        <a href="https://github.com/Final-Proyect-PETS">
                          Repository
                        </a>
                      </div>
                      <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                        <a href="https://happytails.vercel.app/">Deploy</a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="m-auto  rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="a#" class="block w-full h-full">
                  <img
                    alt="blgphoto"
                    src={dogsPI}
                    class="object-cover w-full max-h-40"
                  />
                  <div class="w-full p-4 bg-white dark:bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                    <p class="font-medium text-indigo-500 text-md">2022</p>
                    <p class="mb-2 text-xl font-medium text-[#D97B01] dark:text-[#D97B01]">
                      Dogs SPA
                    </p>
                    <p class="font-semibold text-gray-400 dark:text-black text-md">
                      SPA with filtering, ordering, pagination, creation and
                      several more functionalities. Use languages like React,
                      Redux, Express, Sequelize & Node.
                    </p>
                    <div class="flex flex-wrap items-center mt-4 justify-starts">
                      <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                        <a href="https://github.com/JuanjoCieri/PI-Dogs-main">
                          Repository
                        </a>
                      </div>
                      <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                        <a href="https://pi-dogs-main-ten.vercel.app/">
                          Deploy
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="m-auto rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#g" class="block w-full h-full">
                  <img
                    alt="blogphotyt"
                    src={nobgapp}
                    class="object-cover w-full max-h-40"
                  />
                  <div class="w-full p-4 bg-white dark:bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                    <p class="font-medium text-indigo-500 text-md">2023</p>
                    <p class="mb-2 text-xl font-medium text-[#D97B01] dark:text-[#D97B01]">
                      No Bg App
                    </p>
                    <p class="font-semibold text-black dark:text-black text-md">
                      The Application is a sample project that uses Cloudinary's
                      artificial intelligence to automatically erase the
                      background of images. "Highlight the important, eliminate the unnecessary."
                    </p>
                    <div class="flex flex-wrap items-center mt-4 justify-starts">
                      <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                      <a href="https://github.com/JuanjoCieri/no-bg-app">
                          Repository
                        </a>
                      </div>
                      <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                      <a href="https://no-bg-app.vercel.app/">
                          Deploy
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section className="h-24 flex justify-center items-center pt-[500px] mb-10 lg:mt-0">
            <h3 className="font-semibold">Made by Juan José Cieri 🪐🌠🌌</h3>
          </section>
          {/* <div className="w-screen h-screen bg-red-700">
            <nav className="h-16 flex justify-around items-end bg-red-600 ">
              <div className="flex">
                <h1 className="text-2xl font-source">Juan José Cieri</h1>
                <p className="text-[#F35600] text-5xl">.</p>
              </div>
              <div>
                <p>lo otro</p>
              </div>
            </nav>
            <section className="bg-red-200 w-screen">
              <div>
                <motion.div
                  initial={{ x: -5000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 8.5, type: "spring" }}
                  className="w-full flex justify-center items-center gap-10"
                >
                  <img
                    src={foto}
                    alt="profile"
                    class="mx-auto object-cover rounded-full h-56 w-56"
                  />
                  <p className="text-4xl font-semibold">Juan José Cieri</p>
                </motion.div>
                <motion.p
                  initial={{ x: -4000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 1.6, type: "spring" }}
                  className="text-xl font-semibold"
                >
                  Sobre mi
                </motion.p>
                <motion.p
                  initial={{ x: -4000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 1.7, type: "spring" }}
                  className="text-xl font-semibold"
                >
                  Proyectos
                </motion.p>
                <motion.p
                  initial={{ x: -4000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 1.8, type: "spring" }}
                  className="text-xl font-semibold"
                >
                  Contactame
                </motion.p>
              </div>
            </section>
            <section className="w-2/3 bg-red-400">
              <h1>asd</h1>
            </section>
          </div> */}
        </>
      )}
    </>
  );
}

export default App;
