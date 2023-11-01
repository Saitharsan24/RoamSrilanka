package roamSrilanka.dev.model.guide;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Table(name = "guide_trip")
@Entity
public class GuideTrip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_id")
    private int tripId;

    @Column(name = "guide_id")
    private Integer guideId;

    @Column(name = "tourist_id")
    private Integer touristId;

    @Column (name = "from_date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate fromDate;

    @Column (name = "to_date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate toDate;

    @Column (name = "places")
    private String places;

    @Column (name = "charge")
    private String charge;

    @Column (name = "status")
    private String status;

    public GuideTrip() {
    }

    public GuideTrip(int tripId, Integer touristId, LocalDate fromDate, LocalDate toDate, String places, String charge, String status , Integer guideId) {
        this.tripId = tripId;
        this.touristId = touristId;
        this.guideId = guideId;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.places = places;
        this.charge = charge;
        this.status = status;
    }

    public GuideTrip(Integer touristId, LocalDate fromDate, LocalDate toDate, String places, String charge, String status , Integer guideId) {
        this.touristId = touristId;
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

    public Integer getUserId() {
        return touristId;
    }

    public void setUserId(Integer touristId) {
        this.touristId = touristId;
    }

    public Integer getGuideId() {
        return guideId;
    }

    public void setGuideId(Integer guideId) {
        this.guideId = guideId;
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
