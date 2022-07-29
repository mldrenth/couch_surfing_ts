import {Review} from './interfaces'

export class MainProperty {
    title: string
    src: string
    reviews: Review[]
    constructor(title: string, src: string, reviews: Review[]) {
        this.title = title;
        this.src = src;
        this.reviews = reviews;
    }
}


// class Car {
//     make: string
//     year: number
//     color: string
//     constructor(make: string, year: number, color: string) {
//         this.make = make
//         this.year = year
//         this.color = color
//     }
// }