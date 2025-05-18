const contents={
     home : document.getElementById("home"),
     prime_check : document.getElementById("prime_check"),
     prime_create : document.getElementById("prime_create"),
     prime_code : document.getElementById("prime_code"),
};
function open(content){
     document.getElementsByClassName("open").classList.add("close");
     document.getElementsByClassName("open").classList.remove("open");
     content.classList.add("open");
     content.classList.remove("close");
}