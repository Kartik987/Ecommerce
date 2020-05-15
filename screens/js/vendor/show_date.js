const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dt = new Date();
document.getElementsByClassName("datetime")[0].innerHTML = ((monthNames[dt.getMonth()]) +" "+ (("0"+dt.getDate()).slice(-2)) +", "+(dt.getFullYear())) ;
document.getElementsByClassName("datetime")[1].innerHTML = ((monthNames[dt.getMonth()]) +" "+ (("0"+dt.getDate()).slice(-2)) +", "+(dt.getFullYear())) ;
document.getElementsByClassName("datetime")[2].innerHTML = ((monthNames[dt.getMonth()]) +" "+ (("0"+dt.getDate()).slice(-2)) +", "+(dt.getFullYear())) ;
document.getElementsByClassName("datetime")[3].innerHTML = ((monthNames[dt.getMonth()]) +" "+ (("0"+dt.getDate()).slice(-2)) +", "+(dt.getFullYear())) ;
document.getElementsByClassName("datetime")[4].innerHTML = ((monthNames[dt.getMonth()]) +" "+ (("0"+dt.getDate()).slice(-2)) +", "+(dt.getFullYear())) ;
document.getElementsByClassName("datetime")[5].innerHTML = ((monthNames[dt.getMonth()]) +" "+ (("0"+dt.getDate()).slice(-2)) +", "+(dt.getFullYear())) ;
document.getElementsByClassName("datetime")[6].innerHTML = ((monthNames[dt.getMonth()]) +" "+ (("0"+dt.getDate()).slice(-2)) +", "+(dt.getFullYear())) ;
document.getElementsByClassName("datetime")[7].innerHTML = ((monthNames[dt.getMonth()]) +" "+ (("0"+dt.getDate()).slice(-2)) +", "+(dt.getFullYear())) ;
