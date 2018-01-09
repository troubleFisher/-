// $(p1).on('click',function () {
//     $('.images').css({
//         'transform':'translateX(0)'
//     })
// });
//
// $(p2).on('click',function () {
//     $('.images').css({
//         'transform':'translateX(-201px)'
//     })
// });
// $('#p3').on('click',function () {
//     $('.images').css({
//         'transform':'translateX(-402px)'
//     })
// });
// $('#p4').on('click',function () {
//     $('.images').css({
//         'transform':'translateX(-603px)'
//     })
// });

//按钮被点击，图片位置的改变
var allButtons = $('#buttons > span');
for(var i = 0;i < allButtons.length;i++){
    $(allButtons[i]).on('click',function (x) {
        var index = $(x.currentTarget).index();
        var n = index * (-201);
        $('#images').css({
            'transform':'translatex('+ n +'px)'
        })
        t = index
        activeButton(allButtons.eq(t))
    })
}

//自动点击按钮
var t = 0;
var counts = allButtons.length;
playSlide(t%counts)
var timerId = setTimer()

//定闹钟
function setTimer() {
    return setInterval(function () {
        t += 1
        playSlide(t%counts)
    }, 3000)
}
//播放第几张幻灯片
function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

//激活button
function activeButton($button) {
    $button.addClass('grey').siblings('.grey').removeClass('grey')
}

//鼠标移上去，自动轮播暂停
$('.windows').on('mouseenter',function () {
    window.clearInterval(timerId)
});

//鼠标移除，自动轮播继续
$('.windows').on('mouseleave',function () {
    timerId = setTimer()
});