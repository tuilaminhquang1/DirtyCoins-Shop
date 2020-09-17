$(document).ready(function() {
    $(".thumb img").click(function() {
        $("#mainImg").attr("src", $(this).attr('src'))
    })

})
function dathang(){
    alert("Đặt hàng thành công!!");
}