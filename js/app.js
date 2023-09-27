console.log('passou aqui!')
// http://127.0.0.1:3000/pokemon.json
// fetch()

function listarPokemons(pokemons) {
    // seleciona elemento HTML para atualizar o contador
    const contador = document.querySelector('#contador')
    // atualiza o contador
    contador.innerHTML = pokemons.length
    
    // percorrer o array de pokemons para montar o HTML de cada um
    const listHTML = pokemons.map(function (pokemon) {
        const img = pokemon.name.toLowerCase()
        return `<div class="row">
                    <div class="col-lg-3">
                        <div class="pokemon panel panel-primary">
                            <div class="panel-heading">
                                <h1>${pokemon.name}
                                    <span class="label label-primary pull-right">
                                        #${pokemon.id}
                                    </span>
                                </h1>
                            </div>
                            <div class="panel-body">
                                <img
                                    class="avatar center-block"
                                    src="img/pokemons/${img}.jpg"
                                >
                            </div>
                            <div class="panel-footer">
                                <div class="text-center"><a href="/grass"><span
                                            class="label type type-grass">Grass</span></a><a href="/poison"><span
                                            class="label type type-poison">Poison</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    // pega o elemento que vai receber o novo HTML
    const lista = document.querySelector('#lista-pokemons')
    lista.innerHTML = listHTML.join("\n")
}

fetch('http://127.0.0.1:3000/pokemon.json')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        listarPokemons(data)
    })
