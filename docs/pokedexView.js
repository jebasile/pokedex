// View the pokedex either as grid or table

// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

var URL="https://q-exercise-api.o64ixruq9hj.us-south.codeengine.appdomain.cloud/api/rest/pokemon"

console.log("Got here 1");

async function getPokedex() {
    try {
        console.log("Got here 2 getPokedex()");
        const response = await axios.get( URL );
        console.log( "%o", response.data);
        console.log( "%o", response.data.items);

        let itemLen = response.data.items.length
        let text = "<ul>";
        let types;
        for (let i = 0; i < itemLen; i++) {
            let typesLen = response.data.items[i].types.length;
            types = "";
            for (let j = 0; j < typesLen; j++) {
                types += response.data.items[i].types[j];
                types += " ";
            }
            text += "<li>" + response.data.items[i].name + " " + response.data.items[i].id + " " + types + 
            "<button type='button' onclick='postFavoritePokemon(" + response.data.items[i].id + ")'>Favorite</button>" +
            "<button type='button' onclick='postUnfavoritePokemon(" + response.data.items[i].id + ")'>Unfavorite</button>" +
            "</li>";
        }
        text += "</ul>";
        console.log(text);
        var x = document.getElementById( 'theData' );
        x.innerHTML = text;
        //x.innerHTML = response.data.properties.periods[0].name + ": " + response.data.properties.periods[0].detailedForecast;
    } catch (error) {
        console.error(error);
    }
}


async function postFavoritePokemon(id) {
    try {
        console.log("Got here 4 postFavoritePokemon(" + id + ")");
        let favurl = URL + "/" + id + "/favorite";
        console.log(favurl);
        const response = await axios.post( favurl );
        console.log( "%o", response.data);
    } catch (error) {
        console.error(error);
    }
        
}

async function postUnfavoritePokemon(id) {
    try {
        console.log("Got here 5 postUnfavoritePokemon(" + id + ")");
        let unfavurl = URL + "/" + id + "/unfavorite";
        console.log(unfavurl);
        const response = await axios.post( unfavurl );
        console.log( "%o", response.data);
    } catch (error) {
        console.error(error);
    }
        
}

