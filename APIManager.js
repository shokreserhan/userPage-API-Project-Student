//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    RandomUserGenerator(){
        $.ajax({
            method: "get",
            url: "https://randomuser.me/api/?results=7",
            success: (data) => {
                this.data["users"] = data.results
            },
            error: function(xhr, text, error){
                alert("Error while getting DATA")
            }
        })
    }

    RandomQuoteGenerator(){
        $.ajax({
            method: "get",
            url: "https://api.kanye.rest/",
            success: (data) => {
                this.data["quote"] = data.quote
            },
            error: function(xhr, text, error){
                alert("Error while getting quote")
            }
        })
    }

    RandomAboutMeGenerator(){
        $.ajax({
            method: "get",
            url: "https://baconipsum.com/api/?type=meat-and-filler&paras=1",
            success: (data) => {
                this.data["aboutMe"] = data
            },
            error: function(xhr, text, error){
                alert("Error while getting about me info")
            }
        })    
    }

    RandomPokemonGenerator(){

        const pokenum = Math.round(Math.random()*949)
        $.ajax({
            method: "get",
            url: "https://pokeapi.co/api/v2/pokemon/" + pokenum,
            success: (data) => {  
                this.data["pokemon"] = data
            },
            error: (xhr, text, error) => {
                if(xhr.status === 404){
                    this.RandomPokemonGenerator()
                }else{
                    alert("Error while getting pokemon info")
                }
            }
        })
    }
}