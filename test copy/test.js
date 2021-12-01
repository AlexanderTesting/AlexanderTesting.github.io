$(document).ready(function(){
    $('.clipboard').on("click", function(){
        value = $(this).data('ref');
 
        var $temp = $("<input>");
          $("body").append($temp);
          $temp.val(value).select();
          document.execCommand("copy");
          $temp.remove();
          
          // Use notify.js to display a notification
          $.notify("URL copied!", "success");
          
    })
})