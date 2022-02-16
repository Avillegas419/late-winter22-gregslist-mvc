import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { houseService } from "../Services/HouseService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}

export class HouseController {
  constructor() {
    ProxyState.on('house', _draw)
    console.log('house controller loaded')
  }

  viewHouse() {
    _draw()
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }


  createHouse(event) {
    event.preventDefault()
    // NOTE grabs the form from the event submission
    let form = event.target
    console.log('hi from create house', form);
    // NOTE collects the information from the form and organizes it in one place
    let newHouse = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      description: form.description.value,
      price: form.price.value,
      color: form.color.value,
      imgUrl: form.imgUrl.value
    }
    console.log('new house', newHouse);
    // NOTE passes data to service
    houseService.createHouse(newHouse)
    // NOTE gets the modal element by it's id
    let modal = document.getElementById('new-listing')
    // NOTE clears form inputs
    form.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(modal).hide() //NOTE closes bootstrap modal
  }
  deleteHouse(houseId) {
    console.log('delete card', houseId);
    // NOTE just passes the ID of the house to be deleted
    houseService.deleteCar(houseId)
  }
}