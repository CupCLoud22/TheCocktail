import '../component/drink-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const drinklistElement = document.querySelector("drink-list");
  
    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };
  
    const renderResult = results => {
        drinklistElement.drinks = results;
    };
  
    const fallbackResult = message => {
        drinklistElement.renderError(message);
    };
  
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;