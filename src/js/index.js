const idioma = document.querySelector(".idioma");
const spanish = document.querySelector(".spanish");
const spanishB = document.querySelector(".spanishB");
const english = document.querySelector(".english");
const descripcionTitle = document.querySelector(".descripcion h1");
const descripcion = document.querySelector(".descripcion p");
const edad = document.querySelector(".edad h3");
const diaNoche = document.querySelector(".diaNoche div input");
const bodyBackground = document.querySelector("body");
const proyectos = document.querySelector(".proyectoss");
const ingles = document.querySelector(".nivelIngles h3");
const grados = document.querySelector(".temperatura .datos div h2");
const hora = document.querySelector(".hora");
const tempImg = document.querySelector(".imgTemp");
const solLuna = document.querySelector(".sunMoon");
const nube = document.querySelector(".sunMoon i");
const temp = document.querySelector(".temp");
const certificacion = document.querySelector(".certificacion h2");
const reproductor = document.querySelector(".reproductor")
const songName = document.querySelector(".songName")


const APIkey = "39d19eac955bc798e83d7f0bc5496d55";
const lat = "-32.9595004";
const long = "-60.6615415";

fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`
    )
    .then((el) => el.json())
    .then((res) => {
        const today = new Date();
        let hour = today.getHours();
        let minutes = today.getMinutes();
        const weather = res.weather[0].main;
        let amPm;
        const night = ["19", "20", "21", "22", "23", "24", "00", "01", "02", "03", "04", "05", "06"];

        hour >= 12 ? (amPm = "PM") : (amPm = "AM");

        if (minutes < 10) {
            minutes = `0${today.getMinutes()}`;
        }

        if (hour < 10) {
            hour = `0${today.getHours()}`;
        }

        grados.innerHTML = `${(res.main.temp - 273.15).toFixed(0)}°`;

        hora.innerHTML = `${hour}:${minutes} ${amPm}`;

        const isNight = night.find((el) => el == hour);

        if (isNight != undefined) {
            solLuna.classList.toggle("luna");
            nube.classList.toggle("disabled");
            temp.classList.toggle("temperaturaNight");
            temp.classList.toggle("temperatura");
        }

        switch (weather) {
            case "Clear":
                isNight
                    ?
                    tempImg.innerHTML = `<i class="bi bi-moon-stars grados"></i>` :
                    tempImg.innerHTML = `<i class="bi bi-brightness-high grados"></i>`;
                break;
            case "Rain":
                tempImg.innerHTML = `<i class="bi bi-cloud-drizzle grados"></i>`;
                break;
            case "Clouds":
                isNight
                    ?
                    tempImg.innerHTML = `<i class="bi bi-cloud-moon grados"></i>` :
                    tempImg.innerHTML = `<i class="bi bi-cloud-sun grados"></i>`;
                break;
            case "Thunderstorm":
                tempImg.innerHTML = `<i class="bi bi-cloud-lightning grados"></i>`;
                break;
            case "Snow":
                tempImg.innerHTML = `<i class="bi bi-snow grados"></i>`;
            default:
                tempImg.innerHTML = `<i class="bi bi-cloud-haze2 grados"></i>`;
                break;
        }
    });

idioma.addEventListener("click", () => {
    spanishB.classList.toggle("text-black");
    english.classList.toggle("text-black");
    descripcion.classList.toggle("languageChange");

    descripcionTitle.innerHTML === "Hello my name is Santiago" ?
        (descripcionTitle.innerHTML = "Hola soy Santiago") :
        (descripcionTitle.innerHTML = "Hello my name is Santiago");

    spanish.innerHTML === "ES" ?
        (spanish.innerHTML = "EN") :
        (spanish.innerHTML = "ES");

    if (descripcion.className === "fs-3 ms-3 present languageChange") {
        descripcion.innerHTML =
            "I am a frontend developer with experience in React. I'm good at CSS and HTML, as well as JavaScript. I love learning new things and experimenting with new technologies. I have a good eye for details and always put my all into my work.";
    } else {
        descripcion.innerHTML =
            "Soy desarrollador frontend con experiencia en React. Soy bueno en CSS y HTML, así como en JavaScript. Me encanta aprender cosas nuevas y experimentar con nuevas tecnologías. Tengo buen ojo para los detalles y siempre pongo todo de mi en mi trabajo.";
    }

    console.log(certificacion);
    certificacion.innerHTML === "Desarrollador Front-End" ?
        (certificacion.innerHTML = "Front-End Developer") :
        (certificacion.innerHTML = "Desarrollador Front-End");

    edad.innerHTML === "Años" ?
        (edad.innerHTML = "Years Old") :
        (edad.innerHTML = "Años");
    proyectos.innerHTML === "Proyectos" ?
        (proyectos.innerHTML = "Projects") :
        (proyectos.innerHTML = "Proyectos");
    ingles.innerHTML === "Nivel de ingles" ?
        (ingles.innerHTML = "English level") :
        (ingles.innerHTML = "Nivel de ingles");
});

diaNoche.addEventListener("click", () => {
    if (bodyBackground.className === "darkMode") {
        bodyBackground.className = "lightMode";
    } else {
        bodyBackground.className = "darkMode";
    }
});

