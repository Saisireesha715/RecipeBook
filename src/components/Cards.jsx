
import Card from "./Card";

export default function Cards() {
  const recipes = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Margherita Pizza",
      description: "A cheesy Italian delight with fresh basil.",
      tags: ["🍕 Italian", "⏱️ 30 min", "🥦 Veg"],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Pasta Alfredo",
      description: "Creamy and delicious pasta with white sauce.",
      tags: ["🍝 Italian", "⏱️ 25 min", "🥩 Non-Veg"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Fresh Garden Salad",
      description: "A bowl full of nutrients and fresh veggies.",
      tags: ["🥗 Vegan", "⏱️ 10 min", "🌱 Healthy"],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Berry Smoothie",
      description: "Refreshing blend of mixed berries and yogurt.",
      tags: ["🥤 Drink", "⏱️ 5 min", "🍓 Fruity"],
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: "Grilled Salmon",
      description: "Perfectly grilled salmon with herbs and lemon.",
      tags: ["🐟 Seafood", "⏱️ 20 min", "🔥 Grilled"],
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      title: "Beef Steak",
      description: "Juicy steak cooked to perfection.",
      tags: ["🥩 Beef", "⏱️ 15 min", "🍖 High Protein"],
    }
  ];

  return (
    <div className="bg-white w-full flex flex-col gap-12 py-16">
      <p className="flex justify-center text-center text-orange-500 text-5xl mt-10 font-Barriecito">
        Trending Recipes
      </p>
      
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
      
      <div className="w-full leading-[0] mt-12">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[80px]"
        >
          <path d="M0,32 C360,120 1080,0 1440,80 L1440,0 L0,0 Z" fill="orange" />
        </svg>
      </div>
    </div>
  );
}