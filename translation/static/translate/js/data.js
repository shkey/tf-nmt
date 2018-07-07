// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
$(document).ready(function(){
    $("#btn").click(function(){
        var word_src=$("#input").val();
        // var word_tgt=$("#output").val();
        var src=$("#src").val();
        var tgt=$("#tgt").val();
        // console.log(word_src)
        // console.log(word_tgt)
        // console.log(src)
        // console.log(tgt)
        $.ajax({
            type:'post',
            url:'http://10.42.0.51:8000/trans/index/',
            dataType:'json',
            data:{
                "src":src,
                "tgt":tgt,
                "word_src":word_src,
                // 'word_tgt':word_tgt,
            },
            success:function(){
                // alert("值为："+word_src)
                // alert("值为："+word_tgt)
                // alert("值为："+src)
                // alert("值为："+tgt)
            }
        })
    });
});
