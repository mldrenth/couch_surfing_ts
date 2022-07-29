import { LoyaltyType } from './enums'
import { Price, Country } from './types';

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyType;
    date: string
}


export interface Property {
    image: string;
    title: string;
    pricePerNight: Price;
    location: {
        address1: string;
        city: string;
        postcode: number | string;
        country: Country;
    }
    contanctDetails: [number, string];
    isAvailable: boolean;
}