// export default function Card({ recipes }){
//     return(
//           <div className="bg-[#FFF8DC] flex flex-col  mt-10 w-64 h-80 rounded-lg shadow-gray-300 hover:shadow-lg hover:scale-110 transform transition duration-300">
//                 {/* image section */}
//                 <div className="p-2">
//  <img src="/smoothie.jpg" alt="smoothie" className="h-40 w-60"/>
//                 </div>
               

              
//               <div className="text-center">

//                     <p className="text-2xl text-orange-500 text-bold text-w-3 font-knewave">{recipes[0].title} </p>
//                     <br />
//                     <p className="text-xl text-gray-500 text-bold text-w-2 ">{recipes[0].description} </p>
//               </div>
//           </div>
//     );
// }



export default function Card({ recipe }) {
  // Add a safety check for the recipe object
  if (!recipe) {
    return (
      <div className="bg-[#FFF8DC] flex flex-col mt-4 w-72 h-96 rounded-lg shadow-md">
        <div className="p-4 text-center">
          <p className="text-orange-500">Recipe not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF8DC] flex flex-col mt-4 w-72 h-96 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 overflow-hidden">
      {/* Image section */}
      <div className="h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content section */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-orange-500 font-knewave text-center mb-2">
          {recipe.title}
        </h3>
        
        <p className="text-gray-600 text-center mb-4 flex-grow">
          {recipe.description}
        </p>
        
        {/* Tags section */}
        <div className="flex flex-wrap justify-center gap-2 mt-auto">
          {recipe.tags && recipe.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-pink-100 text-orange-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// import { animate, motion,useAnimation } from "framer-motion";
// import { useEffect } from "react";

// export default function Card(){
//   const controls = useAnimation();
//    const reviews = [
//         {
//             image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
//             title: "Alex Johnson",
//             description: "This recipe website changed my cooking game! The instructions are clear and the results are always delicious.",
//             tags: ["⭐️⭐️⭐️⭐️⭐️", "🥘 12 Recipes", "👨‍🍳 Home Cook"],
//         },
//         {
//             image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
//             title: "Sarah Williams",
//             description: "As a busy mom, I love how these recipes are both kid-friendly and quick to prepare. My family loves everything I've made!",
//             tags: ["⭐️⭐️⭐️⭐️⭐️", "🥗 8 Recipes", "👩‍👧‍👦 Busy Parent"],
//         },
//         {
//             image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
//             title: "Michael Chen",
//             description: "The international recipes are authentic and well-explained. I've impressed my friends with dishes from around the world!",
//             tags: ["⭐️⭐️⭐️⭐️⭐️", "🌏 20 Recipes", "🍳 Food Enthusiast"],
//         },
//         {
//             image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
//             title: "Jessica Martinez",
//             description: "I've been trying to eat healthier, and these recipes make it so easy. Nutritious has never tasted this good!",
//             tags: ["⭐️⭐️⭐️⭐️⭐️", "🥑 15 Recipes", "🌿 Health Conscious"],
//         },
//         {
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
//             title: "David Kim",
//             description: "The step-by-step videos and tips have helped me improve my cooking skills tremendously. Highly recommend!",
//             tags: ["⭐️⭐️⭐️⭐️⭐️", "👨‍🍳 25 Recipes", "📚 Cooking Learner"],
//         },
//     ];

//     function aniamteCards(){
//       controls.start({
        
//         x:["0%","-50%"],
//         transition:{
//           repeat:Infinity,
//           repeatType:"loop",
//           ease:"linear",
//           duration:30,
//         }
//       }
//       );
//     };

//     useEffect(()=>(aniamteCards()), [controls]);


//   return(
//      <motion.div 
//      animate={controls}
      
//      onMouseEnter={()=>controls.stop()}
//      onMouseLeave={()=>aniamteCards()}
//      className="flex w-max">
//         {

//           [...reviews,...reviews].map((review,key) => (
//           <motion.div 
         
//           className="bg-[#FFF8DC] px-3 py-3 mt-4 ml-3 flex flex-col flex-shrink-0 max-w-sm rounded-lg">
//             <div className="flex flex-row">
//          <img src={review.image} alt="Photo" className="h-14 w-14 rounded-full mt-1 object-cover"></img>

//           <div className="flex flex-col">
//             <h3 className="text-black text-2xl ml-3">{review.title}</h3>
//             <p className="mt-1 ml-3">{review.tags[0]}</p>

//           </div>
//         </div>


//         <div className="text-gray-500 text-sm mt-3 italic">
//         <p>{review.description}</p>
//         </div>

//   <div className="flex flex-row gap-5 mt-4">
//   {
//   review.tags.slice(1).map((tag,index) =>(
        
//           <span className=" bg-white text-sm text-orange-500 border border-orange-500 px-1 py-1 rounded-full">{tag}</span>
        
//   ))}
//       </div> 



//      </motion.div>

//           ))}

        
// </motion.div>
        
        
     
//   );

// }



