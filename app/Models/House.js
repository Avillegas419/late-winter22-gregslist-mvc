import { generateId } from '../Utils/generateId.js'



export class House {

  constructor({ manufacture, model, year, price, description, color, imgUrl }) {
    this.id = generateId()
    this.manufacture = manufacture,
      this.model = model,
      this.year = year,
      this.price = price,
      this.description = description,
      this.color = color,
      this.imgUrl = imgUrl
  }
}