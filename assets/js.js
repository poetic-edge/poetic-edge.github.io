//header背景铺满
function bg() {
    var wheight = $(window).height();
    $("header").css({
        height : wheight
    });
}
//hr换色
function color_change() {
    var post = $(".post");
    post.each(function () {
        var $this = $(this);
        function color_rand() {
            return Math.floor(Math.random() * 255);
        }
        var color = "rgb(" + color_rand() + "," + color_rand() + "," + color_rand() + ")";
        $this.find("hr").css("borderColor", color);

        $this.hover(function () {
            $this.css("color",color);
        },function () {
            $this.css("color","#000");
        });
    });
}
//ajax
function ajaxPost() {
    var post = $(".post");
    post.each(function (event) {
        var $this = $(this);
        $this.find("h2").on("click",function (event) {
            event.preventDefault();
            var url = $this.find("a").attr("href");
            $(".posts").fadeOut("slow",function () {
                $(".ajax").fadeIn("slow");
            });

            //获取title
            var title_url = url +" "+"#ajaxTitle";
            $(".ajax_title").load(title_url);
            //获取author
            var author_url = url +" "+"#ajaxAuthor";
            $(".ajax_author").load(author_url);
            var date_url = url +" "+"#ajaxDate";
            $(".ajax_date").load(date_url);
            var post_url = url +" "+"#ajaxPost";
            $(".ajax_post").load(post_url);
        });
    });
    back(".back");
    back("header h1");
    back("header li:first");
}
function back(element) {
    $(element).on("click",function (event) {
        event.preventDefault();
        $(".ajax").fadeOut("slow",function () {
            $(".posts").fadeIn("slow");
        });
    });
}
$(window).resize(function () {
    bg();
});
$(document).ready(function () {
    bg();
    color_change();
    ajaxPost();
});