import type { ETypeCardInfoFlight } from "../CardInfoFlight"
import type City from "./City"
import type Plane from "./Plane"
import type Seats from "./Seats"
import WeatherEnum from "./Wheater"

export enum ETypeFlight {
  direct,
}

export enum ETypeFare {
  economy,
  business,
  firstClass,
}

export default class Flight {
  title?: string
  destiny?: City
  origin?: City
  departureDate?: string
  departure?: string
  arriving?: string
  duration?: string
  weather?: WeatherEnum
  plane?: Plane
  seats?: Seats[]
  image?: string
  remainingSeats?: Seats[]
  tags?: ETypeCardInfoFlight[]
  type?: ETypeFlight
  fare?: ETypeFare
  price?: number
  brand?: string
  brandImage?: string
}