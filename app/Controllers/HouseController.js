import { ProxyState } from "../AppState.js";


function_draw(){
  let template = ''

}








export class HouseController {

  constructor() {
    ProxyState.on('house', _draw)
    console.log('house controller loaded')
  }
}