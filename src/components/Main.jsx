import React from "react"

export default function Main () {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newingredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newingredient]);
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
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}