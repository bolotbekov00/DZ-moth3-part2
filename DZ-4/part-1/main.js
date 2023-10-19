const wrapper = document.querySelector('.wrapper')


const request = new XMLHttpRequest()
request.open("GET", "data.json")
request.setRequestHeader("Content-type", "application/json")
request.send()

request.onload = () => {
    const conclusion = JSON.parse(request.response)
    conclusion.forEach((card) => {
        const personCard = document.createElement('div')
        personCard.setAttribute('class','card')
        personCard.innerHTML = `
            <h1>Anime: ${card.anime}</h1>
            <img src="${card.img}">
            <h3>Name: ${card.name}</h3>
            <span>Age: ${card.age}</span>♦
            <p class="biography">Biography: ${card.biography}</p>
        `
        wrapper.append(personCard)
    })
}