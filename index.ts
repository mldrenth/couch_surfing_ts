import { showReviewTotal, populateUser, populateProperties, showDetails, getTopTwoReviews } from "./utils"
import { Permissions, LoyaltyType } from './enums'
import { Price, Country } from './types'
import {Review} from './interfaces'

let isOpen: boolean
let isLoggedIn: boolean
const footer = document.querySelector('.footer')
const button = document.querySelector('button')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')

// Reviews
const reviews: Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyType.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyType.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyType.SILVER_USER,
        date: '27-03-2021',
    },
]

// User
// const you: {
//     firstName: string,
//     lastName: string,
//     age: number
//     isReturning: boolean,
//     stayedAt: string[];
// } = {
//     firstName: 'Bobby',
//     lastName: 'Brown',
//     age: 23,
//     isReturning: true,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }
const ADMIN = 'admin'
const READ_ONLY = 'read-only'



const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    age: 23,
    permissions: Permissions.ADMIN,
    isReturning: true,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


// Properties
const properties: {
    image: string,
    title: string,
    pricePerNight: Price,
    location: {
        address1: string,
        city: string,
        postcode: number,
        country: Country,
    }
    contanctDetails: [number, string],
    isAvailable: boolean
}[] = [{
    image: 'images/colombia-property.jpg',
    title: 'Colombian Shack',
    pricePerNight: 45,
    location: {
        address1: 'shack 37',
        city: 'Bogota',
        postcode: 45632,
        country: 'Colombia'
    },
    contanctDetails: [+1123495082908, 'marywinkle@gmail.com'],
    isAvailable: true  
},
{
    image: 'images/poland-property.jpg',
    title: 'Polish Cottage',
    pricePerNight: 30,
    location: {
        address1: 'no 23',
        city: 'Gdansk',
        postcode: 343903,
        country: 'Poland'
    },
    contanctDetails: [+1123495082908,'garydavis@hotmail.com'],
    isAvailable: false 
},{
    image: 'images/london-property.jpg',
    title: 'London Flat',
    pricePerNight: 25,
    location: {
        address1: 'flat 15',
        city: 'London',
        postcode: 35433,
        country: 'United Kingdom',
    },
    contanctDetails: [+1123495082908,'andyluger@aol.com'],
    isAvailable: true
}]


// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

populateProperties(properties)

let count = 0
function addReviews(array: Review[]){
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number] = ["Thessaloniki", "11:35", 30]
footer.innerHTML = currentLocation[0] + " " + currentLocation[1] + " " + currentLocation[2] + "°"
