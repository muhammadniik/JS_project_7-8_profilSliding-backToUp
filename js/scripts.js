const btnBack = document.querySelector('#btnBack');
window.addEventListener('scroll', function() {

    if (this.document.documentElement.scrollTop > 250) {
        btnBack.classList.add('active');
    } else {
        btnBack.classList.remove('active');
    }
})

const btninfoo = document.querySelector('.btninfo');
const info = document.querySelector('.informatins');
let i = true;
btninfoo.addEventListener('click', function() {
    info.classList.toggle("active");

    if (i == true) {

        document.getElementById("btninfoimg1").style.display = "none";
        document.getElementById("btninfoimg2").style.display = "flex";
        i = false;

    } else {
        document.getElementById("btninfoimg2").style.display = "none";
        document.getElementById("btninfoimg1").style.display = "flex";
        i = true;
    }
})