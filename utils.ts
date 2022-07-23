const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
const propertyContainer = document.querySelector('.properties')

export function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function populateProperties(properties: {
    image: string,
    title: string,
    pricePerNight: number,
    location: {
        address1: string,
        city: string,
        postcode: number,
        country: string,
    }
    contanctDetails: string,
    isAvailable: boolean
}[]) {
    for (const property of properties) {
        console.log(property)
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = property.title
        const image = document.createElement('img')
        image.setAttribute('src', property.image)
        card.appendChild(image)
        propertyContainer.appendChild(card)
    }
}