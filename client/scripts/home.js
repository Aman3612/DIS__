let responseDom = document.getElementById("response");

function getResponse(){
  axios.get('http://localhost:3000/')
  .then(function (response) {
    // handle success
    console.log(response);
    responseDom.innerHTML=response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }

