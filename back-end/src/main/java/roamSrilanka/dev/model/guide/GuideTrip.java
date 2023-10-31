package roamSrilanka.dev.model.guide;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Table(name = "guide_trip")
@Entity
public class GuideTrip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_id")
    private int tripId;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "user_id")
    private Integer userId;

    @Column (name = "from_date")
    private LocalDate fromDate;

    @Column (name = "to_date")
    private LocalDate toDate;

    @Column (name = "places")
    private String places;

    @Column (name = "charge")
    private String charge;

    @Column (name = "status")
    private String status;

    public GuideTrip() {
    }

    public GuideTrip(int tripId, LocalDate date, Integer userId, LocalDate fromDate, LocalDate toDate, String places, String charge, String status) {
        this.tripId = tripId;
        this.date = date;
        this.userId = userId;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.places = places;
        this.charge = charge;
        this.status = status;
    }

    public GuideTrip(LocalDate date, Integer userId, LocalDate fromDate, LocalDate toDate, String places, String charge, String status) {
        this.date = date;
        this.userId = userId;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.places = places;
        this.charge = charge;
        this.status = status;
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

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public LocalDate getFromDate() {
        return fromDate;
    }

    public void setFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
    }

    public LocalDate getToDate() {
        return toDate;
    }

    public void setToDate(LocalDate toDate) {
        this.toDate = toDate;
    }

    public String getPlaces() {
        return places;
    }

    public void setPlaces(String places) {
        this.places = places;
    }

    public String getCharge() {
        return charge;
    }

    public void setCharge(String charge) {
        this.charge = charge;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
