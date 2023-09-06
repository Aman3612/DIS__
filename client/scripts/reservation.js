class Reservation{
	constructor(clientID, date, hotel, price, balance){
      this.reservationID = this.generateId();
      this.clientID = clientID;
      this.date = date;
      this.hotel = hotel;
      this.price = price;
      this.balance = balance;
    }

    generateId(){
    	return new Date().getTime() + Math.floor(Math.random() * 100);
    }
}

function newReservation(){
    let clientId = document.getElementById("clientIdInput").value
    let dateInput = document.getElementById("dateInput").value
    let hotel = document.getElementById("hotelInput").value
    let price = document.getElementById("priceInput").value
    let balance = document.getElementById("balanceInput").value

      axios.post('https://localhost:3000/reservation', {
        newReservation: new Reservation(clientId, dateInput, hotel, price, balance)
      })
      .then(function (response) {
        console.log(response);
        getAccounts()
      })
      .catch(function (error) {
        console.log(error);
      });
}