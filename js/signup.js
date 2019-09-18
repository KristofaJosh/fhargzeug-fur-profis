$(document).ready(function(){
    $("#signup").click(function(event){
        event.preventDefault();
        const emailValue = $("#email").val();
        const phoneValue = $("#phone").val();
        const passwordValue = $("#password1").val();
        const confirmValue = $("#password2").val();
        const addressValue = $("#inputAddress").val();
        const addressTwoValue = $("#inputAddress2").val();
        const cityValue = $("#inputCity").val();
        
        const data = {
            email: emailValue,
            phone: phoneValue,
            password: passwordValue,
            address: addressValue,
            address2: addressTwoValue,
            city: cityValue
        }

        // //check if user already exist in the database
        // $.get( "http://localhost:3000/users", function( data ) {
        //     console.log(data)
        //     for (user of data){
        //         if (user.email == emailValue)
        //             alert("This email already exist");
        //             return;
        //     }
        // });

        //if after successful registration it should push redirect you to the homepage...
        $.post( "http://localhost:3000/users", data);
        window.location = "http://127.0.0.1:5500/index.html";


        // if ( passwordValue !== confirmValue){
        //     alert('Password do not match');
        //     window.location.reload();
        // }else{
        //     // save to database
 
        //     $.post( "http://localhost:3000/users", data);
        // }

        
    });

})