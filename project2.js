
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".menu-card");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        cards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            }
            else if (card.classList.contains(filter)) {

                card.style.display = "block";

            }
            else {

                card.style.display = "none";

            }

        });

    });

});



// Reservation Form Validation

const form = document.getElementById("reservation-form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const guests = document.getElementById("guests").value;

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;

    const request = document.getElementById("request").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern = /^[0-9]{10}$/;

    if(name === ""){

        alert("Please enter your full name.");

        return;

    }

    if(!emailPattern.test(email)){

        alert("Please enter a valid email address.");

        return;

    }

    if(!phonePattern.test(phone)){

        alert("Please enter a valid 10-digit phone number.");

        return;

    }

    if(guests === "" || guests <= 0){

        alert("Please enter the number of guests.");

        return;

    }

    if(date === ""){

        alert("Please select a reservation date.");

        return;

    }

    if(time === ""){

        alert("Please select a reservation time.");

        return;

    }

    alert("🎉 Reservation Successful!");

    form.reset();

});