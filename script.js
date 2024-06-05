window.onload = function() {
    alert("Bem-vindo ao BlueGuard!");
    document.body.style.opacity = "1";
}
document.getElementById('loginImage').addEventListener('click', function() {
        document.getElementById('login').style.display = 'block';
    });

document.getElementById('loginButton').addEventListener('click', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
    }
});

var menuItems = document.querySelectorAll('.cabecalho-menu-item');
        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener('click', function(event) {
                event.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });