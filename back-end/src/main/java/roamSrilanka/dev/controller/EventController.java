package roamSrilanka.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Event;
import roamSrilanka.dev.service.EventService;

import java.util.List;
import java.util.Optional;

@RestController
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping("/getAllEvents")
    public List<Event> getAllEvents() {
        return this.eventService.getAllEvents();
    }

    @GetMapping("/events")
    public List<Object[]> getEventsFields() {
        return eventService.getEventsFields();
    }

    @PostMapping("/addEvent")
    public Event createEvent(@RequestBody Event newEvent) {
        return this.eventService.createEvent(newEvent);
    }

    @GetMapping("/getParticularEvent/{id}")
    public Optional<Event> getEvent (@PathVariable(value = "id") Integer identity ) {
        return this.eventService.getEvent(identity);
    }

//    @PutMapping("/updateEvent/{id}")
//    public Event updateEvent(@PathVariable(value = "id") Integer identity, @RequestBody Event eventRequest) {
//        return this.eventService.updateEvent(identity, eventRequest);
//    }

    @DeleteMapping("/deleteEvent/{id}")
    public String deleteEvent (@PathVariable(value = "id") Integer identity) {
        return this.eventService.deleteEvent(identity);
    }
}
