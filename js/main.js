let elList = document.querySelector('.card')
let Form = document.querySelector('.form')
let elInput = document.querySelector('.input')

fetch('https://jsonplaceholder.typicode.com/comments') // API ULANDI
    .then((res) => res.json())
    .then((data) => {
        let fuldata = data.slice(0, 5)
        elList.innerHTML = ''
        function mapper(fuldata) {
            elList.innerHTML = ''
            fuldata.forEach((e) => {
                let Newli = document.createElement('li')
                Newli.classList.add('card__item')
                Newli.innerHTML = `
                <h2 class="id">id: ${e.id}</h2>
                <h2 class="title">${e.name}</h2>
                <a href="${e.email}" class="email"><b>Email: </b>${e.email}</a>
                <p class="comment"><b>Comment: </b> ${e.body.toLowerCase()}</p>`
                elList.appendChild(Newli)
            });
        }
        let elComment = document.querySelectorAll('.comment')

        mapper(fuldata)
        elInput.addEventListener('keyup', (e) => {
            fuldata.forEach((a) => {
                e.preventDefault()
                elList.innerHTML = ''
                let input = elInput.value
                const searchData = fuldata.filter((a) => a.body.toLowerCase().includes(input.toLowerCase()) == true)
                // let re = RegExp(elInput.value)
                // let mark = a.name.replace(re, `<mark>${input}</mark>`)
                mapper(searchData)

            })
        })


    })