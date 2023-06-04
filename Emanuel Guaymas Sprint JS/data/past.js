const cardsPast = document.getElementById("cards_past")

function pastEvents(object){
    return `<div class="card-img card m-2" style="width: 18rem;">
    <img src="${object.image}">
    <div class="card-body">
      <h5 class="card-title">${object.name}</h5>
      <p class="card-text">${object.description}</p>
      <a href="./pages/description.html" class="btn btn-primary style-btn">More Information</a>
    </div>
  </div>`
}

let todayDate = data.currentDate
let filterPast = data.events.filter(
    function(letter){
        return letter.date < todayDate
    }
)

function showEvents(array, html){
    let template = "";
    for(let event of array){
        template += pastEvents(event)
    }
    html.innerHTML = template
}
showEvents(filterPast, cardsPast)