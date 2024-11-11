// Array to store recipes
let recipes = [];

// Function to render recipes on the page
function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';  // Clear the list

    recipes.forEach((recipe, index) => {
        const recipeCard = `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        </div>
        `;
        recipeList.innerHTML += recipeCard;
    });
}

// Function to add a new recipe
document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').value || 'https://via.placeholder.com/150';  // Default image if none provided
    const description = document.getElementById('description').value;
    const ingredients = document.getElementById('ingredients').value.split(',').map(item => item.trim());
    const instructions = document.getElementById('instructions').value;

    // Create a new recipe object
    const newRecipe = {
        title: title,
        image: image,
        description: description,
        ingredients: ingredients,
        instructions: instructions
    };

    // Add recipe to the array
    recipes.push(newRecipe);

    // Reset the form
    document.getElementById('recipe-form').reset();

    // Display the updated recipes
    displayRecipes();
});

// Function to filter recipes based on search query
function filterRecipes() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(query) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query));
    });

    // Display the filtered recipes
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const recipeCard = `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        </div>
        `;
        recipeList.innerHTML += recipeCard;
    });
}

// Display initial recipes if any
displayRecipes();