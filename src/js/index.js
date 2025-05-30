require("@babel/polyfill");
import Search from "./models/Search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from './view/searchView';
import Recipe from "./models/Recipe";
//  WEB APP- iin tuluv
//  Hailtin query, ur dun
//  Tuhain uzuulj baigaa jor
//  Like-lsan joruud
//  Zahialr baigaa jorin nairlaganuud

const state = {};

const controlSearch = async () => {
    // 1) Web-s hailtin tulhuur ugiig gargaj avna
    const query = searchView.getInput();

    if(query) {
    // 2) Shineer hailtin obektiig uusgej ugnu
    state.search = new Search(query);
    // 3) Hail hiihed zoriulj delgetsiig beltgene
        searchView.clearSearchQuery();
        searchView.clearSearchResult();

        renderLoader(elements.searchResultDiv);

    // 4) Hailtiig guitsetgene
    await state.search.doSearch();

    // 5) Hailtin ur dung delgetsen uzuulne..
    clearLoader();
    if (state.search.result === undefined) alert(`Hailtaar ilertsgui...`);
    else searchView.renderRecipes(state.search.result);
    }

};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.pageButtons.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn) {
        const gotoPageNumber = parseInt(btn.dataset.goto, 10);
        searchView.clearSearchResult();
        searchView.renderRecipes(state.search.result, gotoPageNumber);
    }
});

const r = new Recipe(47746);
r.getRecipe();