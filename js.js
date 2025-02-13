const button = document.querySelector(".button")
button.addEventListener("click", function wether(){
    const city= document.querySelector("#name").value
if(city === "nothing"){
    alert("Hey! Please Coose A City")
    return
}
const key = "4cedebbc5aee4d25be1161758251202"
// const API= "http://api.weatherstack.com/current?access_key=YOUR_API_KEY&query=CITY_NAME&units=m&language=eng"


// fetch("http://api.weatherapi.com/v1/current.json?key=4cedebbc5aee4d25be1161758251202&q=${city}&lang=fa")
// fetch(`http://api.weatherapi.com/v1/current.json?key=4cedebbc5aee4d25be1161758251202&q=${city}&lang=fa`)
// fetch(`http://api.weatherstack.com/current?access_key=5332701bd9e491680e6fab0c37649ed7&query=${city}&units=m&language=fa`)

fetch(`http://api.weatherapi.com/v1/search.json?key=4cedebbc5aee4d25be1161758251202&q=${city}`)
.then(response => response.json())
.then(data =>{
    
    console.log(data )
    const div = document.querySelector(".weather")
    div.innerHTML = ''
    if(data.length > 0){
        const h4= document.createElement("h4")
        const ptemp=  document.createElement("p")
        const curentweth= document.createElement("p") 
        h4.classList.add("info")
        ptemp.classList.add("info")
        curentweth.classList.add("info")
        h4.textContent= `🎈Weather in ${data[0].name}, ${data[0].country}`
        curentweth.textContent=`Weather: ${data[0].lon}`
        ptemp.textContent=`Geographical Location: ${data[0].lat} `
        
        h4.style.color="goldenrod"
        h4.style.backgroundColor="rgb(3, 35, 63)"
        ptemp.style.color="goldenrod"
         ptemp.style.backgroundColor="rgb(3, 35, 63)"
        curentweth.style.color="goldenrod"
         curentweth.style.backgroundColor="rgb(3, 35, 63)"

        div.style.display= "block"
        

        // div.style.border= "5px solid blue"


        div.append(h4, curentweth, ptemp)


    }else{
        document.querySelector(".weather").innerHTML= "could'nt find anything"
    }
})
.catch(eror => {
    console.error(eror)
})


})
