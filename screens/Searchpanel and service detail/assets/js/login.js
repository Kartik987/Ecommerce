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




