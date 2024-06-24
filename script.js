document.addEventListener("DOMContentLoaded", function() {
    var loginModal = document.getElementById("loginModal");
    var signupModal = document.getElementById("signupModal");

    var loginBtn = document.getElementById("loginBtn");
    var signupBtn = document.getElementById("signupBtn");

    var closeLogin = document.getElementById("closeLogin");
    var closeSignup = document.getElementById("closeSignup");

    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    signupBtn.onclick = function() {
        signupModal.style.display = "block";
    }

    closeLogin.onclick = function() {
        loginModal.style.display = "none";
    }

    closeSignup.onclick = function() {
        signupModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
    }
});
