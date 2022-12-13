// Get the details for a pokemon

//   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

var URL="https://q-exercise-api.o64ixruq9hj.us-south.codeengine.appdomain.cloud/api/rest/pokemon"
var URL002="https://q-exercise-api.o64ixruq9hj.us-south.codeengine.appdomain.cloud/api/rest/pokemon/002"

async function getPokemonDetails(id) {
    try {
        console.log("Got here getPokemonDetails(" + id +")");
        let idurl = URL + "/" + id;
        const response = await axios.get( idurl );
        console.log( "%o", response.data);
        
        let text = "<ul>";
        text += "<li>" + "Id:" + response.data.id + "</li>";
        text += "<li>" + "Name:" + response.data.name + "</li>";
        let itemLen = response.data.types.length;
        let types = "";
        for (let i = 0; i < itemLen; i++) {
            types += response.data.types[i] + " ";
        } 
        text += "<li>" + "Types:" + types + "</li>";
        text += "<li>" + "Favorite:" + response.data.isFavorite + "</li>";
        text += "<li>" + "Weight:" + response.data.weight.minimum + " " + response.data.weight.maximum + "</li>";
        text += "<li>" + "Height:" + response.data.height.minimum + " " + response.data.height.maximum + "</li>";
        let evolLen = response.data.evolutions.length;
        for (let i = 0; i < evolLen; i++) {
            text += "<li>" + "Evolutions:" + response.data.evolutions[i].name + "</li>";
        } 
        text += "</ul>";
        console.log(text);
        var x = document.getElementById( 'theData' );
        x.innerHTML = text;
    } catch (error) {
        console.error(error);
    }
}

function getPokemonDetailsId() {
    console.log("Got here getPokemonDetailsId()");
    const message = document.getElementById("inputIdMsg");
    message.innerHTML = "";
    let x = document.getElementById("inputId").value;
    try { 
      if (x == "")  x="002";  // Default id
      if (isNaN(x)) throw "not a number";
      //x = Number(x);
      //if(x < 5)  throw "too low";
      //if(x > 10)   throw "too high";
      getPokemonDetails(x);
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }
  