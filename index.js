function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://source.unsplash.com/250x250/?cat";
    div.appendChild(image);
}