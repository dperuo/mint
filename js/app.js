// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
  
  var $faq = $('#faq'),
      $allFAQ = [];
  
  $.getJSON('js/faq.json', function(data){
    
    $(data.questions).each(function(i, value){
      $allFAQ.push('<p>' + value.q + '<br>' + value.a + '</p>');
    });
    
    $faq.html($allFAQ);
        
  });
});
