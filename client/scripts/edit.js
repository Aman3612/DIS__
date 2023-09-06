function getClient(){
    
        let id = document.getElementById("inputClientId").value
        console.log(id)
        if(id === ""){
            console.log("Please write a value")
        }
        else{
          axios.get(`https://localhost:3000/client/${id}`)
          .then(function (response) {
            console.log(response.data);
           document.getElementById("inputFirstName").value = response.data.firstName
           document.getElementById("inputLastName").value = response.data.lastName
           document.getElementById("inputStreetAddress").value = response.data.streetAddress
           document.getElementById("inputcity").value = response.data.city
           document.getElementById("updateClientBtn").style = "display: block"
          })
          .catch(function (error) {
            console.log(error);
          });
      }
}

function getReservation(){
    
    let id = document.getElementById("inputReservationId").value
    console.log(id)
    if(id === ""){
        console.log("Please write a value")
    }
    else{
      axios.get(`https://localhost:3000/reservation/${id}`)
      .then(function (response) {
        console.log(response.data);
       document.getElementById("clientIdTag").innerHTML = response.data.clientID
       document.getElementById("inputDate").value = response.data.date.slice(0, 10)
       document.getElementById("inputHotel").value = response.data.hotel
       document.getElementById("inputPrice").value = response.data.price
       document.getElementById("inputBalance").value = response.data.balance
       document.getElementById("updateResBtn").style = "display: block"
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}


function updateClient(){
    let id = document.getElementById("inputClientId").value
    let firstName = document.getElementById("inputFirstName").value
    let lastName = document.getElementById("inputLastName").value
    let streetAddress = document.getElementById("inputStreetAddress").value
    let city = document.getElementById("inputcity").value

    axios.put('https://localhost:3000/client/', {
        clientID: id,
        firstName: firstName,
        lastName: lastName,
        streetAddress: streetAddress,
        city: city
      })
      .then(function (response) {
        console.log(response);
        getAccounts()
      })
      .catch(function (error) {
        console.log(error);
      });
}

function updateReservation(){
    let reservationID = document.getElementById("inputReservationId").value
    let clientID = document.getElementById("clientIdTag").innerHTML
    let date = new Date(document.getElementById("inputDate").value+"T00:00:00.000Z")
    let hotel = document.getElementById("inputHotel").value
    let price = document.getElementById("inputPrice").value
    let balance = document.getElementById("inputBalance").value

    console.log(date)

    axios.put('https://localhost:3000/reservation/', {
        reservationID: reservationID,
        clientID: clientID,
        date: date,
        hotel: hotel,
        price: price,
        balance: balance
      })
      .then(function (response) {
        console.log(response);
        getAccounts()
      })
      .catch(function (error) {
        console.log(error);
      });
}