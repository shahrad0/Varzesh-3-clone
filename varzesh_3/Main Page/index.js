const body = document.getElementById("body")
//slider
const slider = document.querySelectorAll(".hot-news")
const mainContainer = document.getElementsByClassName("main-container")
let container = document.getElementsByClassName("hot-news-container")
let sliderContainerStyle = window.getComputedStyle(container[0])
let sliderContainerWidth = parseInt(sliderContainerStyle.getPropertyValue("width"))
let sliderIndex = 0
for (let i = 1;i<slider.length;i++){
    slider[i].style.transform += "translateX(" + (sliderContainerWidth) + "px)";
    sliderContainerWidth += parseInt(sliderContainerStyle.getPropertyValue("width"))
} 
sliderContainerWidth = parseInt(sliderContainerStyle.getPropertyValue("width"))
const right = document.getElementById("right-button")
right.addEventListener('click',()=>{
    sliderIndex++
    if (sliderIndex >= slider.length){
        sliderIndex = 0;
        for (let i =  slider.length-1; i >= 0 ; i--) {slider[i].style.transform += "translateX(" + (sliderContainerWidth* (slider.length-1)) + "px)"}
        buttonDeselected(mainSliderButton,slider.length-1)
        buttonSelected(mainSliderButton,sliderIndex)
    }
    else{for (let i = 0; i < slider.length; i++) {slider[i].style.transform += "translateX(" + (-sliderContainerWidth) + "px)"}
        buttonDeselected(mainSliderButton,sliderIndex-1)
        buttonSelected(mainSliderButton,sliderIndex)
    }
})
const left = document.getElementById("left-button")
left.addEventListener('click',()=>{
    sliderIndex--
    if (sliderIndex < 0){
        sliderIndex = slider.length-1;
        for (let i =  0; i <= slider.length-1 ; i++) {slider[i].style.transform += "translateX(" + (-sliderContainerWidth*(slider.length-1)) + "px)"}
        buttonDeselected(mainSliderButton,0)
        buttonSelected(mainSliderButton,sliderIndex)
    }
    else{for (let i = 0; i < slider.length; i++) {slider[i].style.transform += "translateX(" + (sliderContainerWidth) + "px)"}
    buttonDeselected(mainSliderButton,sliderIndex+1)
    buttonSelected(mainSliderButton,sliderIndex)
}
})
//end slider
//button
const divSliderButton = document.querySelector(".div-slider-button")
for(let i =0;i <slider.length;i++){divSliderButton.innerHTML+= `<button class="main-slider-button" >${i+1}</button>`;}
const mainSliderButton = document.querySelectorAll(".main-slider-button")
function buttonSelected   (array,index){array[index].style.backgroundColor = "rgb(0, 131, 143)"}
function buttonDeselected (array,index){array[index].style.backgroundColor = "rgb(156, 156, 156)"}
mainSliderButton.forEach((element, index) => {
    element.addEventListener("click",()=>{
        buttonDeselected(mainSliderButton,sliderIndex)
        buttonSelected(mainSliderButton,index)
        if(sliderIndex>index){for (let i = 0; i < slider.length; i++) {slider[i].style.transform += "translateX(" + (sliderContainerWidth*(sliderIndex-index)) + "px)";}}
        else if(sliderIndex<index){for (let i = 0; i < slider.length; i++) {slider[i].style.transform += "translateX(" + (-sliderContainerWidth*(index - sliderIndex)) + "px)";}}
        sliderIndex = index
    })
})
buttonSelected(mainSliderButton,0)


let clicked = false
let mousePosX = 0
let mousePosTrackerX = 0
let distance = 0
let distanceCap = parseInt(sliderContainerWidth)/4

container[0].addEventListener("mouseup",()=>{
    for (let i =  0; i <=  slider.length-1; i++) {slider[i].style.transform += "translateX(" + (-distance) + "px)"}
    clicked = false
    distance = 0
    mousePosX = 0
    mousePosTrackerX = 0
})
container[0].addEventListener("mousedown",()=>{
    clicked = true 
    mousePosX = event.clientX
})
container[0].addEventListener("mousemove",()=>{
    if (clicked) {
        mousePosTrackerX = event.clientX
        distance += mousePosTrackerX-mousePosX
        if (distance < 0 || sliderIndex >=  slider.length){
            if(sliderIndex<=slider.length){
                if (distance >= -distanceCap) for (let i =  0; i <= slider.length-1 ; i++) {slider[i].style.transform += "translateX(" + (mousePosTrackerX-mousePosX) + "px)"}
                else if (sliderIndex<=slider.length-2){
                    for (let i =  0; i <=  slider.length-1; i++) {slider[i].style.transform += "translateX(" + ((-sliderContainerWidth)-distance+(mousePosTrackerX-mousePosX)) + "px)"}
                    distance = 0
                    mousePosX = 0
                    mousePosTrackerX = 0        
                    buttonDeselected(mainSliderButton,sliderIndex)
                    clicked = false
                    sliderIndex+=1
                    buttonSelected(mainSliderButton,sliderIndex)
                }
                else for (let i =  0; i <= slider.length-1 ; i++) {slider[i].style.transform += "translateX(" + (mousePosTrackerX-mousePosX) + "px)"}
            }
        }
        else{
            if(sliderIndex>=0){
                if (distance <= distanceCap)    for (let i =  0; i <= slider.length-1 ; i++) {slider[i].style.transform += "translateX(" + (mousePosTrackerX-mousePosX) + "px)"}
                else if(sliderIndex > 0){
                    for (let i =  0; i <=  slider.length-1; i++) {slider[i].style.transform += "translateX(" + ((+parseInt(sliderContainerWidth))-distance+(mousePosTrackerX-mousePosX)) + "px)"}
                    distance = 0
                    mousePosX = 0
                    mousePosTrackerX = 0        
                    clicked = false
                    buttonDeselected(mainSliderButton,sliderIndex)
                    sliderIndex-=1
                    buttonSelected(mainSliderButton,sliderIndex)
                }
                else  for (let i =  0; i <= slider.length-1 ; i++) {slider[i].style.transform += "translateX(" + (mousePosTrackerX-mousePosX) + "px)"}
            }
        }
        mousePosX = event.clientX
    }
})




//end button 
//slider
const secondarySlider = document.querySelectorAll(".secondary-slide")
let secondaryContainer = document.getElementsByClassName("secondary-slider-container")
let secondarySliderContainerStyle = window.getComputedStyle(secondaryContainer[0])
let secondarySliderContainerWidth = parseInt(secondarySliderContainerStyle.getPropertyValue("width"))
let secondarySliderIndex = 0
for (let i = 1;i<secondarySlider.length;i++){
    secondarySlider[i].style.transform += "translateX(" + (secondarySliderContainerWidth) + "px)";
    secondarySliderContainerWidth += parseInt(secondarySliderContainerStyle.getPropertyValue("width"))
} 
secondarySliderContainerWidth = parseInt(secondarySliderContainerStyle.getPropertyValue("width"))
const secondRightButton = document.getElementById("secondary-slider-right-button")
secondRightButton.addEventListener('click',()=>{
    secondarySliderIndex++
    if (secondarySliderIndex >= secondarySlider.length){
        secondarySliderIndex = 0;
        for (let i =  secondarySlider.length-1; i >= 0 ; i--) {secondarySlider[i].style.transform += "translateX(" + (secondarySliderContainerWidth* (secondarySlider.length-1)) + "px)"}
        buttonDeselected(secondarySliderButton,secondarySlider.length-1)
        buttonSelected(secondarySliderButton,secondarySliderIndex)
    }
    else{for (let i = 0; i < secondarySlider.length; i++) {secondarySlider[i].style.transform += "translateX(" + (-secondarySliderContainerWidth) + "px)"}
        buttonDeselected(secondarySliderButton,secondarySliderIndex-1)
        buttonSelected(secondarySliderButton,secondarySliderIndex)
    }
})
const secondLeftButton = document.getElementById("secondary-slider-left-button")
secondLeftButton.addEventListener('click',()=>{
    secondarySliderIndex--
    if (secondarySliderIndex < 0){
        secondarySliderIndex = secondarySlider.length-1;
        for (let i =  0; i <= secondarySlider.length-1 ; i++) {secondarySlider[i].style.transform += "translateX(" + (-secondarySliderContainerWidth*(secondarySlider.length-1)) + "px)"}
        buttonDeselected(secondarySliderButton,0)
        buttonSelected(secondarySliderButton,secondarySliderIndex)
    }
    else{for (let i = 0; i < secondarySlider.length; i++) {secondarySlider[i].style.transform += "translateX(" + (secondarySliderContainerWidth) + "px)"}
    buttonDeselected(secondarySliderButton,secondarySliderIndex+1)
    buttonSelected(secondarySliderButton,secondarySliderIndex)
}
})
secondaryContainer[0].addEventListener("mouseup",()=>{
    for (let i =  0; i <=  secondarySlider.length-1; i++) {secondarySlider[i].style.transform += "translateX(" + (-distance) + "px)"}
    clicked = false
    distance = 0
    mousePosX = 0
    mousePosTrackerX = 0
})
secondaryContainer[0].addEventListener("mousedown",()=>{
    clicked = true 
    mousePosX = event.clientX
})
secondaryContainer[0].addEventListener("mousemove",()=>{
    if (clicked) {
        mousePosTrackerX = event.clientX
        distance += mousePosTrackerX-mousePosX
        if (distance < 0 || secondarySliderIndex >=  secondarySlider.length){
            if(secondarySliderIndex<=secondarySlider.length){
                if (distance >= -distanceCap) for (let i =  0; i <= secondarySlider.length-1 ; i++) {secondarySlider[i].style.transform += "translateX(" + (mousePosTrackerX-mousePosX) + "px)"}
                else if (secondarySliderIndex<=secondarySlider.length-2){
                    for (let i =  0; i <=  secondarySlider.length-1; i++) {secondarySlider[i].style.transform += "translateX(" + ((-secondarySliderContainerWidth)-distance+(mousePosTrackerX-mousePosX)) + "px)"}
                    distance = 0
                    mousePosX = 0
                    mousePosTrackerX = 0        
                    clicked = false
                    buttonDeselected(secondarySliderButton,secondarySliderIndex)
                    secondarySliderIndex+=1
                    buttonSelected(secondarySliderButton,secondarySliderIndex)
                }
                else for (let i =  0; i <= secondarySlider.length-1 ; i++) {secondarySlider[i].style.transform += "translateX(" + (mousePosTrackerX-mousePosX) + "px)"}
            }
        }
        else{
            if(secondarySliderIndex>=0){
                if (distance <= distanceCap)    for (let i =  0; i <= secondarySlider.length-1 ; i++) {secondarySlider[i].style.transform += "translateX(" + (mousePosTrackerX-mousePosX) + "px)"}
                else if(secondarySliderIndex > 0){
                    for (let i =  0; i <=  secondarySlider.length-1; i++) {secondarySlider[i].style.transform += "translateX(" + ((+parseInt(secondarySliderContainerWidth))-distance+(mousePosTrackerX-mousePosX)) + "px)"}
                    clicked = false
                    distance = 0
                    mousePosX = 0
                    mousePosTrackerX = 0        
                    buttonDeselected(secondarySliderButton,secondarySliderIndex)
                    secondarySliderIndex-=1
                    buttonSelected(secondarySliderButton,secondarySliderIndex)
                }
                else  for (let i =  0; i <= secondarySlider.length-1 ; i++) {secondarySlider[i].style.transform += "translateX(" + (mousePosTrackerX-mousePosX) + "px)"}
            }
        }
        mousePosX = event.clientX
    }
})
//end slider
//button
const secondSliderButton = document.querySelector(".second-slider-button")
for(let i =0;i <secondarySlider.length;i++){secondSliderButton.innerHTML+= `<button class="secondary-slider-button" >${i+1}</button>`;}
const secondarySliderButton = document.querySelectorAll(".secondary-slider-button")
secondarySliderButton.forEach((element, index) => {
    element.addEventListener("click",()=>{
        buttonDeselected(secondarySliderButton,secondarySliderIndex)
        buttonSelected(secondarySliderButton,index)
        if(secondarySliderIndex>index){for (let i = 0; i < secondarySlider.length; i++) {secondarySlider[i].style.transform += "translateX(" + (secondarySliderContainerWidth*(secondarySliderIndex-index)) + "px)";}}
        else if(secondarySliderIndex<index){for (let i = 0; i < secondarySlider.length; i++) {secondarySlider[i].style.transform += "translateX(" + (-secondarySliderContainerWidth*(index - secondarySliderIndex)) + "px)";}}
        secondarySliderIndex = index
    })
})
buttonSelected(mainSliderButton,0)
buttonSelected(secondarySliderButton,0)
//filters
const insideNews = document.querySelectorAll("inside-news")
const outsideNews = document.querySelectorAll("outside-news")
const VideoNews = document.querySelectorAll("video-news")
addEventListener("click",()=>{
    if (document.getElementById("inside").checked){
        insideNews.forEach(element =>{
            element.style.display = "block"
            console.log("block")
        })
    }else{
        insideNews.forEach(element =>{
            element.style.display = "none"
        })
    }
    if (document.getElementById("outside").checked){
        outsideNews.forEach(element =>{
            element.style.display = "block"
        })
    }else{
        outsideNews.forEach(element =>{
            element.style.display = "none"
        })
    }
    if (document.getElementById("video").checked){
        VideoNews.forEach(element =>{
            element.style.display = "block"
        })
    }else{
        VideoNews.forEach(element =>{
            element.style.display = "none"
        })
    }
})
//newspaper

const newsPaperContainer = document.getElementsByClassName("news-paper-container")
const newsPaper = document.querySelectorAll(".news-paper")
let newsPaperIndex = 0
let newsPaperStyle =  window.getComputedStyle(newsPaperContainer[0],null)
let newsPaperWidth = parseInt(newsPaperStyle.getPropertyValue("width"))
console.log(newsPaper)
for (let i = 1;i<newsPaper.length;i++){
    newsPaper[i].style.transform += "translateX(" + (newsPaperWidth) + "px)";
    newsPaperWidth += parseInt(newsPaperStyle.getPropertyValue("width"))
} 
newsPaperWidth = parseInt(newsPaperStyle.getPropertyValue("width"))
document.getElementById("rightbtn-news-paper").addEventListener("click",()=>{
    if (newsPaperIndex >= newsPaper.length-1){
        newsPaperIndex = 0 
        for (let i =  newsPaper.length-1; i >= 0 ; i--) {newsPaper[i].style.transform += "translateX(" + (newsPaperWidth* (newsPaper.length-1)) + "px)"}
    }
    else{
        for (let i = 0;i<newsPaper.length;i++){newsPaper[i].style.transform += "translateX(" + (-newsPaperWidth) + "px)";}
        newsPaperIndex++
    }
})
document.getElementById("leftbtn-news-paper").addEventListener("click",()=>{
    if (newsPaperIndex <= 0){
        newsPaperIndex = newsPaper.length-1 
        for (let i =  0; i <= newsPaper.length-1 ; i++) {newsPaper[i].style.transform += "translateX(" + (-(newsPaperWidth* (newsPaper.length-1))) + "px)"}
    }
    else{
        for (let i = 0;i<newsPaper.length;i++){newsPaper[i].style.transform += "translateX(" + (newsPaperWidth) + "px)";}
        newsPaperIndex--
    }
})







//header
// get browser width
console.log(mainContainer)
let w = window.innerWidth
//  header menu
let headerButton = document.getElementsByClassName("header-button")
let headerMenu = document.getElementsByClassName("header-menu")
let headerMenuShadow = document.getElementsByClassName("header-menu-shadow")
let menuToggle = true
headerButton[0].addEventListener("click",()=>{
    if (menuToggle){
        headerMenu[0].style.transform += "translateX(-300px)"
        headerMenuShadow[0].style.display = "block"
        body.style.overflow = "hidden" 
        menuToggle = false
    }
})
headerMenuShadow[0].addEventListener("click",()=>{
    headerMenuShadow[0].style.display = "none"
    headerMenu[0].style.transform += "translateX(300px)"
    menuToggle = true
    body.style.overflowY = "visible" 
})