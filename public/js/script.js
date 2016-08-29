 
var socket = io.connect('http://localhost:3000',{transports:['websocket'],'force new connection': true });

   $('#getData').click(function(){
           socket.emit('subscribe',{
             'lat': 37.8267,
             'long': -122.423,
             'lang': 'en'
     }); });


    $('#stopData').click(function(){

        socket.emit('stop',{
             'lat': 37.8267,
             'long': -122.423,
             'lang': 'en'
     });

     });

     socket.on('forecast',function(data){

         $('#1').text(data.summary ? data.summary : data);
         $('#2').text(data.temperature ? data.temperature : data);
         $('#3').text(data.humidity ? data.humidity : data);
         $('#4').text(data.visibility ? data.visibility : data);
         $('#5').text(data.windSpeed ? data.windSpeed : data); 
         

        });
