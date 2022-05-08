
var counter = 30;
function getTimeAndDate(){
    var usserId = document.getElementById("usserid").value;
  
    var today = new Date();
    var date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
    var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    document.getElementById('todayDate').value = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();;
    document.getElementById('otp').innerHTML = usserId+date+time;
    setInterval(counter=31)
    var htmlShow = document.getElementById("hidden");
    if (htmlShow.style.display === "none") {
      htmlShow.style.display = "block";
    } else {
      htmlShow.style.display = "none";
    }

    
}	

setInterval( function(){
     counter--;

     if( counter >= 0) {
         id = document.getElementById("count");
         id.innerHTML = counter;
     }
     
     if(counter == 0){
         id.innerHTML = "One time password has expired. Please generate again!"
     }
},1000);


