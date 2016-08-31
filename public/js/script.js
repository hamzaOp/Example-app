 
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

         $('#1').text(data.currently.summary ? data.currently.summary : data);
         $('#2').text(data.currently.temperature ? data.currently.temperature : data);
         $('#3').text(data.currently.humidity ? data.currently.humidity : data);
         $('#4').text(data.currently.visibility ? data.currently.visibility : data);
         $('#5').text(data.currently.windSpeed ? data.currently.windSpeed : data); 
         

        });
