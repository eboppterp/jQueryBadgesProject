$(function() {
  //call to my codeschool report card
  jQuery.ajax({
    url: 'https://www.codeschool.com/users/2727904.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
    }
  });

});
