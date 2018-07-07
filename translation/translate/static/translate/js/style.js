// 获取textarea中的值并判断是否为空
$(document).ready(function () {
    $("button").click(function () {
        var word_src = $("#input").val();
        var src = $("#src").val();
        var tgt = $("#tgt").val();
        if (src == tgt) {
            alert("请选择不同语言！")
        }
        else if (src != tgt) {
            var word_tgt = $("#output").val();
        }

    });
// 点击交换按钮交换语言
    $("img").click(function () {
        // alert('click');
        var src = $('#src').val();
        var tgt = $('#tgt').val();
        for (var i = 0; i < 1000; i++) {
            if (src == "en") {
                $("#src").find("option[value='de']").attr("selected", true);
                $("#tgt").find("option[value='en']").attr("selected", true);
                $('#src').val("de");
                $('#tgt').val("en");
            }
            else if (src = "de") {
                $("#src").find("option[value='en']").attr("selected", true);
                $("#tgt").find("option[value='de']").attr("selected", true);
                $('#src').val("en");
                $('#tgt').val("de");
            }
        }
    })
// 选择语言
    $("#src").change(function () {
        var src = $('#src').val();
        var tgt = $('#tgt').val();
        if (src == "en") {
            $("#tgt").find("option[value='de']").attr("selected", true);
            $('#tgt').val("de");
        }
        else if (src = "de") {
            $("#tgt").find("option[value='en']").attr("selected", true);
            $('#tgt').val("en");
        }
    });
    $("#tgt").change(function () {
        var src = $('#src').val();
        var tgt = $('#tgt').val();
        if (tgt == "en") {
            $("#src").find("option[value='de']").attr("selected", true);
        }
        else if (tgt = "de") {
            $("#src").find("option[value='en']").attr("selected", true);
        }
    });
// 检测是否有内容(翻译功能)
    $('#input').on('keydown', function () {
        var word = $("#input").val();
        if (word.length != 0) {
            $("#btn").attr('disabled', false);
        }
        else if (word.length == 0) {
            $("#btn").attr('disabled', true);
        }
    });

// 检测是否有内容(清除功能)
    $('#input').on('keydown', function () {
        var word = $("#input").val();
        if (word.length != 0) {
            $("#reset").attr('disabled', false);
        }
        else if (word.length == 0) {
            $("#reset").attr('disabled', true);
        }
    });

// 清除
    $("#reset").click(function () {
        $("#input").val('');
        $("#output").html('')
    })
});