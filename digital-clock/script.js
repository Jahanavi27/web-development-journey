function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if(hours === 0){
        hours = 12;
    }

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    document.getElementById("clock").textContent =
    `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("date").textContent =
    now.toDateString();
}

updateClock();

setInterval(updateClock,1000);