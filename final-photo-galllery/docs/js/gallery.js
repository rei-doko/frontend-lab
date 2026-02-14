function upDate(previewPic) {
    var image = document.getElementById("image");
    image.style.backgroundImage = `url(${previewPic.src})`;
    image.innerHTML = previewPic.alt;
  
}

function unDo() {
    var image = document.getElementById("image");
    image.style.backgroundImage = `url(${image.src})`;
    image.innerHTML = "Hover over an image below to display here";
}

function addTab() {
    console.log("addTab function called");
    images = document.querySelectorAll(".preview");
    for (let i = 1; i <= images.length; i++) {
        images[i - 1].setAttribute("tabindex", i);
    }
}