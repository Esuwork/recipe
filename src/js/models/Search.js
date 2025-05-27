require("@babel/polyfill");
import axios from "axios";
export default class Search {
    constructor() {
        this.query = this.query;
    }
    
async doSearch() {
    try {
    let result = await axios('https://forkify-api.herokuapp.com/api/search?q=pizza#'+ this.query);

    this.result = result.data.recipes;

    return this.result;

    } catch (error) {
        alert('error zaasan ' + error);
    }
};
};
