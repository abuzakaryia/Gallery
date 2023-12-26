$(function(){

    var list = $(".drop_box");

    $(".open_nav_list").click(function(){
        list.toggleClass("drop_box_open");
    });

    $(".open_nav_list").blur(function(){
        list.removeClass("drop_box_open");
    });

    $(".close_nav_list").click(function(){
        list.removeClass("drop_box_open");
    });

});