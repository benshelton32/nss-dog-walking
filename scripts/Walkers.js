import { getCities, getWalkerCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

// Check walkerCities array for the walker that is clicked on and return the cities they work in.
// Define a function that takes the walker as a parameter.
// Declare a variable that is an empty array
// Use for..of loop on walkerCities array
// Use if statement to check if walker.id is equal to walkerID
// Push walkerCity
// Return Array
const filterWalkerCitiesByWalker = (walker) => {
    let arrayOfWalkerCities = []
    for (const walkerCity of walkerCities) {
        if (walker.id === walkerCity.walkerId) {
            arrayOfWalkerCities.push(walkerCity)
        }
    }
    return arrayOfWalkerCities
}

// Check arrayOfWalkerCities, and match cityId to city name. Return html string with city names
// Define a function that takes walkerCity as parameter
// Declare a variable for empty html string
// User for..of loop on  walkerCities array
// User nest for..of loop on cities array
// Use if statement to check if walkerCity.cityId is equal to city.id
// Add interpolated string to empty HTML string
// Return html string
const assignedCityNames = (arrayOfWalkerCities) => {
    let citiesHTMLString = ""
    for (const walkerCity of arrayOfWalkerCities) {
        for (const city of cities) {
            if (city.id === walkerCity.cityId) {
                if (arrayOfWalkerCities.length > 1) {
                    let multiCityArray = []
                    // for (const cityNames of arrayOfWalkerCities) {
                    //     multiCityArray.push(city.name)
                    // }
                    // console.log("Original Array", arrayOfWalkerCities)
                    // console.log(multiCityArray)
                    // citiesHTMLString = `${multiCityArray[0]} and ${multiCityArray[1]}`
                    multiCityArray.push(city.name)
                    console.log(multiCityArray)
                    citiesHTMLString = `${multiCityArray[0]} and ${multiCityArray[1]}` //returning two different arrays, so not working
                } else {
                citiesHTMLString = `${city.name}`
                }
            }
        }
    }
    return citiesHTMLString
}  

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)
            
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        // walkerHTML += `<li>${walker.name}</li>`
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}


// End goal: Display all cities associated with a walker

