package roamSrilanka.dev.model.Tourist;


import jakarta.persistence.*;
import roamSrilanka.dev.model.User;

import java.util.Date;


@Table(name = "tourist")
@Entity
public class Tourist {

    @Id
    @Column(name = "user_id")
    private int userId;

    @Column(name = "tourist_dob")
    private Date touristDob;

    @Column(name = "tourist_gender")
    private String touristGender;

    @Column(name = "tourist_contact")
    private String touristContact;

    @Column(name = "passport_no")
    private  String touristPassport;

    @Column(name = "country")
    private String country;

    @Column(name = "emrgcy_person")
    private String emergencyPerson;

    @Column(name = "emrgcy_relation")
    private String emergencyRelation;

    @Column(name = "emrgcy_contact")
    private String emergencyContact;

    @Column(name ="status")
    private String status;



    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    public Tourist(int userId, Date touristDob, String touristGender, String touristContact, String touristPassport, String country, String emergencyPerson, String emergencyRelation, String emergencyContact,String status) {
        this.userId = userId;
        this.touristDob = touristDob;
        this.touristGender = touristGender;
        this.touristContact = touristContact;
        this.touristPassport = touristPassport;
        this.country = country;
        this.emergencyPerson = emergencyPerson;
        this.emergencyRelation = emergencyRelation;
        this.emergencyContact = emergencyContact;
        this.status = status;
    }


    public Tourist(int userId, String touristGender, String touristContact, String touristPassport, String country, String emergencyPerson, String emergencyRelation, String emergencyContact,String status) {
        this.userId = userId;
        this.touristGender = touristGender;
        this.touristContact = touristContact;
        this.touristPassport = touristPassport;
        this.country = country;
        this.emergencyPerson = emergencyPerson;
        this.emergencyRelation = emergencyRelation;
        this.emergencyContact = emergencyContact;
        this.status = status;
    }

    public Tourist(int userId, String touristGender, String touristContact, String touristPassport, String country,String status) {
        this.userId = userId;
        this.touristGender = touristGender;
        this.touristContact = touristContact;
        this.touristPassport = touristPassport;
        this.country = country;
        this.status = status;
    }

    public Tourist( Date touristDob, String touristGender, String touristPassport, String country) {
        this.touristDob = touristDob;
        this.touristGender = touristGender;
        this.touristPassport = touristPassport;
        this.country = country;
    }

    public Tourist() {

    }

    //Getters
    public int getUserId() {
        return userId;
    }

    //Setters
    public void setUserId(int userId) {
        this.userId = userId;
    }

    //Getters
    public String getTouristGender() {
        return touristGender;
    }

    //Setters
    public void setTouristGender(String touristGender) {
        this.touristGender = touristGender;
    }

    //Getters
    public String getTouristContact() {
        return touristContact;
    }

    //Setters
    public void setTouristContact(String touristContact) {
        this.touristContact = touristContact;
    }

    //Getters
    public String getTouristPassport() {
        return touristPassport;
    }

    //Setters
    public void setTouristPassport(String touristPassport) {
        this.touristPassport = touristPassport;
    }

    //Getters
    public String getCountry() {
        return country;
    }

    //Setters
    public void setCountry(String country) {
        this.country = country;
    }

    //Getters
    public String getEmergencyPerson() {
        return emergencyPerson;
    }

    //Setters
    public void setEmergencyPerson(String emergencyPerson) {
        this.emergencyPerson = emergencyPerson;
    }

    //Getters
    public String getEmergencyRelation() {
        return emergencyRelation;
    }

    //Setters
    public void setEmergencyRelation(String emergencyRelation) {
        this.emergencyRelation = emergencyRelation;
    }

    //Getters
    public String getEmergencyContact() {
        return emergencyContact;
    }

    //Setters
    public void setEmergencyContact(String emergencyContact) {
        this.emergencyContact = emergencyContact;
    }

    //Getters
    public Date getTouristDob() {
        return touristDob;
    }

    //Setters
    public void setTouristDob(Date touristDob) {
        this.touristDob = touristDob;
    }

    public void setUser(User savedUser) {
        this.user = savedUser;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}


