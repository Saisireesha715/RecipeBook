// import Card from "./Card";
// import { motion } from "framer-motion";
// export default function Reviews(){
//     const recipes = [
//     {
//       image: "https://source.unsplash.com/400x300/?pizza",
//       title: "Margherita Pizza",
//       description: "A cheesy Italian delight with fresh basil.",
//       tags: ["🍕 Italian", "⏱️ 30 min", "🥦 Veg"],
//     },
//     {
//       image: "https://source.unsplash.com/400x300/?pasta",
//       title: "Pasta Alfredo",
//       description: "Creamy and delicious pasta with white sauce.",
//       tags: ["🍝 Italian", "⏱️ 25 min", "🥩 Non-Veg"],
//     },
//     {
//       image: "https://source.unsplash.com/400x300/?salad",
//       title: "Healthy Salad",
//       description: "A bowl full of nutrients and fresh veggies.",
//       tags: ["🥗 Vegan", "⏱️ 10 min", "🌱 Healthy"],
//     },
//     {
//         image: "https://source.unsplash.com/400x300/?salad",
//       title: "Healthy Salad",
//       description: "A bowl full of nutrients and fresh veggies.",
//       tags: ["🥗 Vegan", "⏱️ 10 min", "🌱 Healthy"],
//     },
//      {
//         image: "https://source.unsplash.com/400x300/?salad",
//       title: "Healthy Salad",
//       description: "A bowl full of nutrients and fresh veggies.",
//       tags: ["🥗 Vegan", "⏱️ 10 min", "🌱 Healthy"],
//      },
//   ];
//     return(

//         <div className="bg-white h-screen w-screen mt-40 p-3 flex flex-col">

//            <h3 className="text-orange-500 text-5xl font-knewave ml-40">What Users telling About us??</h3>
              
//               <motion.div 
//               animate={{x:["100%","-100%"]}}
//               transition = {{
//                 duration : 20,
//                 repeat:Infinity,
//                 repeatType:"loop",
//                 ease:"linear"
//               }}
             
              
//               className="flex flex-row justify-between p-3 mt-30">
             
//                {
              
//                               recipes.map(()=>(
//                                   <Card recipes={recipes}/>
//                               ))
//                }

//            </motion.div>
        

//         </div>

//     );

// }

import Card from "./Card";
import { motion } from "framer-motion";

export default function Reviews() {
    const reviews = [
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
            title: "Alex Johnson",
            description: "This recipe website changed my cooking game! The instructions are clear and the results are always delicious.",
            tags: ["⭐️⭐️⭐️⭐️⭐️", "🥘 12 Recipes", "👨‍🍳 Home Cook"],
        },
        {
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
            title: "Sarah Williams",
            description: "As a busy mom, I love how these recipes are both kid-friendly and quick to prepare. My family loves everything I've made!",
            tags: ["⭐️⭐️⭐️⭐️⭐️", "🥗 8 Recipes", "👩‍👧‍👦 Busy Parent"],
        },
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
            title: "Michael Chen",
            description: "The international recipes are authentic and well-explained. I've impressed my friends with dishes from around the world!",
            tags: ["⭐️⭐️⭐️⭐️⭐️", "🌏 20 Recipes", "🍳 Food Enthusiast"],
        },
        {
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
            title: "Jessica Martinez",
            description: "I've been trying to eat healthier, and these recipes make it so easy. Nutritious has never tasted this good!",
            tags: ["⭐️⭐️⭐️⭐️⭐️", "🥑 15 Recipes", "🌿 Health Conscious"],
        },
        {
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
            title: "David Kim",
            description: "The step-by-step videos and tips have helped me improve my cooking skills tremendously. Highly recommend!",
            tags: ["⭐️⭐️⭐️⭐️⭐️", "👨‍🍳 25 Recipes", "📚 Cooking Learner"],
        },
    ];

    return (
        <div className="bg-white w-full py-20 px-4 md:px-8 flex flex-col">
            <h3 className="text-orange-500 text-4xl md:text-5xl font-knewave text-center mb-4">
                What Users Are Saying About Us
            </h3>
            
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our community of home chefs!
            </p>
              
            <div className="relative overflow-hidden py-8">
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear"
                    
                    }}
                    
                  whileHover={{ animationPlayState: "paused" }}
                    className="flex flex-row gap-6 w-max"
                >
                    {/* Double the array to create seamless loop */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div key={index} className="w-80 flex-shrink-0">
                            <div className="bg-orange-50 rounded-xl p-6 shadow-md h-full">
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={review.image} 
                                        alt={review.title} 
                                        className="h-14 w-14 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold text-lg">{review.title}</h4>
                                        <div className="text-orange-500">{review.tags[0]}</div>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4 italic">"{review.description}"</p>
                                <div className="flex flex-wrap gap-2">
                                    {review.tags.slice(1).map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="bg-white text-orange-700 text-xs font-medium px-3 py-1 rounded-full border border-orange-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-center mt-12">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                    Read More Reviews
                </button>
            </div>
        </div>
    );
}