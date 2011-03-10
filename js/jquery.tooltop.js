/*
jQuery Tooltop Plugin
Created By Boaz Sender
Licensed under the do whatever the fuck you want to with it license
*/

jQuery.fn.tooltop = function(){
  return this.each(function(){
    if( $(this).attr('title') ) {
      $(this).hover(function(){ 

        var self = $(this),
            title = self.attr('title');

        self.attr('title', '');

        self.css({
            cursor: 'help',
            position: 'relative'
          });

        $('<button>', {
          html: title,
          css: {
            position: 'absolute',
            top: -10,
            right: -130,
            width: 120
          }
        }).appendTo(self)

      }, function(){

        var buttontext = $(this).children('button');

        $(this).attr('title', buttontext.text() );
        buttontext.remove();

      })
    }
  });
}
