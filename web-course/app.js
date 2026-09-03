// let title = document.querySelector("#main-title");

// console.log(title);
// console.log(title.textContent);

// let form = document.querySelector("#house-form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let bedrooms = document.querySelector("#bedrooms").value;

//     let existingError = form.querySelector(".error-message");
//     if (existingError) {
//         existingError.remove();
//     }

//     if (bedrooms === "" || Number(bedrooms) <= 0) {
//         let error = document.createElement("p");
//         error.textContent = "Cốc cốc, mở cửa cho anh đê, để cho anh cưa nhá";
//         error.style.color = "red";
//         error.className = "error-message";
//         form.appendChild(error);
//     } else {
//         console.log("Form is valid - ready to send.");
//     }
// });

// function fakeRequest() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("ok nhe");
//         }, 2000);
//     });
// }

// console.log("Start");

// fakeRequest()
//     .catch(function(data) {
//         console.log(data);
//     });

// console.log("End");

// async function getData(){
//     try {
//         const data = await fakeRequest();
//         console.log(data);
//     } catch (error) {
//         console.error("loi roi nhe: ", error);
//     }
// }
// getData();


async function loadUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response);
        const users = await response.json();
        // console.log(users);
        const tbody = document.querySelector("#user-table tbody");
        users.forEach(function(user){
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            tbody.appendChild(row);
        })

    } catch (error) {
        console.error("Loi rui: " + error);
    }
}
loadUsers();
