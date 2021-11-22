class Renderer {

    renderPage() {}

    userRender(user) {
        $('.user-container').empty()
        const source = $('#mainUser').html();
        const template = Handlebars.compile(source)
        const newHtml = template({ firstName: user.name.first, lastName: user.name.last, city: user.location.city, state: user.location.state, pic: user.picture.medium })
        $(".user-container").append(newHtml)
    }

    friendsRender(user) {
        const source = $('.friendsList').html();
        const template = Handlebars.compile(source)
        const newHtml = template({ firstName: user.name.first, lastName: user.name.last })
        $(".friends-container").append(newHtml)
    }

    QuoteRender(quote) {
        $('.quote-container>div>p').empty()
        const source = $('#quote').html();
        const template = Handlebars.compile(source)
        const newHtml = template({ quote: quote })
        $(".quote-container").append(newHtml)
    }

    AboutMeRender(aboutMe) {
        $('.meat-container').empty()
        const source = $('#aboutMe').html();
        const template = Handlebars.compile(source)
        const newHtml = template({ aboutMe: aboutMe })
        $(".meat-container").append(newHtml)
    }

    pokemonRender(pokemon) {
        $('.pokemon-container').empty()
        const source = $('#pokemon').html();
        const template = Handlebars.compile(source)
        const newHtml = template({ img: pokemon.sprites.front_default, pokemonName: pokemon.name })
        $(".pokemon-container").append(newHtml)
    }
}