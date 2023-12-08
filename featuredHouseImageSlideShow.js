const featuredHouseImage = document.getElementById('featuredHouseImage')

var imageID = setInterval(loopFunction, 5000)
let currentImg = 2
var fadeTime = 300

function loopFunction(){
    if(currentImg === 1){
        imgFade()
        setTimeout(function(){
            featuredHouseImage.style.backgroundImage = 'url("Covington-1.png")'
            imgUnfade()
        }, fadeTime)
        currentImg = 2
        return
    }
    if(currentImg === 2){
        imgFade()
        setTimeout(function(){
            featuredHouseImage.style.backgroundImage = 'url("Covington-2.png")'
            imgUnfade()
        }, fadeTime)
        currentImg = 3
        return
    }
    if(currentImg === 3){
        imgFade()
        setTimeout(function(){
            featuredHouseImage.style.backgroundImage = 'url("Covington-3.png")'
            imgUnfade()
        }, fadeTime)
        currentImg = 4
        return
    }
    if(currentImg === 4){
        imgFade()
        setTimeout(function(){
            featuredHouseImage.style.backgroundImage = 'url("Covington-4.png")'
            imgUnfade()
        }, fadeTime)
        currentImg = 1
        return
    }
}

function imgFade(){
    featuredHouseImage.style.transition = 'opacity 0.3s ease'
    featuredHouseImage.style.opacity = 0;
}

function imgUnfade(){
    featuredHouseImage.style.transition = 'opacity 0.3s ease'
    featuredHouseImage.style.opacity = 10;
}