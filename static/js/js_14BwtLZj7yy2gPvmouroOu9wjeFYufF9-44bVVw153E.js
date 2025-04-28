(function ($) {
    'use strict';
    $(document).ready(function () {
        function sectionRed1() {
            if ($(".section--red01").length>0){
                var win_viewport = $(window).scrollTop() + 60;
                var section__red = $(".section--red01");
                var doc_viewport = section__red.offset();
                doc_viewport.bottom = doc_viewport.top + section__red.outerHeight();
                if (win_viewport > doc_viewport.top && win_viewport < doc_viewport.bottom) {
                    $('html').addClass("has-red-nav1");
                } else {
                    $('html').removeClass("has-red-nav1");
                }
            }
        }
        function sectionDefault1() {
            if ($(".section--default").length>0){
                var win_viewport = $(window).scrollTop();
                var section__red = $(".section--default");
                var doc_viewport = section__red.offset();
                doc_viewport.bottom = doc_viewport.top + section__red.outerHeight();
                if (win_viewport + 200 > doc_viewport.top && win_viewport < doc_viewport.bottom) {
                    $('html').removeClass("has-red-nav1");
                }
            }
        }
        sectionRed1();
        sectionDefault1();
        window.addEventListener("scroll", sectionRed1);
        window.addEventListener("scroll", sectionDefault1);
      $( document ).ready(function() {

    $('.select-dropdown__button').on('click', function(event){
        event.stopPropagation()
        $('.select-dropdown__list').toggleClass('active');
           $('.select-dropdown__list1').removeClass('active');
              $('.select-dropdown__list2').removeClass('active');
             $('.select-dropdown__list3').removeClass('active');

    });
          $(document).on('click', function() {
             $('[class*=select-dropdown__list]').removeClass('active');
              //$('.select-dropdown__list1').removeClass('active');

          });
    $(document).on("click",".select-dropdown__list-item",function() {
        var itemValue = $(this).data('value');

        $('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
        $('.select-dropdown__list').toggleClass('active');
    });

         $('.select-dropdown__button1').on('click',  function(event){
        event.stopPropagation()
        $('.select-dropdown__list1').toggleClass('active');
             $('.select-dropdown__list').removeClass('active');
              $('.select-dropdown__list2').removeClass('active');
             $('.select-dropdown__list3').removeClass('active');
             $('.select-dropdown__button1 span').addClass('black1');

    });

    $(document).on("click",".select-dropdown__list-item1",function() {
        var itemValue = $(this).data('value');

        $('.select-dropdown__button1 span').text($(this).text()).parent().attr('data-value', itemValue);
        $('.select-dropdown__list1').toggleClass('active');
    });

          $('.select-dropdown__button2').on('click',  function(event){
        event.stopPropagation()
        $('.select-dropdown__list2').toggleClass('active');
              $('.select-dropdown__list').removeClass('active');
              $('.select-dropdown__list1').removeClass('active');
               $('.select-dropdown__list3').removeClass('active');
               $('.select-dropdown__button2 span').addClass('black');
    });
    $(document).on("click",".select-dropdown__list-item2",function() {
        var itemValue = $(this).data('value');

        $('.select-dropdown__button2 span').text($(this).text()).parent().attr('data-value', itemValue);
        $('.select-dropdown__list2').toggleClass('active');
    });
    $(document).on("click",".select-dropdown__list-item1",function() {
        var itemValue = $(this).data('value');

      $('#select_region').val(itemValue);
    });
    $(document).on("click",".select-dropdown__list-item2",function() {
        var itemValue = $(this).data('value');

      $('#select_interested').val(itemValue);
    });


          $('.select-dropdown__button3').on('click',  function(event){
        event.stopPropagation()
        $('.select-dropdown__list3').toggleClass('active');
              $('.select-dropdown__list').removeClass('active');
              $('.select-dropdown__list1').removeClass('active');
               $('.select-dropdown__list2').removeClass('active');
    });
    $(document).on("click",".select-dropdown__list-item3",function() {
        var itemValue = $(this).data('value');

        $('.select-dropdown__button3 span').text($(this).text()).parent().attr('data-value', itemValue);
        $('.select-dropdown__list3').toggleClass('active');
    });

        });
        $(document).on("click",".sidebar--careers .apply-btn",function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#grnhse_app").offset().top - 100
            }, 500);
        });
    });

}(jQuery));;
