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

    @Column(name = "start_date")
    private Date start_date;

    @Column(name = "end_date")
    private Date end_date;

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

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
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
