console.log("working");


///////////////////////////////////////start button

var flag =0;
var one = 0;
var task =0;
var task1=0;
var counter;
var runcom =0;
function fungenStart(){

    

    if(flag==0)
    {
        
        document.getElementById("redLed").src = "";
        document.getElementById("redLed").src = "images/greenLed.png";
        document.getElementById("redLed").style.transform = "rotate(-5deg)";
        flag=1;
        one=1;
        task=1;
        counter=1;


   

    }
    else{
        
        document.getElementById("redLed").src = "";
        document.getElementById("redLed").src = "images/redLed.png";
        document.getElementById("redLed").style.transform = "rotate(1deg)";
        flag=0;
        one=0;
        task=0;
        counter =1;
        runcom=0;

              
////////////////////////////////////      blank graph    /////////////////////////////////////

 {

    ////////////////////////////   message signal  //////////////////////////////////


    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        title :{
            text: "Message Signal"
        },
      
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    
    var dataLength = 10; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
        
      
           
            dps.push({
                x: (xVal),
                //x: (xVal)*(fre/10);
                y: (yVal),
            });
           
           
          
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 



    ///////////////////////////////////   Pulse signal /////////////////////////////////


    
    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        exportEnabled: true,
        title :{
            text: "Pulse Signal"
        },
      
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    
    var dataLength = 10; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
        
      
           
            dps.push({
                x: (xVal),
                //x: (xVal)*(fre/10);
                y: (yVal),
            });
           
           
          
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 

    

    //////////////////////////////////////////   PAM  signal  ///////////////////////////////////////////////



    
    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer2", {
        exportEnabled: true,
        title :{
            text: "PAM Signal"
        },
      
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    
    var dataLength = 10; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
        
      
           
            dps.push({
                x: (xVal),
                //x: (xVal)*(fre/10);
                y: (yVal),
            });
           
           
          
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 



    
    ////////////////////////////   Reconstruction of Message signal  //////////////////////////////////


    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer4", {
        exportEnabled: true,
        title :{
            text: "Demodulated Signal"
        },
      
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    
    var dataLength = 10; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
        
      
           
            dps.push({
                x: (xVal),
                //x: (xVal)*(fre/10);
                y: (yVal),
            });
           
           
          
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 





}

        
    }

    



}

var a,b,c;


////////////////////////////////////////// slider value input

    var amp1 = document.getElementById("myRange1");
    var fre1 = document.getElementById("myRange2");
    var fre2 = document.getElementById("myRange3");
    
    var output1 = document.getElementById("sliderAmp");
    var output2 = document.getElementById("sliderFre");
    var output3 = document.getElementById("sliderPul");

        var p=amp1.value;
        c=p;
        output1.innerHTML = amp1.value;
        amp1.oninput = function(){
            console.log("sliderValue working");
             output1.innerHTML = this.value;
             c = this.value;

             ////rotate the pin

             var pin1 = document.getElementById("balance1");
             var arr = [0,-78,-68,-62,-52,-42,-32,-26,-16,-8,0,8,16,26,32,42,52,62,68,78,82];
             console.log("pin move");
             var r = arr[c];
             pin1.style.transform = "rotate("+ r +"deg)";
    
             
        }



        var z = fre1.value;
        z=100/z;
        z=1/z;
        output2.innerHTML = 2;
        a=z.toFixed(3);
        fre1.oninput = function(){
            var put = this.value;
            put = 100/put;
            put = (1/put);
            put = put.toFixed(3);
            output2.innerHTML = this.value;
            a = put;


            ////////   Rotate the pin
           var pin2 = document.getElementById("balance2");
           var arr1 = [0,-85,-69,-50,-30,-10,10,30,50,69,85];
           var r1 = arr1[fre1.value];
           pin2.style.transform = "rotate("+ r1 +"deg)";



        }
        

        var k = fre2.value;
        k=Math.round(1000/k);
        k=1/k;
        output3.innerHTML = 10;
        b=k.toFixed(2);
        fre2.oninput = function(){
            var put1 = this.value;
            put1 = Math.round(1000/put1);
            put1 = (1/put1);
            put1 = put1.toFixed(2);
            output3.innerHTML = this.value;
            b=put1;


            ///   rotate the pin

            var pin3 = document.getElementById("balance3");
            var arr2 = [0,-78,-71,-64,-58,-50,-44,-38,-32,-26,-20,-12,-6,2,9,16,20,26,34,42,48,54,58,66,72,78];
            var r2 = arr2[fre2.value];
            pin3.style.transform = "rotate("+ r2 +"deg)";
        }
        


   

var compar =0;
    
    
   



 
    /////////////////////////////  Graph Function    /////////////////////////////////////////////////


    function run(){

         if(task1==1){
        //////////////////  Message Signal   ///////////////////////////////////////////////

var com1 = fre1.value;
var com2 = fre2.value;

if(com2>=2*com1)
{
    compar=1;

        var dps = [];
        var chart = new CanvasJS.Chart("chartContainer", {
        zoomEnabled: true,
        exportEnabled: true,
        title :{
            text: "Message Signal"
        },
        data: [{
            type: "spline",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

  
    var xVal = 0;
    var yVal = 0;
    var counter = 0;
    var amp = amp1.value;
    var fre = fre1.value;
    var freorg = 0.1;
    
     
    //var fre =2.5; // real frequency is 2000  if i want fre/100 and put
    
    // time period = 1000/2 =500
    
    
    var dataLength = 1000; // number of dataPoints visible at any point
    var increase = (Math.PI * 2 / 100)*fre;
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
            yVal = (Math.sin(counter))*amp;
            dps.push({
                x: xVal,
                y: yVal
            });
            counter = counter + increase;
            xVal+=freorg/10;
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 
    

    //////////////////////////////////////////////////////     PULSE SIGNAL       ///////////////////////////////
     
    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        zoomEnabled:true,
        exportEnabled: true,
        title :{
            text: "Updated pulse Signal"
        },
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    var fre = fre2.value;
    var width = 0.01;
    var fresin =5;
    var increase = (Math.PI * 2 / 100)*fresin;
    var runner  =0;
    var siny;
    var dataLength = 10; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        dps.push({
        x:(xVal),
        y:(yVal),
        })
        
        for (var j = 0; j < count; j++) {	
        
        var upto = 1/fre;
           
          for(var i=0; i < fre;i++)
          {
          
        siny =  (Math.sin(runner)/2)*2;
       
       if(j==0 && i==0)
       {
         dps.push({
               x:(0),
               y:(0),
             })
       }
             
             xVal = xVal;
             yVal = 1;
             dps.push({
               x:(xVal),
               y:(yVal),
             })
             
             
            
             xVal += width;
             yVal =1;
             dps.push({
               x:(xVal),
               y:(yVal),
             })
             
              xVal = xVal;
             yVal = 0;
             dps.push({
               x:(xVal),
               y:(yVal),
             })
             
              xVal += (upto-width);
             yVal = 0;
             dps.push({
               x:(xVal),
               y:(yVal),
             })
             
            
          }
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 


    //////////////////////////////////           PAM  SIGNAL   ///////////////////////////////////////////////////


    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer2", {
        zoomEnabled:true,
        exportEnabled: true,
        title :{
            text: "final pulse Signal"
        },
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    var fre = fre2.value;
    var fresin = fre1.value;
    
    var width = 0.01;
    var adder = 1/fre;
    var sum = 1/fre;
    var plus =0;
    var flag=0;
    var flag2=0;
    var counter=0;
    var siny;
    var dataLength = 800; // number of dataPoints visible at any point
    var increase = (Math.PI * 2 / 100)*fresin;
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
   
        for (var j = 0; j < count; j++) {	
        if(j==0)
        {
         xVal = xVal;
         yVal = yVal;
         plus=0;
        }
        else
        {
          if(sum.toFixed(2)==adder.toFixed(2))
          {
            siny = (Math.sin(counter));
            xVal = xVal;
            yVal = siny;
            flag=1;
            sum=0;
            plus=0;
          }
          else
          {
            if(flag==1)
            {
              counter = counter + increase;
               siny = (Math.sin(counter));
              xVal +=0.01;
              yVal =siny;
              sum+=0.01;
              flag=0;
              flag2=1;
              plus=0;
            }
            else
            {
              if(flag2==1)
              {
                xVal=xVal;
                yVal=0;
                flag2=0;
                plus=1;
                
              }
              else
              {
                counter = counter + increase;
                xVal += 0.01;
                yVal = 0;
                sum += 0.01;
              }
            }
          }
        }
     
             
          dps.push({
          x:(xVal),
          y:(yVal*amp),
          })
          
        //  sum = sum.toFixed(2);
        //  console.log(sum);
          
       /*  if(plus==1)
        {
         xVal +=0.01;
         sum+=0.01;
        } */
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 

    runcom=1;}
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Frequency of pulse signal should atleast 2 times of message signal',
           
          })
    }

}
else
{
    alert("First add the values in table");
}

}




window.onload = function(){


        
////////////////////////////////////      blank graph    /////////////////////////////////////

 {

    ////////////////////////////   message signal  //////////////////////////////////


    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        title :{
            text: "Message Signal"
        },
      
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    
    var dataLength = 10; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
        
      
           
            dps.push({
                x: (xVal),
                //x: (xVal)*(fre/10);
                y: (yVal),
            });
           
           
          
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 



    ///////////////////////////////////   Pulse signal /////////////////////////////////


    
    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
        exportEnabled: true,
        title :{
            text: "Pulse Signal"
        },
      
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    
    var dataLength = 10; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
        
      
           
            dps.push({
                x: (xVal),
                //x: (xVal)*(fre/10);
                y: (yVal),
            });
           
           
          
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 

    

    //////////////////////////////////////////   PAM  signal  ///////////////////////////////////////////////



    
    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer2", {
        exportEnabled: true,
        title :{
            text: "PAM Signal"
        },
      
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    
    var dataLength = 10; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
        
      
           
            dps.push({
                x: (xVal),
                //x: (xVal)*(fre/10);
                y: (yVal),
            });
           
           
          
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 




    
    ////////////////////////////   Reconstruction of Message signal  //////////////////////////////////


    var dps = [];
    var chart = new CanvasJS.Chart("chartContainer4", {
        exportEnabled: true,
        title :{
            text: "Demodulated Signal"
        },
      
        
        data: [{
            type: "line",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

   
   
    var xVal = 0;
    var yVal = 0;
    
    var dataLength = 10; // number of dataPoints visible at any point
   
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
        
      
           
            dps.push({
                x: (xVal),
                //x: (xVal)*(fre/10);
                y: (yVal),
            });
           
           
          
            
           
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); 





}



}


////////////////////////////////////////////////     Add Table        //////////////////////////


function addTable(){

    if(task==1)
    {
          task1=1;

          if(counter<=5)
          {
            var com1 = fre1.value;
            var com2 = fre2.value;
            
            if(com2>=2*com1)
           { Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'succesfully added in table',
                showConfirmButton: false,
                timer: 1500
              })

            
         ////////////first delet row
         document.getElementById("Table").deleteRow(counter);


         var table = document.getElementById("Table");
         var row = table.insertRow(counter);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);
         
         cell1.innerHTML = counter;
         cell2.innerHTML = a;
         cell3.innerHTML = b;
        // cell4.innerHTML = "NEW CELL2";
         cell5.innerHTML = c;
         counter++;
         compar=0;
        }
         else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Frequency of pulse signal should atleast 2 times of message signal',
               
              })
           
         }

          }
          else{
              alert("You can only insert 5 readings in table");
          }



        


    }
    else{
        if(task1==0)
        {
            
        alert("First turn on the Function generator");

        }
        else
        alert(" First Add the values in table");
    }



}


function resetTable(){
        
    var table = document.getElementById("Table");

    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
        
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure you want to clear the table?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true,
        
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Cleared!',
            'Your table has been Cleared.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your Table is safe :)',
            'error'
          )
        }
      })

    for(var i=1;i<=5;i++)
    {
        
        {
            table.deleteRow(i);
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            cell1.innerHTML = i;
            cell2.innerHTML = "";
            cell3.innerHTML = "";
            cell4.innerHTML = "";
            cell5.innerHTML = "";
        }
        counter=1;

    }
   

}


///////////////////////////////////////////////////////// Demodulation Signal     ///////////////////////////////////////////

function demod(){
if(runcom==1)
   { var dps = [];
        var chart = new CanvasJS.Chart("chartContainer4", {
        zoomEnabled: true,
        exportEnabled: true,
        title :{
            text: "Message Signal"
        },
        data: [{
            type: "spline",
            markerSize: 0,
            dataPoints: dps 
        }]
       
    });

  
    var xVal = 0;
    var yVal = 0;
    var counter = 0;
    var amp = 30;
    var fre = fre1.value;
    //var fre =2.5; // real frequency is 2000  if i want fre/100 and put
    
    // time period = 1000/2 =500
    
    
    var dataLength = 1000; // number of dataPoints visible at any point
    var increase = (Math.PI * 2 / 100)*fre;
    var updateChart = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.
        for (var j = 0; j < count; j++) {	
            yVal = (Math.sin(counter)/2)*2*(amp1.value-2);
            dps.push({
                x: xVal,
                y: yVal
            });
            counter = counter + increase;
            xVal++;
        }
        if (dps.length > dataLength) {
            dps.shift();
        }
        chart.render();
    };
    
    updateChart(dataLength); }
    else{
        alert('First Make the PAM signal by pressing RUN button.')
    }


}


function study(){
    Swal.fire({
        title: 'Demodulation of a PAM signal (naturally sampled).',
        text: 'The demodulation of the PAM signals can be done easily using a Low-pass filter. A sine wave generator circuit is used in this project which is based on the Wien Bridge Oscillator (WBO) circuit. The Wien Bridge oscillator circuit can produce distortion less sinusoidal sweep at its output.',
        imageUrl: 'images/figure2.png',
        imageWidth: 450,
        imageHeight: 200,
        
        showCloseButton: true
      })
}