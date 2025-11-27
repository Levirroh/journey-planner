import type City from "./City"
import type Plane from "./Plane"
import WeatherEnum from "./Wheater"

export default class Flight {
  title?: string
  destiny?: City
  origin?: City
  departure?: string
  arriving?: string
  duration?: string
  weather?: WeatherEnum
  plane?: Plane
}