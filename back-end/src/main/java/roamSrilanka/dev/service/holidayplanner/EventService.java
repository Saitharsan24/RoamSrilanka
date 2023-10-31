package roamSrilanka.dev.service.holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Holidayplanner.Event;
import roamSrilanka.dev.repository.holidayplanner.EventRepository;

import roamSrilanka.dev.model.Holidayplanner.EventImage;

import roamSrilanka.dev.repository.holidayplanner.EventImageRepository;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private EventImageRepository eventImageRepository;

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

    public Long countEvents() {
        return eventRepository.count();
    }

    public void addEventImage(EventImage eventImage) {
        eventImageRepository.save(eventImage);
    }
}
