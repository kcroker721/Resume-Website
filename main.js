$(document).ready(function() {

    $('a').on('mouseenter', event => {
    $(event.currentTarget).addClass('active_a')
    }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('active_a')
    })

    $(".contact_icon, .skill_wrap, .hobby_wrap").on('mouseenter', event => {
    $(event.currentTarget).addClass('active_wrap')
    }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('active_wrap', [1000])
    })

      

  });