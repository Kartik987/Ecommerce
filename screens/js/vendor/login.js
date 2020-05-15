
var elems1 = document.querySelectorAll('.check-box1');
var elems = document.querySelectorAll('.check-box');
var btn = document.querySelector('.btn-elem');
[].forEach.call(elems, function(el) {
  el.addEventListener('change', function() {
    var checked = document.querySelectorAll('.check-box:checked');
   
 
    if (checked.length) {
      btn.style.backgroundColor = "#004a88";
      btn.style.color = "white";
    } else {
      btn.style.color = "black";
        btn.style.backgroundColor = "#f7f7f7";
    }
  });
});


var btn1 = document.querySelector('.btn-elem1');
[].forEach.call(elems1, function(el) {
  el.addEventListener('change', function() {
   
    var checked1 = document.querySelectorAll('.check-box1:checked');
 
    if (checked1.length) {
      btn1.style.backgroundColor = "#004a88";
      btn1.style.color = "white";
    } else {
     btn1.style.color = "black";
     btn1.style.backgroundColor = "#f7f7f7";
    }
  });
});

$(".common").change(function() {
    $(".common").prop('checked', false);
    $(this).prop('checked', true);
});


$(".btn-light").change(function() {
    $(".btn-light").prop('backgroundColor','#f7f7f7');
    $(this).prop('checked', '#004a88');
});