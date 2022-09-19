import drinks from './drinks.js';

class DataSource {
    static searchClub(keyword) {
        return new Promise((resolve, reject) => {
            const filteredDrink = drinks.filter(drink => drink.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredDrink.length) {
                resolve(filteredDrink);
            } else {
                reject(`${keyword} is not found"`);
            }
        });
    }
}

export default DataSource;