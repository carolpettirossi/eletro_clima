(function ($) {
 
  $(document).ready(function() {

    $('div.brands ul').jcarousel({
      visible: 6,
      scroll: 1,
      wrap: 'circular'
    });
    
    $('a.btn-voltar').click(function(){
      history.back(-1);
    });
    
    if ($('body.node-type-webform div.messages').hasClass('error')) {
      $('body.node-type-webform div.messages').html('Verifique e corrija os campos destacados.');
    } 
    
    var category = jQuery('div#parent-category ul li.first a').html();
  
    var brand = jQuery('div.field-type-taxonomy-term-reference div.field-item').html();
    
    $('div.pane-menu-menu-products-categories ul li.collapsed').each(function(){
      if ($(this).find('a').html() == category) {
        $(this).find('ul.menu').show();
        $(this).find('ul.menu li').each(function(){
          if ($(this).find('a').html() == brand) {
            $(this).find('a').addClass('active active-trail');
          }
        });
      }
    })

    $('div.pane-menu-menu-products-categories a.active-trail').parents('ul').show();
    
  });

  
})(jQuery);;
