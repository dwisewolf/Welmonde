// Rating Initialization
var $star_rating1 = $('.star-rating-1 .fa');

var SetRatingStar1 = function() {
  return $star_rating1.each(function() {
    if (parseInt($star_rating1.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating1.on('click', function() {
  $star_rating1.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar1();
});

SetRatingStar1();

var $star_rating2 = $('.star-rating-2 .fa');

var SetRatingStar2 = function() {
  return $star_rating2.each(function() {
    if (parseInt($star_rating2.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating2.on('click', function() {
  $star_rating2.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar2();
});

SetRatingStar2();

var $star_rating3 = $('.star-rating-3 .fa');

var SetRatingStar3 = function() {
  return $star_rating3.each(function() {
    if (parseInt($star_rating3.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating3.on('click', function() {
  $star_rating3.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar3();
});

SetRatingStar3();

var $star_rating4 = $('.star-rating-4 .fa');

var SetRatingStar4 = function() {
  return $star_rating4.each(function() {
    if (parseInt($star_rating4.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating4.on('click', function() {
  $star_rating4.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar4();
});

SetRatingStar4();
$(document).ready(function() {

  var p1=0,p2=0,p3=0,p4=0,c=0;
  $(".bookmark-toggle").click(function(){
      // alert("The paragraph was clicked.");
      $(this).toggleClass("fa-bookmark fa-bookmark-o");
    });

    $('span').click(function(){
      var t = $(this).text();
      alert(t);
      if(t == 'BENGALURU'){
        $('#sel1').val('Karnataka');
        $('#sel2').val('Bengaluru');
        $('#sel3').val('Apollo Lab1');
      }
      else if(t == 'KERALA'){
        $('#sel1').val('Kerala');
        $('#sel2').val('Kerala');
        $('#sel3').val('Apollo Lab2');
      }
  });


  $("select#sel1").change(function(){
       var selectedState = $(this).children("option:selected").val();
       alert("You have selected the state - " + selectedState);
       if(selectedState == 'Karnataka'){
         $('#sel2').val('Bengaluru');
         $('#sel3').val('Apollo Lab1');
       }
       else if(selectedState == 'Kerala'){
         $('#sel2').val('Kerala');
         $('#sel3').val('Apollo Lab2');
       }
   });

   $("#add1").click(function(){
     $("#adddiv1").hide();
   $(".overall1").show();
 $("#cartadd").show();
   p1 = ($('#quantity1')[0]['value'])*4000;
   c=c+1;
  });

 $("#add2").click(function(){
   $("#adddiv2").hide();
 $(".overall2").show();
$("#cartadd").show();
 p2 = ($('#quantity2')[0]['value'])*950;
 c=c+1;
});

$("#add3").click(function(){
  $("#adddiv3").hide();
$(".overall3").show();
$("#cartadd").show();
p3 = ($('#quantity3')[0]['value'])*1600;
c=c+1;
});

$("#add4").click(function(){
  $("#adddiv4").hide();
$(".overall4").show();
$("#cartadd").show();
p4 = ($('#quantity4')[0]['value'])*1600;
c=c+1;
});

$(".overall1").click(function(){
p1 = ($('#quantity1')[0]['value'])*4000;
c=c+1;
});

$(".overall2").click(function(){
p2 = ($('#quantity2')[0]['value'])*950;
c=c+1;
});

$(".overall3").click(function(){
p3 = ($('#quantity3')[0]['value'])*1600;
c=c+1;
});

$(".overall4").click(function(){
p4 = ($('#quantity4')[0]['value'])*1600;
c=c+1;
});

$( ".testdiv" ).click(function() {
  p=0;
  console.log("p1",p1,"p2",p2,"p3",p3,"p4",p4);
  p = p1+p2+p3+p4;
  $( ".dynamicval" ).empty();
  $(".dynamicval").html('₹'+p+'/-');
  $( ".dynamicval2" ).empty();
  if(c==1){
    $(".dynamicval2").html(c+' test ');
  }
  else if(c > 1){
    $(".dynamicval2").html(c+' tests ');
  }
  console.log(c,"c");
});


});


function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

$('.overall1').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.overall1').on('click', '.button-minus', function(e) {
  decrementValue(e);
});

$('.overall2').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.overall2').on('click', '.button-minus', function(e) {
  decrementValue(e);
});

$('.overall3').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.overall3').on('click', '.button-minus', function(e) {
  decrementValue(e);
});

$('.overall4').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.overall4').on('click', '.button-minus', function(e) {
  decrementValue(e);
});
