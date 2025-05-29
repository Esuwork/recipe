import { elements } from "./base"

// Private function
const renderRecipe = recipe => {
    console.log(recipe);
    const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
        </li>
    `;
    // ul ruugee nemne
    elements.searchResultList.insertAdjacentHTML('beforeend',markup);
};
export const clearSearchQuery = () => {
    elements.searchInput.value = ``;
}
export const clearSearchResult =() => {
    elements.searchResultList.innerHTML = ``;
    elements.pageButtons.innerHTML = ``;
}
export const getInput = () => elements.searchInput.value;
export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {
    // Hailtin ur dung huudaslaj uzuuleh
    // page = 2, start = 10, end = 20
    const start = (currentPage-1) * resPerPage;
    const end = currentPage * resPerPage;


    recipes.slice(start, end).forEach(renderRecipe);

    // Huudaslaltin tovchuudig gargaj ireh
    const totalPages = Math.ceil(recipes.length / resPerPage);
    renderButtons(currentPage, totalPages);
};

const createButton = (page, type, direction) => ` <button class="btn-inline results__btn--${type}" data-goto=${page}>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${direction}"></use>
                    </svg>
                    <span>Хуудас ${page}</span>
                </button>`;

const renderButtons = (currentPage, totalPages) => {
    let buttonHtml = '';

    if (currentPage === 1 && totalPages > 1) {
        // On the first page, show the button for the next page
        buttonHtml = createButton(2, 'next', 'right');
    } else if (currentPage < totalPages) {
        // Show buttons for both previous and next pages
        buttonHtml = createButton(currentPage - 1, 'prev', 'left');
        buttonHtml += createButton(currentPage + 1, 'next', 'right'); // Use += to append
    } else if (currentPage === totalPages) {
        // On the last page, show only the previous page button
        buttonHtml = createButton(currentPage - 1, 'prev', 'left');
    }

    // Insert buttons into the DOM only if buttonHtml is not empty
    if (buttonHtml) {
        elements.pageButtons.insertAdjacentHTML('afterbegin', buttonHtml);
    }
};