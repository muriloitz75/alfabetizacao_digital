document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    alert(`Bem-vindo, ${email}!`);
});
