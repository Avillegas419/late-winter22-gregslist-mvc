import { House } from "./Models/House.js"
import { Car } from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testCar = new Car(
  {
    make: 'GMC',
    model: 'Sierra',
    year: 2018,
    price: 5600,
    description: 'its cool.',
    color: '#FFFFFF',
    imgUrl: 'https://www.gmc.com/content/dam/gmc/na/us/english/index/shared-assets/jellybeans/2022/sierra/sierra-1500/01-images/2022-sierra-1500-pro-summit-white.png?imwidth=960'
  })

const testHouse = new House(
  {
    make: 'CBH',
    model: 'Single Family Home',
    year: 2018,
    price: 100000,
    description: 'Great Home',
    color: '#FFFFFF',
    imgUrl: 'https://i.pinimg.com/originals/80/ce/64/80ce6432c093ada0bad9fd41923a0e5b.jpg'
  })
class AppState extends EventEmitter {

  // NOTE just adds intellisense to our house array that lets our code know its an array of house, not other things 
  /** @type {import('./Models/Car').Car[]} */
  /** @type {import('./Models/House').House[]}*/
  cars = [testCar, testHouse]
  house = [testHouse]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
