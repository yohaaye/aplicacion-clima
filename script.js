let apikey='18c7469c649c13019610d36cb71189dd'

let url='https://api.openweathermap.org/data/2.5/weather'
let difkelvin='273.15'


document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad=document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){

fetch(`${url}?q=${ciudad}&appid=${apikey}&lang=es`)

    .then(data=>data.json())
    .then(data=>mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    //console.log(data)
    const divDatosClima=document.getElementById('datosClima')
    divDatosClima.innerHTML=''
    const ciudadNombre=data.name
    const pais=data.sys.country
    const temperatura=data.main.temp
    const descripcion=data.weather[0].description
    const icono=data.weather[0].icon
    const humedad=data.main.humidity
    const sensacionTermica=data.main.feels_like

    const ciudadtitulo=document.createElement('h2')
    ciudadtitulo.textContent=`${ciudadNombre}, ${pais}`
    const temperaturaInfo=document.createElement('p')
    temperaturaInfo.textContent=`Temperatura: ${Math.floor(temperatura-difkelvin)} °C`
    const descripcionInfo=document.createElement('p')
    descripcionInfo.textContent=`Descripcion meteorológica: ${descripcion}`
    const iconoImg=document.createElement('img')
    iconoImg.src=`https://openweathermap.org/img/wn/${icono}.png`
    const humedadInfo=document.createElement('p')
    humedadInfo.textContent=`Humedad: ${humedad}%`
    const sensacionTermicaInfo=document.createElement('p')
    sensacionTermicaInfo.textContent=`Sensación térmica: ${Math.floor(sensacionTermica-difkelvin)} °C`

    divDatosClima.appendChild(ciudadtitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(sensacionTermicaInfo)
    divDatosClima.appendChild(iconoImg)

}