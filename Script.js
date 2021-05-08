//1. Create a request variable from XMLHttpRequest
var request = new XMLHttpRequest();

//2. Create a new connection
request.open('GET','https://restcountries.eu/rest/v2/all', true) 

//3. Send a request
request.send();

//4. Load the Data
request.onload = function(){
    var countrydata = JSON.parse(this.response);


// Asian countries 


    var Asiacountry= countrydata.filter((items)=>{
        if (items.region === "Asia") {
            return items;
        }
    });
    console.log(Asiacountry)
}

//Population less than 200000

var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all', true) 

request.send();

//4. Load the Data
request.onload = function(){
    var countrydata = JSON.parse(this.response);

    var Asiacountry= countrydata.filter((items)=>{
        if (items.population <= 200000) {
            return items;
        }
    });
    console.log(Asiacountry)
}

//curreny as USD


var request = new XMLHttpRequest();


request.open('GET','https://restcountries.eu/rest/v2/all', true) 


request.send();


request.onload = function(){
    var countrydata = JSON.parse(this.response);

    var USDcurrency= countrydata.filter((items)=>{
        if (items.currencies[0].code === 'USD') {
            return items;
        }
    });
    console.log(USDcurrency)
}



