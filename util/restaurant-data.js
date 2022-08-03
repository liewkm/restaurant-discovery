const path = require('path');
const fs = require('fs');


const filePath = path.join(__dirname, '..', "data", "restaurants.json");

// Read restaurants.json
function getStoredRestaurants() {

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    return storedRestaurants;
}

// Write restaurants.json
function storedRestaurants(storableRestaurants) {
    fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
    getStoredRestaurants: getStoredRestaurants,
    storeRestaurants: storedRestaurants
};