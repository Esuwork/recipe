require("@babel/polyfill");
import Search from "./models/Search";

let search = new Search('pasta');

search.doSearch().then(r => console.log(r));
