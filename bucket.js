//#1
const bucket1 = document.createElement("p")
bucket1.innerText = "Gå på Chopin tävling";
const subject = document.querySelector(".list");
subject.appendChild(bucket1)

//#2
const bucket2 = document.createElement("p");
bucket2.innerText = "Stabil ekonomi";
subject.insertAdjacentElement("beforeend", bucket2)

//#3
const innerhtmltest = subject.innerHTML;
console.log(innerhtmltest)

//#4
// const currentHTML = subject.innerHTML; //för att få en variabel med nuvarande HTML för koden på rad 19 replacear alla child elements i .list
// const newHTML = currentHTML + "<p>Mål med innerHTML</p>"; //kallas concatenate
// subject.innerHTML = newHTML; // stod innan "<p>Mål med innerHTML</p>"

//#5 
//Koden försvann när jag gjorde subject.innerHTML = "<p>Mål med innerHTML</p>". Detta sker eftersom innerHTML överskriver alla child element alltså p-tagsen. 
//Detta är faran med att skapa element i innerHTML, däremot genom skapa en temp variabel så kan man kvarbehålla genom en ekvation. tempvariablen är nu currentHTML.

//#6 oj fastna länge på 4:an för skriva bort det
subject.insertAdjacentHTML("beforeend", "<p>Mål med insertAdjacentHTML</p>")

//#7
const goals = ["mål1", "mål2", "mål3"]

for (const goal of goals) {
    const newElement = document.createElement("p");
    newElement.innerText = goal;
    subject.insertAdjacentElement("beforeend", newElement);
}

//#8 
console.log(subject); //childElementCount: 7

//#9 
const newOwner = document.querySelector(".owner");
newOwner.innerText = "Filip's";

//#10 
const oldlistitem = document.querySelector("p");
const newlistitem = document.createElement("p");
newlistitem.innerText = "ännu ett mål fast 10 uppgiften";
subject.replaceChild(newlistitem, oldlistitem)

//#11 
bucket2.innerText = "nytt mål istället för stabil ekonomi"

//#12
const lastEl = subject.lastElementChild;
subject.removeChild(lastEl); 