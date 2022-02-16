import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HouseService {
  createHouse(newHouse) {
    console.log('service got the house', newHouse);
    // NOTE turns the house data into a classed 'House' object
    let realHouse = new House(newHouse)
    console.log('its a real house now', realHouse);
    // ProxyState.houses.push(realHouse) NOTE push does not trigger listeners
    // NOTE inserts the house created into the array with the rest of the Houses there (spread operator)
    ProxyState.house = [realHouse, ...ProxyState.house]
  }


  deleteHouse(houseId) {
    console.log('service deleting house', houseId);
    // NOTE find the index of the house to delete
    let indexToDelete = ProxyState.houses.findIndex(c => c.id == houseId)
    console.log('deleting index', indexToDelete);
    ProxyState.houses.splice(indexToDelete, 1)
    // NOTE just here to trigger the listener
    ProxyState.houses = ProxyState.houses
  }

}

export const houseService = new HouseService()