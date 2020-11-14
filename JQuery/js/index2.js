$(document).ready(function(){
    //$('#btn-1').click(function(){
      //  alert('button is clicked');
   // });

   //$('#btn-1').on('click',function(){
       //$('#paral').hide();
       //$('#paral').toggle();
   //});
    //$('#btn-1').on('click',function(){
       //$('#paral').show();
       
   //});
   //$('#btn-1').dblclick(function(){
    //   $('#paral').toggle();
   //});



   //$('#btn-1').hover(function(){
   //    $('#paral').toggle();
   //})

   //$('#btn-1').on('mousedown',function(){
     // $('#paral').toggle();

   // })
   // $('#btn-1').hover(function(){
    //     $('#paral').toggle();
    //  });

    //$(document).on('mousemove',function(e){
    //    $('#coords').html('coords: y: '+e.clientY+'coords: X: '+e.clientX);

    //})



   // $('input').focus(function(){
    //    $(this).css('background','red');
//
   // })

   // $('input').blur(function(){
    //    $(this).css('background','white');

   // })

   $('select#gender').change(function(e){
       alert(e.target.value);

   })



   $('#form').submit(function(e){
       e.preventDefault();
       var name=$('#name').val();
       console.log(name);
   })



})