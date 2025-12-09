let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("account").value;
    document.getElementById("logst").innerHTML = "logged in as " + username
    document.getElementById("logstatus").innerHTML = "  "
}