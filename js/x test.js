$('#faq').each(function(i, 'dd'){
  if ($(this).attr('class') === 'active'){
    $(this).child('h3').addClass('minus');
    $(this).child('h3').removeClass('plus')
  }
})
