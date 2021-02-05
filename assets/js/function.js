function imageEdit(url){
    $(".icon").css('opacity', '1.0');
    $("."+url).css('opacity', '0.5');
    $("#imageEdit").show();
    $("#modeling").hide();
    $("#creativeDesign").hide();
    $("#motionDesign").hide();
    $("#web").hide();
    $("#game").hide();

    // GetDisBetweenElements("tmasking-text", "imageEdit")
}

function modeling(url){
    $(".icon").css('opacity', '1.0');
    $("."+url).css('opacity', '0.5');
    $("#imageEdit").hide();
    $("#modeling").show();
    $("#creativeDesign").hide();
    $("#motionDesign").hide();
    $("#web").hide();
    $("#game").hide();
}

function creativeDesign(url){
    $(".icon").css('opacity', '1.0');
    $("."+url).css('opacity', '0.5');
    $("#imageEdit").hide();
    $("#modeling").hide();
    $("#creativeDesign").show();
    $("#motionDesign").hide();
    $("#web").hide();
    $("#game").hide();
}

function motionDesign(url){
    $(".icon").css('opacity', '1.0');
    $("."+url).css('opacity', '0.5');
    $("#imageEdit").hide();
    $("#modeling").hide();
    $("#creativeDesign").hide();
    $("#motionDesign").show();
    $("#web").hide();
    $("#game").hide();
}

function web(url){
    $(".icon").css('opacity', '1.0');
    $("."+url).css('opacity', '0.5');
    $("#imageEdit").hide();
    $("#modeling").hide();
    $("#creativeDesign").hide();
    $("#motionDesign").hide();
    $("#web").show();
    $("#game").hide();
}

function game(url){
    $(".icon").css('opacity', '1.0');
    $("."+url).css('opacity', '0.5');
    $("#imageEdit").hide();
    $("#modeling").hide();
    $("#creativeDesign").hide();
    $("#motionDesign").hide();
    $("#web").hide();
    $("#game").show();
}

////////////////// Image Edit Part //////////////////

function imageEdit_Masking(){
    $("#imageEdit_IMG").attr('src', 'assets/img/service/imageEdit/masking.png');
    $("#masking-text").slideDown();
    $("#invisible-text").slideUp();
    $("#retouch-text").slideUp();
    $("#shadow-text").slideUp();
    $("#recolor-text").slideUp();
    $("#color-text").slideUp();

    GetDisBetweenElements("tmasking-text", "imageEdit", "imageEdit_IMG")
}

function imageEdit_Invisble(){
    $("#imageEdit_IMG").attr('src', 'assets/img/service/imageEdit/invisible.png');
    $("#masking-text").slideUp();
    $("#invisible-text").slideDown();
    $("#retouch-text").slideUp();
    $("#shadow-text").slideUp();
    $("#recolor-text").slideUp();
    $("#color-text").slideUp();

    GetDisBetweenElements("tinvisible", "imageEdit", "imageEdit_IMG")
}

function imageEdit_Retouch(){
    $("#imageEdit_IMG").attr('src', 'assets/img/service/imageEdit/retouch.png');
    $("#masking-text").slideUp();
    $("#invisible-text").slideUp();
    $("#retouch-text").slideDown();
    $("#shadow-text").slideUp();
    $("#recolor-text").slideUp();
    $("#color-text").slideUp();
    GetDisBetweenElements("tretouch", "imageEdit", "imageEdit_IMG")
}

function imageEdit_Shadow(){
    $("#imageEdit_IMG").attr('src', 'assets/img/service/imageEdit/shadow.png');
    $("#masking-text").slideUp();
    $("#invisible-text").slideUp();
    $("#retouch-text").slideUp();
    $("#shadow-text").slideDown();
    $("#recolor-text").slideUp();
    $("#color-text").slideUp();
    GetDisBetweenElements("tshadow", "imageEdit", "imageEdit_IMG")
}

function imageEdit_Recolor(){
    $("#imageEdit_IMG").attr('src', 'assets/img/service/imageEdit/recolor.png');
    $("#masking-text").slideUp();
    $("#invisible-text").slideUp();
    $("#retouch-text").slideUp();
    $("#shadow-text").slideUp();
    $("#recolor-text").slideDown();
    $("#color-text").slideUp();
    GetDisBetweenElements("trecolor", "imageEdit", "imageEdit_IMG")
}

function imageEdit_Color(){
    $("#imageEdit_IMG").attr('src', 'assets/img/service/imageEdit/color.png');
    $("#masking-text").slideUp();
    $("#invisible-text").slideUp();
    $("#retouch-text").slideUp();
    $("#shadow-text").slideUp();
    $("#recolor-text").slideUp();
    $("#color-text").slideDown();
    GetDisBetweenElements("tcorrection", "imageEdit", "imageEdit_IMG")
}

////////////////// Modeling Part //////////////////

function modeling_f(){
    $("#modeling_IMG").attr('src', 'assets/img/service/modeling/3D_Modeling_1.jpg');
    $("#modeling_ftext").slideDown();
    $("#modeling_stext").slideUp();
    $("#modeling_ttext").slideUp();

    GetDisBetweenElements("modelinga", "modeling", "modeling_IMG")
}

function modeling_s(){
    $("#modeling_IMG").attr('src', 'assets/img/service/modeling/3D_Modeling_2.jpg');
    $("#modeling_ftext").slideUp();
    $("#modeling_stext").slideDown();
    $("#modeling_ttext").slideUp();
    GetDisBetweenElements("modelingb", "modeling", "modeling_IMG")
}

function modeling_t(){
    $("#modeling_IMG").attr('src', 'assets/img/service/modeling/3d_Modeling _3.jpg');
    $("#modeling_ftext").slideUp();
    $("#modeling_stext").slideUp();
    $("#modeling_ttext").slideDown();

    GetDisBetweenElements("modelingc", "modeling", "modeling_IMG")
}

////////////////// Creative Design Part //////////////////

function creative_logo(){
    $("#creativeDesign_IMG").attr('src', 'assets/img/service/creativeDesign/logo.jpg');
    $("#logo-text").slideDown();
    $("#business-text").slideUp();
    $("#brochure-text").slideUp();
    $("#banner-text").slideUp();
    $("#flyer-text").slideUp();
    $("#magazine-text").slideUp();

    GetDisBetweenElements("ldesign", "creativeDesign", "creativeDesign_IMG")
}

function creative_business(){
    $("#creativeDesign_IMG").attr('src', 'assets/img/service/creativeDesign/business.jpg');
    $("#logo-text").slideUp();
    $("#business-text").slideDown();
    $("#brochure-text").slideUp();
    $("#banner-text").slideUp();
    $("#flyer-text").slideUp();
    $("#magazine-text").slideUp();

    GetDisBetweenElements("bcdesign", "creativeDesign", "creativeDesign_IMG")
}

function creative_brochure(){
    $("#creativeDesign_IMG").attr('src', 'assets/img/service/creativeDesign/brochure.jpg');
    $("#logo-text").slideUp();
    $("#business-text").slideUp();
    $("#brochure-text").slideDown();
    $("#banner-text").slideUp();
    $("#flyer-text").slideUp();
    $("#magazine-text").slideUp();

    GetDisBetweenElements("bdesign", "creativeDesign", "creativeDesign_IMG")
}

function creative_banner(){
    $("#creativeDesign_IMG").attr('src', 'assets/img/service/creativeDesign/banner.jpg');
    $("#logo-text").slideUp();
    $("#business-text").slideUp();
    $("#brochure-text").slideUp();
    $("#banner-text").slideDown();
    $("#flyer-text").slideUp();
    $("#magazine-text").slideUp();

    GetDisBetweenElements("bandesign", "creativeDesign", "creativeDesign_IMG")
}

function creative_flyer(){
    $("#creativeDesign_IMG").attr('src', 'assets/img/service/creativeDesign/flyer.jpg');
    $("#logo-text").slideUp();
    $("#business-text").slideUp();
    $("#brochure-text").slideUp();
    $("#banner-text").slideUp();
    $("#flyer-text").slideDown();
    $("#magazine-text").slideUp();

    GetDisBetweenElements("fdesign", "creativeDesign", "creativeDesign_IMG")
}

function creative_magazine(){
    $("#creativeDesign_IMG").attr('src', 'assets/img/service/creativeDesign/magazine.jpg');
    $("#logo-text").slideUp();
    $("#business-text").slideUp();
    $("#brochure-text").slideUp();
    $("#banner-text").slideUp();
    $("#flyer-text").slideUp();
    $("#magazine-text").slideDown();

    GetDisBetweenElements("mcdesign", "creativeDesign", "creativeDesign_IMG")
}    

////////////////// Motion Design Part //////////////////

function motion_logo(){
    $("#motionDesign_IMG").attr('src', 'assets/img/service/motionDesign/Logo_remove.mp4');
    $("#motion-logo").slideDown();
    $("#motion-text").slideUp();
    $("#motion-3d").slideUp();

    var video = document.getElementById('Motion-Design');

    video.load();
    video.play();

    GetDisBetweenElements("liamotion", "motionDesign", "Motion-Design")
}

function motion_text(){
    $("#motionDesign_IMG").attr('src', 'assets/img/service/motionDesign/Text Animation_remove.mp4');
    $("#motion-logo").slideUp();
    $("#motion-text").slideDown();
    $("#motion-3d").slideUp();

    var video = document.getElementById('Motion-Design');

    video.load();
    video.play();
    GetDisBetweenElements("tamotion", "motionDesign", "Motion-Design")
}

function motion_3d(){
    $("#motionDesign_IMG").attr('src', 'assets/img/service/motionDesign/3D Product _Visulation_remove.mp4');
    $("#motion-logo").slideUp();
    $("#motion-text").slideUp();
    $("#motion-3d").slideDown();

    var video = document.getElementById('Motion-Design');

    video.load();
    video.play();

    GetDisBetweenElements("tpvmotion", "motionDesign", "Motion-Design")
} 

////////////////// Web Development Part //////////////////

function web_html(){
    $("#web_IMG").attr('src', 'assets/img/service/web/html.jpg');
    $("#web-html").slideDown();
    $("#web-css").slideUp();
    $("#web-js").slideUp();

    GetDisBetweenElements("hcj", "web", "web_IMG")
}

function web_css(){
    $("#web_IMG").attr('src', 'assets/img/service/web/css.jpg');
    $("#web-html").slideUp();
    $("#web-css").slideDown();
    $("#web-js").slideUp();

    GetDisBetweenElements("frontend", "web", "web_IMG")
}

function web_js(){
    $("#web_IMG").attr('src', 'assets/img/service/web/javacript.jpg');
    $("#web-html").slideUp();
    $("#web-css").slideUp();
    $("#web-js").slideDown();

    GetDisBetweenElements("backend", "web", "web_IMG")
}

////////////////// Game Development Part //////////////////

function game_unity(){
    $("#game_IMG").attr('src', 'assets/img/service/game/unity.jpg');
    $("#unity-text").slideDown();
    $("#virtual-text").slideUp();
    $("#reality-text").slideUp();
    $("#animate-text").slideUp();
    $("#multi-text").slideUp();
    $("#backend-text").slideUp();

    GetDisBetweenElements("hcgunity", "game", "game_IMG")
}

function game_virtual(){
    $("#game_IMG").attr('src', 'assets/img/service/game/virtual.jpg');
    $("#unity-text").slideUp();
    $("#virtual-text").slideDown();
    $("#reality-text").slideUp();
    $("#animate-text").slideUp();
    $("#multi-text").slideUp();
    $("#backend-text").slideUp();

    GetDisBetweenElements("vrpunity", "game", "game_IMG")
}

function game_reality(){
    $("#game_IMG").attr('src', 'assets/img/service/game/reality.jpg');
    $("#unity-text").slideUp();
    $("#virtual-text").slideUp();
    $("#reality-text").slideDown();
    $("#animate-text").slideUp();
    $("#multi-text").slideUp();
    $("#backend-text").slideUp();

    GetDisBetweenElements("arpunity", "game", "game_IMG")
}

function game_animate(){
    $("#game_IMG").attr('src', 'assets/img/service/game/animate.jpg');
    $("#unity-text").slideUp();
    $("#virtual-text").slideUp();
    $("#reality-text").slideUp();
    $("#animate-text").slideDown();
    $("#multi-text").slideUp();
    $("#backend-text").slideUp();

    GetDisBetweenElements("taunity", "game", "game_IMG")
}

function game_multi(){
    $("#game_IMG").attr('src', 'assets/img/service/game/multi.jpg');
    $("#unity-text").slideUp();
    $("#virtual-text").slideUp();
    $("#reality-text").slideUp();
    $("#animate-text").slideUp();
    $("#multi-text").slideDown();
    $("#backend-text").slideUp();

    GetDisBetweenElements("mgunity", "game", "game_IMG")
}

function game_backend(){
    $("#game_IMG").attr('src', 'assets/img/service/game/backend.jpg');
    $("#unity-text").slideUp();
    $("#virtual-text").slideUp();
    $("#reality-text").slideUp();
    $("#animate-text").slideUp();
    $("#multi-text").slideUp();
    $("#backend-text").slideDown();

    // GetDisBetweenElements("taunity", "game", "game_IMG")
}


function GetScreenCordinates(obj) {
    var p = {};
    p.x = obj.offsetLeft;
    p.y = obj.offsetTop;
    while (obj.offsetParent) {
        p.x = p.x + obj.offsetParent.offsetLeft;
        p.y = p.y + obj.offsetParent.offsetTop;
        if (obj == document.getElementsByTagName("body")[0]) {
            break;
        }
        else {
            obj = obj.offsetParent;
        }
    }
    return p   ;
}

function GetDisBetweenElements(elemt, elemd, telem) {

    setTimeout(function(){

        var txt1 = document.getElementById(""+elemt.toString());
        var txt2 = document.getElementById(""+elemd.toString());
        var p = GetScreenCordinates(txt1);
        var q = GetScreenCordinates(txt2);
        var dis = p.y - q.y - 30;

        $("#"+telem).animate({'margin-top': dis+'px' }, 250);
    }, 400);

}

function GalleryVideo(elemId) {
    document.getElementById('visual_gallery').pause();
    document.getElementById('logo_gallery').pause();
    document.getElementById('text_gallery').pause();

    var elem = document.getElementById(elemId);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }

    elem.play();
}

