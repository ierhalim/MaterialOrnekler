var router = {
    getContent: function (adress,callBack) {
        var html = $.get('templates/' + adress + ".html", function (resp) {
            $('#content').html(resp);
            callBack();
            $('.menu-item').removeClass('active');
            $('#menu-item-' + adress).addClass('active');
        })
      
    }
}
$(document).ready(function () {
    router.getContent('musiclist',loadMusicData);
});


function loadMusicData() {
    var temp = $('.music-item');
    var html = temp.html();
    temp.remove();
    var content = $('#musicContent');
    $.each(musicData, function (idx, val) {
        var newHtml;
        newHtml = html.replace('{{image}}', val.image);
        newHtml = newHtml.replace('{{name}}', val.name);
        newHtml = newHtml.replace('{{artist}}', val.artist);
        content.append(newHtml);       
    });
    
    
}

function loadAlbumData() {
    var content = $('#albumcontent');
    var html = content.html();
    content.empty();
    $.each(musicData, function (idx, value) {
        var newHtml = "";
        newHtml = html.replace("{{image}}", value.image);
        newHtml = newHtml.replace("{{name}}", value.name);
        newHtml = newHtml.replace("{{artist}}", value.artist);
        content.append(newHtml);
    });
   

}