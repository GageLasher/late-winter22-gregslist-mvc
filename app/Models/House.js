import { generateId } from "../Utils/generateId.js"

export class House{
    constructor({sqft, landSize, age, cost, imgUrl, description}){
        this.id = generateId()
        this.sqft = sqft,
        this.landSize = landSize,
        this.age = age,
        this.cost = cost,
        this.imgUrl = imgUrl,
        this.description = description     
    }
    get template(){
    return `
    <div class="col-md-4">
    <div class="bg-white rounded shadow">
      <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="house image">
      <div class="p-3">
        <p>$${this.cost}</p>
        <p>Sqft: ${this.sqft}</p>
        <p>${this.age}</p>
        <p>${this.description}</p>
        <p>Land Size: ${this.landSize} Acres</p>
      </div>
      <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
    </div>
  </div>
    `
    }
}