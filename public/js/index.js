let currentImgIndex = 0
let highestImgIndex = $(".carousel").children().length-1

$(".buttonNext").on("click", ()=>{
    const $currentImg = $(".carousel").children().eq(currentImgIndex)
    $currentImg.css("display", "none")
    if (currentImgIndex < highestImgIndex) {
    currentImgIndex++
    } else {
        currentImgIndex = 0
    }
    const $nextImg = $(".carousel").children().eq(currentImgIndex)
    $nextImg.css("display", "block")
}) 

$(".buttonBack").on("click", ()=>{
    const $currentImg = $(".carousel").children().eq(currentImgIndex)
    $currentImg.css("display", "none")
    if (currentImgIndex == 0) {
        currentImgIndex = highestImgIndex
    } else {
        currentImgIndex--
    }
    const $nextImg = $(".carousel").children().eq(currentImgIndex)
    $nextImg.css("display", "block")
})