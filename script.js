function LOGIN() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error");

    //contoh username dan password statis
    const validUsername = "admin";
    const validPassword = "123456";

    if(username === validUsername && password === validPassword) {
        //simpan status login
        console.log("Login berhasil");
        localStorage.setItem("isLoggedIn", "true");

        //arahkan ke halaman dashboard
        window.location.href = "dashboard.html";
    } else { 
        console.log("Login gagal");
        errorMsg.textContent = "username atau password salah!";
    }
}
