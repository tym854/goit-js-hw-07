const form = document.querySelector(".login-form");

form.addEventListener("submit", handler);

function handler(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() === "" || password.trim() === "") {
        console.log("All form fields must be filled in");
        return;
    }

    let persInfo = {
        Email: `${email.trim()}`,
        Password: `${password.trim()}`
    };
    console.log(persInfo);
    form.reset();
}
