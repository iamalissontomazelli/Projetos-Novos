// criando const e chamando classes do html
const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');

//Function para pegar os Recipes 
const fetchRecipes = async (query) => {
    const data = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    response.meals.array.forEach(meal => {
        console.log(meal);
    });
    //console.log(response);
}

//criando eventlistener do button Search
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);

    //console.log("Button Clicked"); // aqui está exibindo quandos cliques estão acontecendo no button
});