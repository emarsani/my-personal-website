

const button = document.getElementById("button");

function myFunction() {
    const contactDetails = document.getElementById("contact-details");
    contactDetails.style.textAlign = "center";
    contactDetails.style.color = "#191825"
    contactDetails.style.fontSize = "14px";
    contactDetails.innerHTML = "<h1>Open hours:</h1><h2>999-999-9999</h2></h2><h3>Monday from 9am - 5pm</h3><h3>Tuesday from 9am - 5pm</h3><h3>Wednesday from 9am - 5pm</h3><h3>Thursday from 9am - 5pm</h3><h3>Friday from 9am - 4pm</h3>";
}

button.addEventListener("click", myFunction);
