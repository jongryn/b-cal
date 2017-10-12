$(document).ready(function() {
      var events = [];
      // page is now ready, initialize the calendar...
      function clearForm() {
        event: $("#event").val("");
        category: $("#calCategory").val("");
        startTime: $("#from").val("");
        endTime: $("#to").val("");
        note: $("#calNote").val("");
      }

      $('#calendar').fullCalendar({
          // put your options and callbacks here
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        events: []
      })

      
      $("#calSubmit").on("click", function(event) {
          event.preventDefault();

          var newEvent = {
            event: $("#event").val().trim(),
            category: $("#calCategory").val().trim(),
            startTime: $("#from").val().trim(),
            endTime: $("#to").val().trim(),
            note: $("#calNote").val().trim()
          }

          events.push(newEvent);

          console.log(newEvent);
          console.log(events);

          $.each(events, function(i, item) {
            eventName = item.event,
            eventStart = item.startTime,
            eventEnd = item.endTime
    
            var eventObject = {
                title: eventName,
                start: eventStart,
                end: eventEnd,
                allDay: true
            }
            console.log(eventObject);
           

            $("#calendar").fullCalendar('renderEvent', eventObject, true);
          });
         
          $.post("/api/cals", newEvent)
          .done(function(data) {
          });
          
          clearForm();
        

          $.get("/api/cals", function(data) {
              events = data;
          });

      });
});