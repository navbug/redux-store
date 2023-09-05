console.log("Storage");

localStorage.setItem("name", "Bob");
localStorage.setItem("name", "Bob Larn");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("name", "John");
console.log(sessionStorage.getItem("name"));

document.cookie = "name=Kane; expires=" + new Date(2024, 0, 1).toUTCString();

document.cookie = "lastName=Joe; expires=" + new Date(2024, 0, 1).toUTCString();

console.log(document.cookie);