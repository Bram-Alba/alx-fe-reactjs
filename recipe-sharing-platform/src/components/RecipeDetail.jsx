import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipesData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-600 mb-4">{recipe.summary}</p>

        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients ? (
            recipe.ingredients.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))
          ) : (
            <li className="text-gray-600">No ingredients provided.</li>
          )}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-600">
          {recipe.instructions ? (
            recipe.instructions.map((step, index) => <li key={index}>{step}</li>)
          ) : (
            <li>No instructions provided.</li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;