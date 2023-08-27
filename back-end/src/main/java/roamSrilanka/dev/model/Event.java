package roamSrilanka.dev.model;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDate;

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
}
