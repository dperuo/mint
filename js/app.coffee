$ ->

  $faq = $('#faq')
  
  $faq.append '<dl id="faqList" class="accordion" data-accordion></dl>'
  
  $.getJSON 'js/faq.json', (data) ->
    $(data.questions).each (i, value) ->
      $('#faqList').append '<dd><a href="#panel' + (i+1) + '"><h3 class="plus">' + value.q + '</h3></a><div id="panel' + (i+1) + '" class="content">' + value.a + '</div></dd>'

  $(document).foundation()
