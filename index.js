const idioma = document.querySelector(".idioma")
const spanish = document.querySelector(".spanish")
const spanishB = document.querySelector(".spanishB")
const english = document.querySelector(".english")
const descripcionTitle = document.querySelector(".descripcion h1")
const descripcion = document.querySelector(".descripcion p")
const edad = document.querySelector(".edad h3")
const diaNoche = document.querySelector(".diaNoche div input")
const bodyBackground = document.querySelector("body")
const proyectos = document.querySelector(".proyectoss")
const ingles = document.querySelector(".nivelIngles h3")
const grados = document.querySelector(".temperatura .datos div h2")



const APIkey = "1af85e2a3dff54f33971ada62d308710"
fetch(`http://api.weatherstack.com/current?access_key=${APIkey}&query=Rosario`)
    .then(el => el.json())
    .then(res => console.log(
        grados.innerHTML = `${res.current.temperature}º`
    ))

grados.innerHTML
idioma.addEventListener("click", () => {
    spanishB.classList.toggle("text-black")
    english.classList.toggle("text-black")
    descripcion.classList.toggle("languageChange")

    descripcionTitle.innerHTML === "Hello my name is Orlando" ? descripcionTitle.innerHTML = "Hola soy Orlando" : descripcionTitle.innerHTML = "Hello my name is Orlando"

    spanish.innerHTML === "ES" ? spanish.innerHTML = "EN" : spanish.innerHTML = "ES"

    if (descripcion.className === "fs-3 ms-3 present languageChange") {
        descripcion.innerHTML = "I am a frontend developer with experience in React. I'm good at CSS and HTML, as well as JavaScript. I love learning new things and experimenting with new technologies. I have a good eye for details and always put my all into my work."
    } else {
        descripcion.innerHTML = "Soy desarrollador frontend con experiencia en React. Soy bueno en CSS y HTML, así como en JavaScript. Me encanta aprender cosas nuevas y experimentar con nuevas tecnologías. Tengo buen ojo para los detalles y siempre pongo todo de mi en mi trabajo."
    }

    edad.innerHTML === "Años" ? edad.innerHTML = "Years Old" : edad.innerHTML = "Años"
    proyectos.innerHTML === "Proyectos" ? proyectos.innerHTML = "Projects" : proyectos.innerHTML = "Proyectos"
    ingles.innerHTML === "Nivel de ingles" ? ingles.innerHTML = "English level" : ingles = "Nivel de ingles"

}
)



diaNoche.addEventListener("click", () => {

    bodyBackground.classList.toggle("dia")
}
)

