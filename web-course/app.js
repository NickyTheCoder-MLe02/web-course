let title = document.querySelector("#main-title");

console.log(title);
console.log(title.textContent);

let form = document.querySelector("#house-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let bedrooms = document.querySelector("#bedrooms").value;

    if (bedrooms === "" || Number(bedrooms) <= 0) {
        let error = document.createElement("p");
        error.textContent = "Cốc cốc, mở cửa cho anh đê, để cho anh cưa nhá";
        error.style.color = "red";
        form.appendChild(error);
    } else {
        console.log("Form is valid - ready to send.");
    }
});