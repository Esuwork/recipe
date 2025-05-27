require("@babel/polyfill");
import axios from "axios";

export default class Search {
    constructor(query) { // Accept query as a parameter
        this.query = query; // Set this.query to the passed query
    }
    
    async doSearch() {
        try {
            let result = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`); // Use this.query in the API call
            this.result = result.data.recipes;
            return this.result;
        } catch (error) {
            console.log('Error occurred: ' + error);
        }
    }
}
