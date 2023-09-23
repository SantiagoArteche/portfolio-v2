const chatBotContainer = document.querySelector(".chatbotContainer")
const chatBot = document.querySelector(".chatBot")
const goOutChatBot = document.querySelector(".fa-circle-xmark")
const form = document.querySelector("#chatForm")
const messageSend = document.querySelector("#chatForm #textArea")
const sendButton = document.querySelector("#chatForm button")
const chatBox = document.querySelector(".chatBox")

chatBotContainer.addEventListener("click", () => {
    chatBot.classList.remove("disabled")
})

goOutChatBot.addEventListener("click", () => {
    chatBot.classList.add("disabled")
    chatBox.innerHTML = `<li class="text-light chatMes"><p class="my-2 bg-success p-3 fs-5 rounded-4 text-light">Hola, soy el clon de Santiago, que te gustaria saber? </p></li>`
})

let userMessage

fetch("../../recentlyTracks.json")
.then((el) => el.json())
.then((data) => {
    const API_KEY = data[0].apikey

    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li")
        chatLi.classList.add("chat", className)
        let chatContent = className === "sendMes" ? `<p class="m-0 my-2 bg-primary p-3 fs-5 rounded-4 text-light">${message}</p>`: `<p class="my-2 bg-success p-3 fs-5 rounded-4 text-light">${message}</p>`
        chatLi.innerHTML = chatContent
        return chatLi
        
    }
    
    const generateResponse = (chatMesLi) => {
        const API_URL = "https://api.openai.com/v1/chat/completions"
    
        const messageElement = chatMesLi.querySelector("p")
    
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
        messages: [ { role: "user", content: userMessage} ]
            })
    
        }
        fetch(API_URL, requestOptions)
        .then(res => res.json())
        .then(data => { 
            messageElement.textContent = data.choices[0].message.content
            console.log(data.choices[0].message.content);
        })
        .catch((error) => {
            messageElement.textContent = "Algo salio mal, intenta de nuevo"
        })
    }
    
    const handleChat = () => {
        userMessage = messageSend.value.trim()
        
        if(!userMessage) return
    
        chatBox.appendChild(createChatLi(userMessage, "sendMes"))
    
        setTimeout(() => {
            const chatMesLi = createChatLi("Thinking...", "chatMes")
            chatBox.appendChild(chatMesLi)
            generateResponse(chatMesLi)
        }, 600)
    }
    
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        handleChat()
        e.target.reset()
    })
   
})




