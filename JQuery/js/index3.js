$(document).ready(function(){















    ////$('p.para1').css({'color':'red','background':'lightgrey','padding':'10px 20px'});



    ////////add or remove another class
        $('p.para1').addClass('myClass');
        $('p.para1').removeClass('myClass');



      //////  add remove on button click
        $('#btn-1').on('click',()=>{
            $('p.para2').toggleClass('myClass');
        })



       ////add text,html elements

   // $('#myDiv').text('Hello Guys...');
     //   $('#myDiv').html('<h1>Hello Guys</h1>');
     //alert($('#myDiv').html());


//add li in top,bottom

      // $('ul').append('<li>Appended Item</li>');
      // $('ul').prepend('<li>prepended Item</li>');


       //adding h3 before and after ul

      // $('ul').before('<h3>Starting point</h3>');
       //$('ul').after('<h3>Ending point</h3>');

////clean li but not ul

    $('ul').empty();
      $('ul').detach();


     //remove add attributes

     $('a').attr('target','_blank');
    // alert($('a').attr('href'));
     $('a').removeAttr('target');


     ///wrap

     $('p').wrap('<h1>');
     $('p').wrapAll('<h1>');

     $('#newItem').keyup((e)=>{
         //console.log(e.which);
         var code = e. Which;
         if(code==13){
             e.preventDefault();
             $('ul').append('<li>'+ e.target.value+'</li>');
         }

     })


     var myArr=['Brad','Kelly','Nalla','Dalla'];
     $.each(myArr,function(i,val){
         $("#users").append('<li>'+val+'</li>');
     })

       
        


})