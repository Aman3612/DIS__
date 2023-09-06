function getAccount(){
    let id = document.getElementById("idInput").value
      axios.get(`https://localhost:3000/reservation/${id}`)
      .then(function (response) {
        console.log(response.data);
        addResonse(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
//Function for formatting reservations
  function addResonse(data){
    document.getElementById("responseSection").innerHTML = ""
    let responseSection = document.getElementById("responseSection")
    let i = 0
    if(data.length === undefined){
        let section = document.createElement("div")
        section.className = "section"
    
        let resIdTag = document.createElement("p")
        let resIdText = document.createTextNode("Reservation ID: "+data.reservationID)
        resIdTag.style = "font-weight: 550;"
        resIdTag.appendChild(resIdText)
  
        
        let idTag = document.createElement("p")
        let idText = document.createTextNode("Client ID: "+data.clientID)
        idTag.appendChild(idText)
    
    
        let dateTag = document.createElement("p")
        let dateText = document.createTextNode("Date: "+data.date.slice(0,10))
        dateTag.appendChild(dateText)
    
        let hotelTag = document.createElement("p")
        let hotelText = document.createTextNode("Hotel: "+data.hotel)
        hotelTag.appendChild(hotelText)
    
        let priceTag = document.createElement("p")
        let priceText = document.createTextNode("Price: "+data.price)
        priceTag.appendChild(priceText)
  
        let balanceTag = document.createElement("p")
        let balanceText = document.createTextNode("Balance: "+data.balance)
        balanceTag.appendChild(balanceText)
    
        let id = data.reservationID
        let deleteButton = document.createElement("button")
        let deleteText = document.createTextNode("Delete")
        deleteButton.appendChild(deleteText)
        deleteButton.onclick = function(){
          console.log(id)
          axios.delete(`https://localhost:3000/reservation/${id}`)
        .then(function (response) {
          console.log("In delete "+response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
        }
    
        section.appendChild(resIdTag)
        section.appendChild(idTag)
        section.appendChild(dateTag)
        section.appendChild(hotelTag)
        section.appendChild(priceTag)
        section.appendChild(balanceTag)
        section.appendChild(deleteButton)
        responseSection.appendChild(section)
    }
    else{
    while(data.length > i){
      console.log(data[i])
      let section = document.createElement("div")
      section.className = "section"
  
      let resIdTag = document.createElement("p")
      let resIdText = document.createTextNode("Reservation ID: "+data[i].reservationID)
      resIdTag.style = "font-weight: 550;"
      resIdTag.appendChild(resIdText)

      
      let idTag = document.createElement("p")
      let idText = document.createTextNode("Client ID: "+data[i].clientID)
      idTag.appendChild(idText)
  
  
      let dateTag = document.createElement("p")
      let dateText = document.createTextNode("Date: "+data[i].date.slice(0,10))
      dateTag.appendChild(dateText)
  
      let hotelTag = document.createElement("p")
      let hotelText = document.createTextNode("Hotel: "+data[i].hotel)
      hotelTag.appendChild(hotelText)
  
      let priceTag = document.createElement("p")
      let priceText = document.createTextNode("Price: "+data[i].price)
      priceTag.appendChild(priceText)

      let balanceTag = document.createElement("p")
      let balanceText = document.createTextNode("Balance: "+data[i].balance)
      balanceTag.appendChild(balanceText)
  
      let id = data[i].reservationID
      let deleteButton = document.createElement("button")
      let deleteText = document.createTextNode("Delete")
      deleteButton.appendChild(deleteText)
      deleteButton.onclick = function(){
        console.log(id)
        axios.delete(`https://localhost:3000/reservation/${id}`)
      .then(function (response) {
        console.log("In delete "+response.data);
        console.log(response.data);
        getAccounts()
      })
      .catch(function (error) {
        console.log(error);
      });
      }
  
      section.appendChild(resIdTag)
      section.appendChild(idTag)
      section.appendChild(dateTag)
      section.appendChild(hotelTag)
      section.appendChild(priceTag)
      section.appendChild(balanceTag)
      section.appendChild(deleteButton)
      responseSection.appendChild(section)
      i++
    }}
  }

  function getAccounts(){
    axios.get('https://localhost:3000/reservation')
      .then(function (response) {
        addResonse(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }