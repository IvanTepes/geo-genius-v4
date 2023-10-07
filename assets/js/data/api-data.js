'use strict';

// Importing game data module
import { gameData } from './game-data.js';
import { LSAppName } from './local-storage-data.js';

// Define an empty array for storing country data
let countries = [];

// Countries to be removed from the API response
const countriesToRemove = [
    'United States Minor Outlying Islands',
    'Bouvet Island',
    'British Indian Ocean Territory',
    'Cocos (Keeling) Islands',
    'French Southern Territories',
    'Heard Island and McDonald Islands',
    'Christmas Island',
    'South Georgia and the South Sandwich Islands',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Pitcairn',
];

// List of countries and their short names
const countryShortName = {
    'Bolivia (Plurinational State of)': 'Bolivia',
    'Bonaire, Sint Eustatius and Saba': 'Bonaire',
    'Congo (Democratic Republic of the)': 'DR Congo',
    'Iran (Islamic Republic of)': 'Iran',
    "Lao People's Democratic Republic": 'Laos',
    'Micronesia (Federated States of)': 'Micronesia',
    'Moldova (Republic of)': 'Moldova',
    "Korea (Democratic People's Republic of)": 'North Korea',
    'Palestine, State of': 'Palestine',
    'Republic of Kosovo': 'Kosovo',
    'Russian Federation': 'Russia',
    'Saint Martin (French part)': 'Saint Martin',
    'Sint Maarten (Dutch part)': 'Sint Maarten',
    'Korea (Republic of)': 'South Korea',
    'Syrian Arab Republic': 'Syria',
    'Tanzania, United Republic of': 'Tanzania',
    'United Kingdom of Great Britain and Northern Ireland': 'Great Britain',
    'United States of America': 'United States',
    'Venezuela (Bolivarian Republic of)': 'Venezuela',
    'Falkland Islands (Malvinas)': 'Falkland Islands',
};

// Define key for local storage
const key = 'countries';

// Attempt to retrieve data from local storage
let data = JSON.parse(localStorage.getItem(LSAppName));

// Check if data exists in local storage
if (data && data[key]) {
    console.log('Data exists in local storage.');

    // Map data from local storage to the desired format and apply short names
    gameData.countries = data[key].map(country => {
        let name = country.name;
        // Apply short name if available
        if (countryShortName[name]) {
            name = countryShortName[name];
        }
        return {
            name: name,
            flagImage: country.flags.svg,
            population: country.population,
            independent: country.independent,
            capital: country.capital,
            region: country.region,
            subregion: country.subregion,
        };
    });
} else {
    // Define the API endpoint
    const endpoint = 'https://restcountries.com/v2/all';

    try {
        // Fetch data from the API
        const response = await fetch(endpoint);
        data = await response.json();

        // Filter data based on countriesToRemove array
        const filteredData = data.filter(country => !countriesToRemove.includes(country.name));

        // Store filtered data in local storage
        const newData = {
            [key]: filteredData,
        };
        localStorage.setItem(LSAppName, JSON.stringify(newData));

        // Map filtered data from the API to the desired format and apply short names
        gameData.countries = filteredData.map(country => {
            let name = country.name;
            // Apply short name if available
            if (countryShortName[name]) {
                name = countryShortName[name];
            }
            return {
                name: name,
                flagImage: country.flags.svg,
                population: country.population,
                independent: country.independent,
                capital: country.capital,
                region: country.region,
                subregion: country.subregion,
            };
        });
    } catch (error) {
        console.error('Error fetching and storing data:', error);
    }
}
