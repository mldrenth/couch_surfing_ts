import {LoyaltyType} from './enums'

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyType;
    date: string
}