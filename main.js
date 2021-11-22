renderUser = new Renderer()
apiManager = new APIManager()

const dataArray = apiManager.RandomUserGenerator

let users = {}

const loadUser = function() {
    apiManager.RandomUserGenerator()
    apiManager.RandomQuoteGenerator()
    apiManager.RandomAboutMeGenerator()
    apiManager.RandomPokemonGenerator()
}

loadUser()

$("#loadData ").on("click", function() {
    console.log(apiManager.data["users"]);
    users = apiManager.data["users"]
    aboutMe = apiManager.data["aboutMe"]
    loadUser()
})

$("#displayData").on("click", function() {
    renderUser.userRender(users[0])
    let friends = users.slice(1)
    $('.friendsTable').empty()
    friends.forEach(friend => renderUser.friendsRender(friend))
    renderUser.QuoteRender(apiManager.data["quote"])
    renderUser.AboutMeRender(apiManager.data["aboutMe"])
    renderUser.pokemonRender(apiManager.data["pokemon"])
})