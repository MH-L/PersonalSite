if (!window.x) {
    x = {};
}

x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

$(document).ready(function() {
    $('.boldButton').bind("mouseup", function() {
        var mytext = x.Selector.getSelected();
        document.execCommand('bold');
        return false;
    });

    $('.italicButton').bind("mouseup", function() {
      var textChosen = x.Selector.getSelected();
      document.execCommand('italic');
      return false;
    });

    $('.underlineButton').bind("mouseup", function() {
      var textChosen = x.Selector.getSelected();
      document.execCommand('underline');
      return false;
      // document.getElementById('onlyText').style.textDecoration = "underline";
    })
});