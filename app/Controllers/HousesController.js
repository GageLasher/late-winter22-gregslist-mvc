import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";

function _draw(){
    let template = ""
    ProxyState.houses.forEach(h => template += h.template)
    document.getElementById("listings").innerHTML = template
}

export class HousesController{
    constructor(){
        ProxyState.on("houses", _draw)
        console.log("loaded controller");
        // ProxyState.houses
    }
    viewHouses(){
        _draw()
        document.getElementById("modal-body-slot").innerHTML = getHouseForm()
    }
    createHouse(event){
        event.preventDefault()
        let form = event.target
        let newHouse = {
            cost: form.cost.value,
            sqft: form.sqft.value,
            age: form.age.value,
            description: form.description.value,
            landsize: form.landsize.value,
            imgUrl: form.imgUrl.value
        }
        housesService.createHouse(newHouse)
        let modal = document.getElementById("new-listing")
        form.reset()
        bootstrap.Modal.getOrCreateInstance(modal).hide()
    }
    deleteHouse(houseId){
        housesService.deleteHouse(houseId)
    }
}