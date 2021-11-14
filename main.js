
let icon = document.getElementById('icon');
let logo = document.getElementById('logo');
icon.onclick = function() {
    document.body.classList.toggle('dark-them');
    if (document.body.classList.contains('dark-them')) {
        icon.src = "/imgs/sun.png";
        icon.title = "Light Mood"
    }else {
        icon.src = "/imgs/moon0.png";
        
    }
    if (document.body.classList.contains('dark-them')) {
        logo.src = "/imgs/website 0.png";
    }else {
        logo.src = "/imgs/website.png";
    }
}
