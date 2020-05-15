function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var inputVal = document.getElementById("myBtn").value;
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "SHOW MORE >>"; 
      btnText.style.fontSize="medium";
         btnText.style.lineHeight = "30px";

      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "SHOW LESS"; 
        btnText.style.fontSize="medium";
        btnText.style.lineHeight = "30px";
      moreText.style.display = "inline";
    }
  }