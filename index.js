    $( document ).ready(function(){
        
//Sign up Code
$('#signUp').on('click',function(e){
    e.preventDefault();
    
    //Declearing Variables

    var userArray =[];
    // var email = $('#email').val();
    // var password=$('#password').val();
    const BASE_URL = 'http://localhost:3000/user';
     var user ={
         email: $("input#email").val(),
         password: $("input#password").val(),
     };

     //Getting already exisiting emails from the database (db.json)
    $.getJSON(BASE_URL,function(data){
        $.each(data,function(i,user){
           userArray.push(user.email);
        })
   
    //Checking if the email already exists
    for(var i=0; i<userArray.length; i++){
        if(userArray[i]==user.email){

            return alert("User Already Exist!");
        }else if(user.email==""){
           return alert("Please Enter your Login Details or SignUp");
        }
    }

    //Post the email to the database if it dont Exist on it already
     $.post(BASE_URL, user, function(data, obj, success){
        alert(JSON.stringify(success));
        console.log(data);
        window.location.href="generate/generate.html";
        },
        "json"
    )
    })
})
})

//Login Code
$('#loginbtn').on('click',function(e){
    e.preventDefault();

    //Declearing variables

    var userArray =[];
    var email = $('#email').val();
    var password=$('#password').val();
    const BASE_URL = 'http://localhost:3000/user';
     var user ={
         email: $("input#email").val(),
         password: $("input#password").val(),
     };

     //Getting already existing emails from the data base 
    $.getJSON(BASE_URL,function(data){
        $.each(data,function(i,user){
           userArray.push(user.email);
        })
    
    //Checking if the email already exists on the database and giving or restricting access
    for(var i=0; i<userArray.length; i++){
        if(userArray[i]==email){

            return window.location.href="generate/generate.html";
        }
    }
        return alert("Please Sign Up");
    })

})

        
        
