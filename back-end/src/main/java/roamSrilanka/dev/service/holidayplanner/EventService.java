package roamSrilanka.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Holidayplanner.Event;
import roamSrilanka.dev.repository.EventRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return this.eventRepository.findAll();
    }

    public List<Object[]> getEventsFields() {
        return eventRepository.findAllBy();
    }

    public Event createEvent (Event newEvent) {
        return this.eventRepository.save(newEvent);
    }

    public Optional<Event> getEvent(Integer id) {
        return this.eventRepository.findById(id);
    }

//    public Event updateEvent(int id, Event eventRequest) {
//        Event existingEvent = eventRepository.findById(id).get();
//        existingEvent.setName(eventRequest.getName());
//        existingEvent.setDate(eventRequest.getDate());
//        existingEvent.setPlaces(eventRequest.getPlaces());
//        existingEvent.setDays(eventRequest.getDays());
//        return eventRepository.save(existingEvent);
//    }
    public String deleteEvent (Integer id) {
        this.eventRepository.deleteById(id);
        return "Successfully Deleted";
    }

}
