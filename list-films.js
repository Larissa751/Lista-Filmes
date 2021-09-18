function fillTable(films) {
    const tbodyElement = $("#filmsTable tbody")

    tbodyElement.empty()

    for (const film of films) {
        tbodyElement.append(`
            <tr>
                <td>${film.filmId}</td>
                <td>${film.title}</td>
                <td>${film.releaseYear}</td>
            </tr>
        `)
    }


}

function getFilms(title) {
    return new Promise((resolve,reject) => {
        let url = `http://adamantio.com.br:4000/api/films`

        if (title) {

            let filter = {
                where: {
                    title: {
                        like: `%${title}%`
                    }
                }
            }
            url += `?filter=${JSON.stringify(filter)}`

            url = encodeURI(url)
        }
            

        $.ajax(url).done(films => resolve(films))
    })
}

function onTitleFilterChange(){
    const typedText = $("#inputFilterByTitle").val()

    if (!typedText) {
        getFilms().then(films => fillTable(films))
        return
    }

    if (typedText.lenght >= 3) {
        getFilms(typedText).then(films => fillTable(films))

    }
}
    




// //$(document).ready(() => {
//     fillTable([
//         { filmId: 1, title: "Harry Potter", releaseYear: 2015 },
//         { filmId: 2, title: "Vingadores", releaseYear: 2016 },
//         { filmId: 3, title: "Logan", releaseYear: 2018 }
//     ])

// })