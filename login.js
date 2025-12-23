let users = [{
    userName: "jana",
    password: "123",
    firstName: "jana",
    lastName: "mahmoud",
    color: "#8e51b2ff",
    age: 19
}, {
    userName: "samia",
    password: "321",
    firstName: "samia",
    lastName: "ahmed",
    color: "#2955a6ff",
    age: 20
}];

localStorage.setItem("localUsers", JSON.stringify(users));

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let localUsers = JSON.parse(localStorage.getItem("localUsers"));

    if (!localUsers) {
        document.getElementById("error-message").style.display = "block";
        document.getElementById("error-message").innerText = "لا توجد مستخدمين مسجلين";
        return;
    }

    for (let i = 0; i < localUsers.length; i++) {
        if (username == localUsers[i].userName && password == localUsers[i].password.toString()) {
            localStorage.setItem("currentUser", JSON.stringify(localUsers[i]));
            window.location.href = "index.html";
            return;
        }
    }

    document.getElementById("error-message").style.display = "block";
    document.getElementById("error-message").innerText = "اسم المستخدم أو كلمة المرور غير صحيحة";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("password").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            login();
        }
    });
});