// گرفتن دکمه و بخش سابقه کاری
const addBtn = document.getElementById("addExperience");
const workContainer = document.getElementById("workExperience");

// وقتی دکمه + کلیک شد
addBtn.addEventListener("click", () => {
    // ساخت یک کارت جدید
    let workDiv = document.createElement("div");
    workDiv.classList.add("experience");

    // محتویات کارت
    workDiv.innerHTML = `
        <label>نام شرکت:</label>
        <input type="text" placeholder="مثال: صدرا">

        <label>سمت:</label>
        <input type="text" placeholder="مثال: مهندس نرم‌افزار">

        <label>مدت همکاری:</label>
        <input type="text" placeholder="مثال: 2 سال">

        <label>توضیحات:</label>
        <textarea placeholder="وظایف و مسئولیت‌ها"></textarea>
    `;

    // اضافه کردن کارت با انیمیشن
    workDiv.style.opacity = 0;
    workContainer.appendChild(workDiv);

    // انیمیشن محو شدن به حالت طبیعی
    setTimeout(() => {
        workDiv.style.transition = "opacity 0.5s";
        workDiv.style.opacity = 1;
    }, 50);
});
console.log("JavaScript Loaded Successfully!");

document.addEventListener("DOMContentLoaded", () => {
    alert("صفحه با موفقیت بارگذاری شد!");
});
