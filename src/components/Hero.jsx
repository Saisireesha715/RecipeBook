// export default function Hero() {
//   return (
    
//    <div className="flex items-center justify-center bg-[#F5F5DC] min-h-screen w-screen relative pt-30">
   
//    <div className="text-center">
//      <p className="text-center text-orange-400 font-Barriecito text-5xl text-bold z-100">Cooking Made easy<br/> Get Delicious Food Recipes Online.</p>
//    <button className="mt-4 bg-orange-400 text-white p-3 rounded-lg">Get Started</button>

//    </div>

//     <img 
//     src="https://www.google.com/imgres?q=food%20png&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F049%2F655%2F073%2Fnon_2x%2Fa-plate-full-of-different-types-of-food-png.png&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Fanimated-food&docid=_z7SS9KOGQLn-M&tbnid=eDcXB_lIUKDH2M&vet=12ahUKEwi0ofC4qM6PAxVdyDgGHe0mMqAQM3oECBcQAA..i&w=1225&h=980&hcb=2&ved=2ahUKEwi0ofC4qM6PAxVdyDgGHe0mMqAQM3oECBcQAA" 
//     className="absolute top-1/2 left-10 animate-bounce"
//     alt="decoration"
//   />


//    </div>
//   );
// }






// import { motion } from "framer-motion";

// export default function Hero() {
//   const foodImages = [
//     {
//       src: "/—Pngtree—png smoothie bowl sticker food_21073787.png",
//       alt: "Smoothie Bowl",
//       size: "w-64 h-64 md:w-80 md:h-80",
//       // Coming from bottom-left edge
//       initialX: "-100%",
//       initialY: "100%",
//       animateX: "5%",
//       animateY: "5%",
//       rotate: -5,
//       positionClass: "left-0 bottom-0",
//       transition: { type: "spring", stiffness: 30, damping: 15, delay: 0.2 }
//     },
//     {
//       src: "/—Pngtree—vegetable italian slice piece pizza_15897644.png",
//       alt: "Pizza Slice", 
//       size: "w-64 h-64 md:w-80 md:h-80",
//       // Coming from bottom-right edge
//       initialX: "100%",
//       initialY: "100%",
//       animateX: "-5%",
//       animateY: "5%",
//       rotate: 5,
//       positionClass: "right-0 bottom-0",
//       transition: { type: "spring", stiffness: 30, damping: 15, delay: 0.4 }
//     },
//     {
//       src: "/pngfind.com-plate-png-3005563.avif",
//       alt: "Food Plate",
//       size: "w-56 h-56 md:w-72 md:h-72",
//       // Coming from top-center edge
//       initialX: "0%",
//       initialY: "-100%", 
//       animateX: "0%",
//       animateY: "0%",
//       rotate: 0,
//       // Center the element horizontally
//       positionClass: "left-1/2 transform -translate-x-1/2 top-0",
//       transition: { type: "spring", stiffness: 30, damping: 15, delay: 0.6 }
//     }
//   ];

//   // Container animation
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   // Item animation
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1
//     }
//   };

//   return (
//     <div className="flex items-center justify-center bg-[#F5F5DC] min-h-screen w-full relative overflow-hidden pt-16">
      
//       {/* Navbar fixed at top */}
//       <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-30"></div>

//       {/* Main content */}
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="text-center z-10 px-4 max-w-4xl mt-16"
//       >
//         <motion.h1 
//           variants={itemVariants}
//           className="text-orange-500 font-Barriecito text-4xl md:text-6xl font-bold mb-6"
//         >
//           Cooking Made Easy
//         </motion.h1>
        
//         <motion.p 
//           variants={itemVariants}
//           className="text-gray-700 text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
//         >
//           Discover thousands of delicious recipes and transform your cooking skills
//         </motion.p>
        
//         <motion.button 
//           variants={itemVariants}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors"
//         >
//           Explore Recipes
//         </motion.button>
//       </motion.div>

//       {/* Container for positioned images */}
//       <div className="absolute inset-0 z-20">
//         {foodImages.map((image, index) => (
//           <motion.div
//             key={index}
//             initial={{ 
//               x: image.initialX,
//               y: image.initialY,
//               opacity: 0,
//               rotate: image.rotate - 30
//             }}
//             animate={{ 
//               x: image.animateX,
//               y: image.animateY,
//               opacity: 1,
//               rotate: image.rotate
//             }}
//             transition={image.transition}
//             whileHover={{ 
//               scale: 1.05,
//               rotate: image.rotate + 5,
//               transition: { duration: 0.3 }
//             }}
//             className={`absolute ${image.size} ${image.positionClass}`}
//           >
//             <img 
//               src={image.src} 
//               alt={image.alt}
//               className="w-full h-full object-contain drop-shadow-xl"
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* Stats section */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1.5 }}
//         className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 md:gap-12 z-30"
//       >
//         <div className="text-center">
//           <div className="text-2xl md:text-3xl font-bold text-orange-500">500+</div>
//           <div className="text-gray-600">Recipes</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl md:text-3xl font-bold text-orange-500">50K+</div>
//           <div className="text-gray-600">Users</div>
//         </div>
//         <div className="text-center">
//           <div className="text-2xl md:text-3xl font-bold text-orange-500">4.8★</div>
//           <div className="text-gray-600">Rating</div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

// External data for better maintainability
const foodImages = [
  {
    src: "/—Pngtree—png smoothie bowl sticker food_21073787.png",
    alt: "Smoothie Bowl",
    size: "w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80",
    initialX: "-100%",
    initialY: "100%",
    animateX: "5%",
    animateY: "5%",
    rotate: -5,
    positionClass: "left-0 bottom-0",
    transition: { type: "spring", stiffness: 30, damping: 15, delay: 0.2 }
  },
  {
    src: "/—Pngtree—vegetable italian slice piece pizza_15897644.png",
    alt: "Pizza Slice", 
    size: "w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80",
    initialX: "100%",
    initialY: "100%",
    animateX: "-5%",
    animateY: "5%",
    rotate: 5,
    positionClass: "right-0 bottom-0",
    transition: { type: "spring", stiffness: 30, damping: 15, delay: 0.4 }
  },
  {
    src: "/pngfind.com-plate-png-3005563.avif",
    alt: "Food Plate",
    size: "w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72",
    initialX: "0%",
    initialY: "-100%", 
    animateX: "0%",
    animateY: "0%",
    rotate: 0,
    positionClass: "left-1/2 transform -translate-x-1/2 top-0",
    transition: { type: "spring", stiffness: 30, damping: 15, delay: 0.6 }
  }
];

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

// Item animation
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

// Background decorative elements
const DecorativeBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Floating Orange Slices */}
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -45 }}
      animate={{ opacity: 0.3, y: 0, rotate: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="absolute top-1/4 left-1/4"
    >
      <svg width="80" height="80" viewBox="0 0 100 100" className="text-orange-300">
        <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.4" />
        <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.6" />
        <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.8" />
      </svg>
    </motion.div>

    {/* Cooking Utensils */}
    <motion.div
      initial={{ opacity: 0, x: -50, rotate: -90 }}
      animate={{ opacity: 0.2, x: 0, rotate: 0 }}
      transition={{ duration: 2, delay: 0.8 }}
      className="absolute top-1/3 right-1/4"
    >
      <svg width="60" height="60" viewBox="0 0 100 100" className="text-orange-400">
        <path d="M30,20 L70,20 L65,80 L35,80 Z" fill="currentColor" />
        <circle cx="50" cy="15" r="5" fill="currentColor" />
      </svg>
    </motion.div>

    {/* Whisk */}
    <motion.div
      initial={{ opacity: 0, x: 50, rotate: 90 }}
      animate={{ opacity: 0.2, x: 0, rotate: 0 }}
      transition={{ duration: 2, delay: 1.1 }}
      className="absolute bottom-1/4 left-1/3"
    >
      <svg width="50" height="80" viewBox="0 0 50 100" className="text-orange-500">
        <rect x="20" y="10" width="10" height="80" fill="currentColor" />
        <path d="M5,30 L45,30 L40,50 L10,50 Z" fill="currentColor" />
        <path d="M5,50 L45,50 L40,70 L10,70 Z" fill="currentColor" />
      </svg>
    </motion.div>

    {/* Herb Sprig */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.25, scale: 1 }}
      transition={{ duration: 1.5, delay: 1.4 }}
      className="absolute bottom-1/3 right-1/3"
    >
      <svg width="70" height="70" viewBox="0 0 100 100" className="text-orange-600">
        <path d="M50,10 Q30,40 50,70 Q70,40 50,10 Z" fill="currentColor" />
        <path d="M50,20 Q40,35 50,50 Q60,35 50,20 Z" fill="currentColor" opacity="0.7" />
      </svg>
    </motion.div>

    {/* Floating Bubbles */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0.9, 0],
          scale: [0, 1, 0],
          y: -100
        }}
        transition={{ 
          duration: 3 + i,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeOut"
        }}
        className="absolute"
        style={{
          left: `${20 + i * 15}%`,
          bottom: `${10 + i * 5}%`,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 100 100" className="text-orange-200">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </motion.div>
    ))}

    {/* Subtle Pattern */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 2 }}
      className="absolute inset-0"
    >
      <svg width="100%" height="100%" className="text-orange-300">
        <pattern id="circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="3" fill="currentColor" />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circles)" />
      </svg>
    </motion.div>
  </div>
);

// Stats component
const StatsSection = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.5 }}
    className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 md:gap-12 z-30"
  >
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-orange-500">500+</div>
      <div className="text-gray-600">Recipes</div>
    </div>
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-orange-500">50K+</div>
      <div className="text-gray-600">Users</div>
    </div>
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-orange-500">4.8★</div>
      <div className="text-gray-600">Rating</div>
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="flex items-center justify-center bg-[#F5F5DC] min-h-screen w-full relative overflow-hidden pt-16" aria-label="Hero section">
      
      {/* Navbar fixed at top */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-30" aria-label="Main navigation"></nav>

      {/* Decorative SVG Background Elements */}
      <DecorativeBackground />

      {/* Main content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 max-w-4xl mt-16"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-orange-500 font-Barriecito text-4xl md:text-6xl font-bold mb-6"
        >
          Cooking Made Easy
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-700 text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
        >
          Discover thousands of delicious recipes and transform your cooking skills
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors"
            aria-label="Explore recipes"
          >
            Explore Recipes
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Container for positioned images */}
      <div className="absolute inset-0 z-20">
        {foodImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ 
              x: image.initialX,
              y: image.initialY,
              opacity: 0,
              rotate: image.rotate - 30
            }}
            animate={{ 
              x: image.animateX,
              y: image.animateY,
              opacity: 1,
              rotate: image.rotate
            }}
            transition={image.transition}
            whileHover={{ 
              scale: 1.05,
              rotate: image.rotate + 5,
              transition: { duration: 0.3 }
            }}
            className={`absolute ${image.size} ${image.positionClass}`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-contain drop-shadow-xl"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Stats section */}
      <StatsSection />
    </section>
  );
}