$ ->
  
  $faq = $('#faq')

  $faq.append '<dl id="faqList" class="accordion" data-accordion></dl>'
  
  $.getJSON 'js/faq.json', (data) ->

    $faqList = $('#faqList')

    $(data.questions).each (i, value) ->
      $faqList.append '<dd class=""><a href="#panel' + (i+1) + '"><h3>' + value.q + '</h3></a><div id="panel' + (i+1) + '" class="content">' + value.a + '</div></dd>'

  $(document).foundation()
