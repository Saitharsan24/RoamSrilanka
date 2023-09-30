package roamSrilanka.dev.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "request")
public class TripRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_id")
    private Long requst_id;

    @Column(name = "tourist_name")
    private String tourist_name;

    @Column(name = "from_date")
    private Date from_date;

    @Column(name = "to_date")
    private Date to_date;

    @Column(name = "pickup")
    private String pickup;

    @Column(name = "destination")
    private String destination;

    @Column(name = "contact")
    private Long contact;

    public Long getRequst_id() {
        return requst_id;
    }

    public void setRequst_id(Long requst_id) {
        this.requst_id = requst_id;
    }

    public String getTourist_name() {
        return tourist_name;
    }

    public void setTourist_name(String tourist_name) {
        this.tourist_name = tourist_name;
    }

    public Date getFrom_date() {
        return from_date;
    }

    public void setFrom_date(Date from_date) {
        this.from_date = from_date;
    }

    public Date getTo_date() {
        return to_date;
    }

    public void setTo_date(Date to_date) {
        this.to_date = to_date;
    }

    public String getPickup() {
        return pickup;
    }

    public void setPickup(String pickup) {
        this.pickup = pickup;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Number getContact() {
        return contact;
    }

    public void setContact(Long contact) {
        this.contact = contact;
    }
}
