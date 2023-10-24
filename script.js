"use strict"
const enter = document.getElementById("enter")
let sendInput = document.getElementById("sendInput")
const chatContainer = document.getElementById("chatContainer");

// random hero
let heroes = ["Batman", "Superman", "Bane", "Iron Man", "Captain America", "Black Panther", "Hulk", "Black Widow"];
let randomHero = Math.floor(Math.random() * heroes.length)
let yourHero = heroes[randomHero];

// NEW SCALEDRONE

const drone = new Scaledrone("DhmXxxweBoV9qtwv");
const room = drone.subscribe('observable-Batcave');


// ENTERING THE ROOM 

room.on('open', error => {




    if (error) {
        return console.error(error);
    }
    else {

        console.log("You've entered the matrix")


    }

});

let setName = localStorage.setItem("Name", `${yourHero}`)

//INSERTED MESSAGE IN THE CHAT -----------------------------
function send() {



    let me = localStorage.getItem("Name");
    let userInfo = {

        name: me,
        Text: sendInput.value


    }


    drone.publish({

        room: 'observable-Batcave',
        message: userInfo

    })

    sendInput.value = " ";


}




room.on('message', message => {

    function posalji() {


        const rezultat1 = `
    
        <div class="message"> ${message.data.name}: ${message.data.Text}</div>
        
        `;

        chatContainer.insertAdjacentHTML("beforeend", rezultat1);

    }

    if (sendInput.value == "") {



        alert("Fucking write something!")



    }

    else {


        posalji()

    }




});
