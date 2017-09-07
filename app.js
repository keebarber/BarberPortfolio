//Notifies user that form fields have missing data

var main = function() {

  $("form").submit(function() {
    var email = $("#email").val();
    if (email === '') {
      $(".email-error").text("Please enter your email");
    }
    return false;
  });

    $("form").submit(function() {
    var first = $("#firstname").val();
    if (first === '') {
      $(".firstname-error").text("Please enter your first name");
    }
    return false;
  });

    $("form").submit(function() {
    var last = $("#lastname").val();
    if (last === '') {
      $(".lastname-error").text("Please enter your last name");
    }
    return false;
  });

    $("form").submit(function() {
    var comment = $("#comment").val();
    if (comment === '') {
      $(".comment-error").text("It's hard to know what you've got to say when you don't say anything!");
    }
    return false;
  });
}

//Sends message to user with data that was input in forms

var notice = function() {

  $("form").submit(function() {

  var firstname = $('#firstname').val();
  var lastname = $('#lastname').val();
  var email = $('#email').val();
  var comment = $('#comment').val();
  var topic = $('#topic').val();
if ((firstname != '') && (lastname != '') && (email != '') && (comment != '')) {
  $(".notice").text("Thank you "+ firstname + ' ' + lastname + '.' + " I look forward to talking about " +topic + " with you!");
}

else {
  return false;
}

return false;
});
}


//Changes image opacity on mouseover and mouseout

var image = function() {
  $("img").on('mouseover', function() {

    $(this).removeClass('normal');
    $(this).addClass('opaque');
    });

    $("img").on('mouseout',function() {

    $(this).removeClass('opaque');
    $(this).addClass('normal');
    });
}


$(document).ready(main);
$(document).ready(notice);
$(document).ready(image);