var choices = [];
var servicesCount = 0;

var time;
function changeTime(e){
    if (time!= null){
        time.classList.remove('select');
    }
    console.log(e.innerHTML)
    e.classList.add('select')
    time=e;
}

function getDetails(){
    var service;
    radioButtons = document.querySelectorAll('input[name="service"]');
    for (const radioButton of radioButtons){
        if(radioButton.checked){
            var serviceId = radioButton.id
            service = document.querySelector(`label[for="${serviceId}"]`).textContent;
            break;
        }
    }

    var expert = document.getElementById("specialists").value;
    var date = document.getElementById("date").value
    service = service + " | " + expert + " | " + date + " | " + time.innerHTML
    choices.push(service)
}

function addService(){
    var mainChoices = document.getElementById("servicesChosen")
    getDetails()
    const elem  = document.createElement("div")
    elem.setAttribute("id", servicesCount)
    var service = document.createElement("p")
    service.innerHTML = choices[servicesCount]
    elem.appendChild(service)
    mainChoices.appendChild(elem)   
    servicesCount += 1 
}

function confirm(){
    var body = document.getElementById("main-content")
    if (choices.length === 0){
        getDetails()
    }
    const customername = document.getElementById("first-name").value + " " + document.getElementById("last-name").value
    const customermail  = document.getElementById("mail")
    const paragraph = document.createElement("div")
    const congrats = document.createElement("p")
    congrats.innerHTML = `Réservation confirmée, ${customername}!`
    paragraph.appendChild(congrats)
    for (const choice of choices){
        const elements = choice.split(" | ")
        const sentence = document.createElement("p")
        sentence.innerHTML = `Votre rendez-vous pour le ${elements[0]}, le ${elements[2]} à ${elements[3]} avec ${elements[1]} a été confirmé !\n`
        paragraph.appendChild(sentence)
    }
    const verification = document.createElement("p")
    verification.innerHTML = `Vous recevrez un mail de confirmation à ${mail}`
    paragraph.appendChild(verification)
    paragraph.appendChild(document.createElement("br"))
    const link = document.createElement("a")
    link.setAttribute("href","index.html")
    link.innerHTML = "Retournez à la page d'acceuil de Détente Spa"
    paragraph.appendChild(link)
    body.innerHTML = ""
    body.appendChild(paragraph)
}

function reserver(){
    location.href = "reservation.html";
}
