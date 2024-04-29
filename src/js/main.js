

// Import our custom CSS
import '../scss/styles.scss'

 
 
$( function() {
  $( "#tabs" ).tabs();

 

} );



$( function() {
 //$(document).ready(function(){
 

 $('#btnencrypt').click(function() {
  codectext();
});

 


$('#btndecode').click(function() {
 
  decodetext();
});



        function codectext(){
         				 
            if($("#inputuncodec").val()!=''   ){   
              
            
        
              
                    var inputuncodec = $("#inputuncodec").val();
                    
                    
                      $.ajax({
                        url: "server.php", 
                        data : {inputuncodec:inputuncodec,encode:'encode'},
                        dataType: "JSON",
                        success: function(response){
                  
                                      
                          // $("#form1").get(0).reset();
                            // location.reload();
                      
               
                     $("#inputcodec").val(response[0].encrypted);    
                                
                            },
                                  error: function(res){
                                    alert("error lectura datos response.");
                                }
                          });


          
          
            }   

           if($("#inputuncodec").val()==''){
               $("#inputuncodec").focus();

           }
 
                                                
  
      }



      
      function decodetext(){
         				 
        if($("#decoded1").val()!=''   ){   
          
        
    
          
                var decoded1 = $("#decoded1").val();
                
                
                  $.ajax({
                    url: "server.php", 
                    data : {decoded1:decoded1, decode:'decode'},
                    dataType: "JSON",
                    success: function(response){
              
                                  
             
           
                 $("#decoded2").val(response[0].decrypt);    
                            
                        },
                              error: function(res){
                                alert("error lectura datos response.");
                            }
                      });


      
      
        }   

       if($("#decoded1").val()==''){
           $("#decoded1").focus();

       }

                                            

  }



  
 });