import React from "react"
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main () {

    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
    const [recipeShown, setRecipeShown] = React.useState(false);

    function addIngredient(formData) {
        const newingredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newingredient]);
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button className="add-ingredient-button">+ Add ingredient</button>
            </form>

            {/* List of ingredients */}
            { ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients} 
                    toggleRecipeShown={toggleRecipeShown}
                />
            }

            {/* Recipe shown */}
            { recipeShown && <ClaudeRecipe />}
        </main>
    )
}