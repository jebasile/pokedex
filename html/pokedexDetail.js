// Get the details for a pokemon

//   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

var URL="https://q-exercise-api.o64ixruq9hj.us-south.codeengine.appdomain.cloud/api/rest/pokemon"
var URL002="https://q-exercise-api.o64ixruq9hj.us-south.codeengine.appdomain.cloud/api/rest/pokemon/002"

async function getPokemonDetails() {
    try {
        console.log("Got here 3");
        const response = await axios.get( URL002 );
        console.log( "%o", response.data);
        
        let text = "<ul>";
        text += "<li>" + "Id:" + response.data.id + "</li>";
        text += "<li>" + "Name:" + response.data.name + "</li>";
        let itemLen = response.data.types.length;
        for (let i = 0; i < itemLen; i++) {
            text += "<li>" + "Types:" + response.data.types[i] + "</li>";
        } 
        text += "<li>" + "Favorite:" + response.data.isFavorite + "</li>";
        text += "</ul>";
        console.log(text);
        var x = document.getElementById( 'theData' );
        x.innerHTML = text;
    } catch (error) {
        console.error(error);
    }
}

