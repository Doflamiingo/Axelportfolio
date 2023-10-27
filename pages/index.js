import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  // Configuration de l'animation d'entrée avec une durée plus longue
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.5 } }, // Augmentez la durée ici (2 secondes)
  };

  const fadeFromLeft = {
    hidden: { opacity: 0, x: -100 }, // Commencez à gauche (hors de l'écran)
    visible: { opacity: 1, x: 0, transition: { duration: 2 } }, // Animation de fondu depuis la gauche
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col xl:z-50 h-full container mx-auto">
        <div className="z-50 flex flex-col items-center justify-center text-center xl:mr-96 mt-36">
          <div>
            {/* Utilisez motion.div pour appliquer l'animation sur le titre "Projets" */}
            <motion.div
              variants={fadeFromLeft}
              initial="hidden"
              animate="visible"
              className="font-nomark xl:text-9xl text-5xl"
            >
              Projets
            </motion.div>
          </div>
          <Link
            href="/work"
            className="bg-black bg-opacity-25 hover:bg-grey text-white py-3 px-8 rounded-full text-2xl font-nomark sm:py-4 sm:px-12 sm:text-sm mt-5 xl:ml-0 xl:mt-10 w-42"
          >
            {/* Utilisez motion.button pour appliquer l'animation sur le bouton */}
            <motion.button variants={fadeIn} initial="hidden" animate="visible">
              Cliquez ici
            </motion.button>
          </Link>
        </div>

        <div className="w-full h-full absolute right-0 bottom-0 z-100">
          {/* Utilisez motion.div pour appliquer l'animation sur le fond */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-cj bg-cover bg-bottom bg-no-repeat w-full h-full object-fill xl:bg-center"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
