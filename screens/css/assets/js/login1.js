var elems1 = document.querySelectorAll('.check-box1');
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