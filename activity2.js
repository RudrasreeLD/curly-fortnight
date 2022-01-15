function getScore()
{
rudu = localStorage.getItem("Journaling");
document.getElementById("output").innerHTML = "<h1>Score = " + rudu +" </h1>";
}

function back()
{
    window.location = "activity_1.html";
}