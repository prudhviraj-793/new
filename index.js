const nam = document.getElementById("name").value;
const mail = document.getElementById("mail").value;
const btn = document.getElementById("sub");
btn.addEventListener("submit",function(){
    localStorage.setItem(string(nam),string(mail));
})