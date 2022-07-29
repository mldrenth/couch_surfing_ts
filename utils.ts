import { LoyaltyType } from './enums'
import {Review, Property} from './interfaces'

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
const propertyContainer = document.querySelector('.properties')
let authorityStatus : any
let isLoggedIn = true;

export function showReviewTotal(value: number, reviewer: string, loyalty: LoyaltyType) {
    const iconDisplay = loyalty === LoyaltyType.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function populateProperties(properties: Property[]) {
    for (const property of properties) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = property.title
        const image = document.createElement('img')
        image.setAttribute('src', property.image)
        card.appendChild(image)
        propertyContainer.appendChild(card)
        showDetails(isLoggedIn, card, property.pricePerNight)
    }
}

export function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
 }

 export function makeMultiple(value: number) : string {
    if (value > 1 || value === 0) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews : Review[]) : Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}