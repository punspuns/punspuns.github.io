function beni() {
    $("#beni").one("click", handler1);
}

function handler1() {
    $("#green, #red, #yellow, #blue, #pink, #purple, #white, #black").fadeOut(400);
    $(".links__icon").animate({
        width: "260px"
    }, 1500);
    $(this).one("click", handler2);
}

function handler2() {
    
    $(".links__icon").animate({
        width: "30px"
    }, 1500);
    $("#green, #red, #yellow, #blue, #pink, #purple, #white, #black").fadeIn(400);
    $(this).one("click", handler1);
}