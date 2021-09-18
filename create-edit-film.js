function saveFilm(film) {
    return new Promise((resolve,reject) => {
        let url = `http://adamantio.com.br:4000/api/films`

        if (film.filmId) {
            url += `/${film.filmId}`
    
            $.ajax({
                method: 'patch',
                url: url,
                data: film
            }).done(resolve)
        } else {
            $.ajax({
                method: 'post',
                url: url,
                data: film
            }).done(resolve)
        }
    })
    
}

function onFormSubmitted(event) {
    event.preventDefault()

    const film = {
        title: $("#title").val(),
        description: $("#description").val(),
        releaseyear: $("#releaseYear").val()
    }

    saveFilm(film).then(() => {
        window.location.href = "/list-films.html"
    })

}
// $(document).ready(() => {
//     let newFilm = {
//         title: "filme teste",
//         releaseyear: 2015
//     }
//     saveFilm(newFilm)
// })