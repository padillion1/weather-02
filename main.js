 const apiKey = '95efbeb02d5f499e805183236231404';
     
 

 
 const header = document.querySelector('.header');
 const form = document.querySelector('form');
 const input = document.querySelector('#inputCity');


 function removeCard () {
  const prevCard = document.querySelector('.card');
  if (prevCard) prevCard.remove();
 }
 

 form.onsubmit = function (e) {
    e.preventDefault();  
   let city = input.value.trim();

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;


    fetch(url).then((response) =>{
      return response.json()
    
     }).then((data) =>{
      console.log(data);

      if (data.error) {
        
        const html = `<div class="card">${data.error.message}</div>`

        header.insertAdjacentHTML('afterend', html);

      } else {
        const prevCard = document.querySelector('.card');
        if (prevCard) prevCard.remove();


         const html = `<div class="card">


         <h2 class="card-city">${data.location.name}</h2>
           
         <div class="card-weather">
          <div class="card-value">${data.current.temp_c}<sup>°C</sup></div>
          <img  class="card-img" src="./img/cloud.png" alt="Weather">
         </div>
        
         <div class="card-description">${data.current.condition.text}</div>
  
          </div>`


          header.insertAdjacentHTML('afterend', html);

      }
      
        

        
     })
    
    
}