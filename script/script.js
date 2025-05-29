

document.addEventListener("DOMContentLoaded", function(e){
    rightMenuSlide();
})


const rightMenuSlide =() => {
    $('header .menu_wh').click(function(){
        $('.sub_menu').addClass('on')
        $('.sub_menu_dim').addClass('on')
    })

    $('.sub_menu_dim').click(function(){
        $('.sub_menu').removeClass('on')
        $('.sub_menu_dim').removeClass('on')
    })

    $('.menu_close').click(function(){
        $('.sub_menu').removeClass('on')
        $('.sub_menu_dim').removeClass('on')
    })
}

// 윈도우가 리사이즈 될때 반응형 !
$(window).resize(function() {
	if($(window).width() < 900) {
	    // window 크기가 900보다 작을때
	} else {
	    // window 크기가 900보다 클때
        $('.sub_menu').removeClass('on')
        $('.sub_menu_dim').removeClass('on')
	}
})