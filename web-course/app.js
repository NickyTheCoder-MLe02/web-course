let title = document.querySelector("#main-title");

console.log(title);
console.log(title.textContent);

let form = document.querySelector("#house-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Dừng hành động tải lại trang mặc định

    let bedrooms = document.querySelector("#bedrooms").value;

    // Kiểm tra nếu dữ liệu trống hoặc giá trị <= 0
    if (bedrooms === "" || Number(bedrooms) <= 0) {
        let error = document.createElement("p"); // Tạo một thẻ <p> mới
        error.textContent = "Bedrooms must be a positive number.";
        error.style.color = "red";
        form.appendChild(error); // Gắn thông báo lỗi này vào form
    } else {
        console.log("Form is valid - ready to send.");
    }
});