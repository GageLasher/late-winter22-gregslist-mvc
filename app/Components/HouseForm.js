// NOTE just a place to keep the ugly form html out of site
export function getHouseForm(){
  return `
  <form class="row  p-2" onsubmit="app.housesController.createHouse(event)">
                  <h3 class="col-12">List Your House</h3>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" class="form-control" name="cost" id="cost" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">Square Feet</label>
                    <input required type="number" class="form-control" name="sqft" id="sqft" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-2">
                    <label for="" class="form-label">Age</label>
                    <input required type="number" class="form-control" name="age" id="age" aria-describedby="helpId"
                      placeholder="" value="2000">
                  </div>
                  <div class="mb-3 col-12">
                    <label for="" class="form-label">Description</label>
                    <input maxlength="50" required type="text" class="form-control" name="description" id="description"
                      aria-describedby="helpId" placeholder="">
                  </div>
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">Land Size</label>
                    <input required type="number" class="form-control" name="landsize" id="landsize" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">ImgUrl</label>
                    <input required type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
                      placeholder="">
                  </div>
                  <button class="col-4 offset-8 btn btn-success"> Create</button>
                </form>`
}