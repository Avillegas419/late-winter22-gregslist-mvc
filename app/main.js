import { CarsController } from "./Controllers/CarsController.js";
import { HouseController } from "./Controllers/HouseController.js";

class App {
  carsController = new CarsController()
  houseController = HouseController()
}

window["app"] = new App();
