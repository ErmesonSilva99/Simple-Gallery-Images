let $ = document.querySelector.bind(document);
let createEl = document.createElement.bind(document);
let log = console.log.bind(console);

const source = "assets/images/";
const limit = 5;
const images = [];
let currentImg = 0;

window.onload = function () {
    showMain();
    addImages(limit);
    addImageView();
    addImageOtions(limit);
}

function addImages (limit) {
    for(let i = 1; i <= limit; i++) {
        images.push(`${source}imagem${i}.jpg`);
    }
    log(images);
}

function addImageView() {
    let imageView = $(".imageView");

    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", images[currentImg]);
    imageView.appendChild(imgTag);
}

function addImageOtions(limit) {
    let imageOptions = $(".imageOptions");

    for(let i = 0; i < limit; i++) {
        let div = createEl("div");
        div.setAttribute("class", "imageOptions_div");
        let imgOption = createEl("img");
        imgOption.setAttribute("src", images[i]);
        imgOption.addEventListener('click', () => {
            currentImg = i;
            $(".imageView>img").setAttribute("src", images[currentImg]);
        });
        imageOptions.appendChild(div).appendChild(imgOption);

    }
}

function showMain() {
    $(".main").style.opacity = "1";
    $(".main").style.transform = "scale(1)";
}





