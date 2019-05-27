//轮播index
var chongzhi = 0;

// 充值右边
$('#chongzhi-r').click(function () {
    chongzhi++;
    if (chongzhi < 0) { chongzhi = 0 }
    if (chongzhi == $('.chongzhi-list-box li').length / 2 + 1) {
        $('.chongzhi-list-box ul').css('left', 0)
        chongzhi = 1
    }
    $('.chongzhi-list-box ul').stop().animate({
        'left': -(chongzhi * 223) + 'px'
    })
})
// 充值左边
$('#chongzhi-l').click(function () {
    chongzhi--;
    if (chongzhi < 0) { $('.chongzhi-list-box ul').css('left', -$('.chongzhi-list-box ul').width() / 2 + 'px'); chongzhi = $('.chongzhi-list-box li').length / 2 - 1; }
    $('.chongzhi-list-box ul').stop().animate({
        'left': -(chongzhi * 223) + 'px'
    })
})
// 定时器
var chongzhi_timer = setInterval(chongzhi_time, 1500)
// 定时器函数
function chongzhi_time() {
    chongzhi++;
    if (chongzhi < 0) { chongzhi = 0 }
    if (chongzhi == $('.chongzhi-list-box li').length / 2 + 1) {
        $('.chongzhi-list-box ul').css('left', 0)
        chongzhi = 1
    }
    $('.chongzhi-list-box ul').stop().animate({
        'left': -(chongzhi * 223) + 'px'
    })
}
// 清除定时器
$('.chongzhi-list').mouseenter(function () {
    clearInterval(chongzhi_timer)
})
$('.chongzhi-list').mouseleave(function () {
    // 定时器
    chongzhi_timer = setInterval(chongzhi_time, 1500)
})