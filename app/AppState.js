import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testCar = new Car(
  {
    make:'GMC', 
    model:'Sierra', 
    year:2018, 
    price:5600, 
    description: 'its cool.',
    color:'#FFFFFF', 
    imgUrl:'https://thiscatdoesnotexist.com'
  })
  const testHouse = new House(
    {
      sqft: 2000,
      landSize: 1,
      age: 1978,
      cost: 200000,
      imgUrl: '//thiscatdoesnotexist.com',
      description: "hello dude"
    }
  )

class AppState extends EventEmitter {
  
  // NOTE just adds intellisense to our cars array that lets our code know its an array of cars, not other things 
  /** @type {import('./Models/Car').Car[]} */
  cars =[testCar]
  houses =[testHouse]
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
