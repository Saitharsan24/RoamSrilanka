package roamSrilanka.dev.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "request")
public class TripRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_id")
    private Long request_id;

    @Column(name = "user_id")
    private Integer userId;
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

    @Column(name = "status")
    private Long status;


    @Column(name = "tourist_id")
    private Integer tourist_id;

    @Column(name = "no_of_days")
    private Integer no_of_days;


    public TripRequest() {
    }

    public TripRequest(Long request_id, Integer userId, String tourist_name, Date start_date, Date end_date, String pickup, String destination, Long contact, Long status, Integer tourist_id, Integer no_of_days) {
        this.request_id = request_id;
        this.userId = userId;
        this.tourist_name = tourist_name;
        this.start_date = start_date;
        this.end_date = end_date;
        this.pickup = pickup;
        this.destination = destination;
        this.contact = contact;
        this.status = status;
        this.tourist_id = tourist_id;
        this.no_of_days = no_of_days;
    }

    public TripRequest(Integer userId, String tourist_name, Date start_date, Date end_date, String pickup, String destination, Long contact, Long status, Integer tourist_id, Integer no_of_days) {
        this.userId = userId;
        this.tourist_name = tourist_name;
        this.start_date = start_date;
        this.end_date = end_date;
        this.pickup = pickup;
        this.destination = destination;
        this.contact = contact;
        this.status = status;
        this.tourist_id = tourist_id;
        this.no_of_days = no_of_days;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Long getRequest_id() {
        return request_id;
    }

    public void setRequest_id(Long request_id) {
        this.request_id = request_id;
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

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
        this.status = status;
    }

    public Integer getTourist_id() {
        return tourist_id;
    }

    public void setTourist_id(Integer tourist_id) {
        this.tourist_id = tourist_id;
    }

    public Integer getNo_of_days() {
        return no_of_days;
    }

    public void setNo_of_days(Integer no_of_days) {
        this.no_of_days = no_of_days;
    }

}
