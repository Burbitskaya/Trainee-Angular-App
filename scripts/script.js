const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.querySelectorAll(".car");
const carsContent = document.getElementById("cars-content");
const carField=document.getElementById("car");
const nameField=document.getElementById("name");
const phoneField=document.getElementById("phone");
const orderButton = document.getElementById("order-action");

filterItems.forEach(item =>{
    
    item.onclick = () => {
        filterItems.forEach((el) => el.classList.remove('active'));
        item.classList.add('active');

        const filterText=item.textContent.toLowerCase();

        carItems.forEach(car =>{
            if (filterText === "все марки" || car.querySelector("h4").textContent.toLowerCase().includes(filterText)){
                car.style.display="flex";
            } else {
                car.style.display="none";
            }
        })

        carsContent.scrollIntoView({behavior: "instant"});
       
    };

})

    orderButton.addEventListener("click", function () {
        const fields = [
            carField,
            nameField,
            phoneField
        ];

        let hasError = false;
        fields.forEach((field) => {
           if (field === phoneField) {
            if (field.value.trim().length < 10) {
                field.style.borderColor = "red";
                hasError = true;
            } else {
                field.style.borderColor = "white";
            }
        } else {
            if (!field.value.trim()) {
                field.style.borderColor = "red";
                hasError = true;
            } else {
                field.style.borderColor = "white";
            }
        }
        });

        if (!hasError) {
            alert("Спасибо за заявку! Мы скоро свяжемся с вами");

            fields.forEach(field => {
                field.value = "";
            });
        }
    });