import type Seats from "./Seats"

export default class Plane {
  model?: string = ""
  total_seats?: Number = 0
  seats?: Seats[] = []
}