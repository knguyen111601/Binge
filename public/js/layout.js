
let option = 0

$(".user").on("click", ()=>{
    if (option == 0){
    $(".optionsBox").css("display", "block")
    option = 1
    } else {
        $(".optionsBox").css("display", "none")
        option = 0
    }
})



