class Client{
	constructor(firstName, lastName, streetAddress, city){
    	this.clientID = this.generateId();
      this.firstName = firstName;
      this.lastName = lastName;
      this.streetAddress = streetAddress;
      this.city = city;
    }
    
  	generateId(){
    	return new Date().getTime() + Math.floor(Math.random() * 100);
    }
}

class Reservation{
	constructor(clientID, date, hotelName, price, balance){
    	this.ReservationID = this.generateId();
      this.clientID = clientID;
      this.date = date;
      this.hotelName = hotelName;
      this.price = price;
      this.balance = balance;
    }

    generateId(){
    	return new Date().getTime() + Math.floor(Math.random() * 100);
    }
}

function postAccount(){
    let firstName = document.getElementById("inputFirstName").value
    let lastName = document.getElementById("inputLastName").value
    let streetAddress = document.getElementById("inputStreet").value
    let city = document.getElementById("inputCity").value
      axios.post('https://localhost:3000/client', {
        newClient: new Client(firstName, lastName, streetAddress, city)
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
function getAccounts(){
  axios.get('https://localhost:3000/client')
    .then(function (response) {
      addResonse(response.data)
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getAccount(){
  let id = document.getElementById("inputId").value
  console.log(id)
    axios.get(`https://localhost:3000/client/${id}`)
    .then(function (response) {
      console.log(response.data);
      addResonse(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}
