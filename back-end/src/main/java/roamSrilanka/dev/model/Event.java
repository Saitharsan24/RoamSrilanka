package roamSrilanka.dev.model;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "event")
public class Event {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "event_no")
        private int eventId;

        @Column(name = "name")
        private String name;

        @Column(name = "date")
        private String date; // LocalDate date

        @Column(name = "days")
        private int days;

        @Column(name = "places")
        private String places;

        @Column(name = "description")
        private String description;


        @ElementCollection
        @Column(name = "event_images")
        private List<String> eventImages;

        public Event() {
        }

        public Event(int eventId, String name, String date, int days, String places, String description, List<String> eventImages) {
            this.eventId = eventId;
            this.name = name;
            this.date = date;
            this.days = days;
            this.places = places;
            this.description = description;
            this.eventImages = eventImages;
        }

        public int getEventId() {
            return eventId;
        }

        public void setEventId(int eventId) {
            this.eventId = eventId;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
        }

        public int getDays() {
            return days;
        }

        public void setDays(int days) {
            this.days = days;
        }

        public String getPlaces() {
            return places;
        }

        public void setPlaces(String places) {
            this.places = places;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }
  
        public List<String> getEventImages() {
            return eventImages;
        }

        public void setEventImages(List<String> eventImages) {
            this.eventImages = eventImages;
        }
}
