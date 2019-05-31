$(document).ready(function(){

    $('#validatebtn').on('click',function(e){
    e.preventDefault();
    
    //Declearing variables
       var serial= $('input#validate').val();
    
        var serialArray=[];

    //Geting Existing Serial Numbers from the database (db.json)

    $.getJSON('http://localhost:3000/pin',function(data){
        $.each(data,function(i,pin){
            serialArray.push(pin.serial);
        })
        
        //Checking if serial Number Already Exists on the database (db.json)
        for(var i=0; i<serialArray.length; i++){
            
             if(serialArray[i]==serial){

                return alert("RECHARGE PIN IS VALID");
             }
         }

         return alert("RECHARGE PIN IS INVALID");
    })
      
    })

//To Delete a Recharge Pin from Database (db.json)    
    $('#deletebtn').on('click',function(e){
        e.preventDefault();
        
    //Geting Existing Serial Numbers and id from the database (db.json)
        
            
                var input = $("#validate").val()
                var id = 0;

                $.getJSON('http://localhost:3000/pin', function(pins){
                $.each(pins, function(index, value){
                    if(value.serial === input){
                        id += value.id;
                        console.log(value) 
                    }
                })
                //alert(id)
                $.ajax({
                    type:"DELETE",
                    url:`http://localhost:3000/pin/${id}`,
                    success: function(){
                       return alert("Deleted");
                    },
                    error:function(){
                        alert("Invalid Recharge pin");
                    }
                })

                })    

            })

            
        })
          
        
