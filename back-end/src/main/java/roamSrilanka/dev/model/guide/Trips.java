package roamSrilanka.dev.model.guide;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDate;

@Table(name = "guide_trips")
@Entity
public class Trips {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_id")
    private int tripId;

    @Column(name = "date")
    private LocalDate date;
    @Column(name = "tourist_name")
    private String touristName;

    public Trips() {
    }

    public Trips(int tripId, LocalDate date, String touristName) {
        this.tripId = tripId;
        this.date = date;
        this.touristName = touristName;
    }

    public Trips(LocalDate date, String touristName) {
        this.date = date;
        this.touristName = touristName;
    }

    public int getTripId() {
        return tripId;
    }

    public void setTripId(int tripId) {
        this.tripId = tripId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTouristName() {
        return touristName;
    }

    public void setTouristName(String touristName) {
        this.touristName = touristName;
    }
}
