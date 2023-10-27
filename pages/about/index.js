import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  // Configuration de l'animation d'entrée pour les images à droite (plus rapide)
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  // Configuration de l'animation d'entrée pour le titre à gauche (plus rapide)
  const fadeInTitle = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  // Configuration de l'animation d'entrée pour le texte à gauche avec un délai de 0.5 seconde (plus rapide)
  const fadeInText = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.5 } },
  };

  // Configuration de l'animation d'entrée pour le bouton à gauche avec un délai de 1 seconde (plus rapide)
  const fadeInButton = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 1 } },
  };

  return (
    <section className="container mx-auto flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 lg:pl-10 xl:mt-32 flex flex-col items-center justify-start text-center z-10">
        <h2 className="w-full mb-2 mt-10 flex justify-center text-center">
          <div className="sm:w-1/2">
            <motion.h1
              variants={fadeInTitle}
              initial="hidden"
              animate="visible"
              className="font-nomark xl:text-5xl text-2xl"
            >
              À propos
            </motion.h1>
          </div>
        </h2>

        <motion.p
          variants={fadeInText}
          initial="hidden"
          animate="visible"
          className="text-white text-base xl:text-xl"
        >
          Je
        </motion.p>
        <motion.button
          variants={fadeInButton}
          initial="hidden"
          animate="visible"
          className="bg-gray-700 hover:bg-gray-600 text-white mt-5 py-2.5 px-5 rounded-full xl-text-2xl"
        >
          Mes projets
        </motion.button>
      </div>
      <div className="w-full lg:w-1/2 flex items-start justify-center z-10">
        <motion.div variants={fadeInRight} initial="hidden" animate="visible">
          <Image
            src="/a-propos-image-shooting.png"
            width={400}
            height={400}
            alt=""
            className="max-lg:hidden"
          />
        </motion.div>
      </div>
      <div className="w-full h-full absolute right-0 bottom-0 z-0">
        <div className="bg-stone-950 xl-bg-cover xl-bg-right xl-bg-no-repeat w-full h-full z-0"></div>
      </div>
    </section>
  );
};

export default About;
