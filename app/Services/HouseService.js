import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";





class HouseService {

  createHouse(newHouse) {
    console.log('service got the car', newHouse);
    // NOTE turns the house data into a classed 'House' object
    let realHouse = new House(newHouse)
    console.log('its a real house now', realHouse);
    // ProxyState.houses.push(realHouse) NOTE push does not trigger listeners
    // NOTE inserts the house created into the array with the rest of the Houses there (spread operator)
    ProxyState.house = [realHouse, ...ProxyState.house]
  }
}




export const houseService = new HouseService()