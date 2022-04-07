window.onload = displayImage;

var imagesArray = [
    "anime1.jpg", 
    "anime2.jpg", 
    "anime3.png", 
    "anime4.png", 
    "anime5.png", 
    "anime6.jpg", 
    "anime7.png", 
    "anime8.jpg", 
    "anime9.gif",
    "anime10.jpg",
    "anime11.jpg",
    "anime12.jpg",
    "anime13.jpg",
    "anime14.jpg",
    "anime15.jpg",
    "anime16.gif",
    "anime17.jpg"
];

function displayImage(){
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/img/animes/" + imagesArray[num];
}
