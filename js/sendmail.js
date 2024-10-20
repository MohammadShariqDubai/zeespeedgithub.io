
function sendBookingMail(){
    const bookingName = document.getElementById("bookingName").value;
    const bookingNumber = document.getElementById("bookingNumber").value;
    const bookingService = document.getElementById("bookingService").value;
    const bookingDate = document.getElementById("bookingDate").value;
    // alert(bookingName);
if(bookingName == " " && bookingNumber == " " && bookingService == " " && bookingDate == " ")
    {
    alert("Please fill the required fields");
}
else{
    alert("Email Sent!!!");
}
}
        // let params = {
        //     contactName : contactName,
        //     email : document.getElementById("email").value,
        //     subject : document.getElementById("subject").value,
        //     message : document.getElementById("message").value
    
        // }
           // alert("Email Sent!!");
        // emailjs.send("service_txqwpjj","template_h8my533",params).then(alert("Email Sent!!"))
 
   
