$(document).ready(function(){
  
  var $faq = $('#faq')
  $faq.append('<dl id="faqList" class="accordion" data-accordion></dl>')
  $.getJSON('js/faq.json', function(data){
    $(data.questions).each(function(i, value){
      $('#faqList').append('<dd><a href="#panel' + (i+1) + '"><h3 class="plus">' + value.q + '</h3 class="plus"></a><div id="panel' + (i+1) + '" class="content">' + value.a + '</div></dd>')
    })
  })

  $(document).foundation()

})

