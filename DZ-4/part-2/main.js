const btn = document.querySelector('button')
btn.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET","data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const  result = JSON.parse(request.response)
        console.log(result)
    }
}