console.log('test'); 

// filtro de animais
$('.filter-btn').on('click', function() { 
    let type= $(this).attr('id'); 
    let boxes= $('.animais-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');


if(type=='aves-btn') { 
    eachBoxes('aves', boxes) 
} else if (type== 'felinos-btn'){
    eachBoxes('felinos',boxes);
} else if(type=='primatas-btn') {
    eachBoxes ('primatas',boxes); 
} else { 
    eachBoxes('all', boxes)
}

}); 

function eachBoxes(type,boxes){

    if(type == 'all') {
        $(boxes).fadeIn();
    } else { 
      $(boxes).each(function() { 
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow');
            } else { 
                $(this).fadeIn();
            }
        });
    }
}