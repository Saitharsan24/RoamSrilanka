package roamSrilanka.dev.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Table(name = "tourist")
@Entity
public class Tourist {

    @Id
    @Column(name = "user_id")
    private int userId;

    @Column(name = "tourist_name")
    private String touristName;

    @Column(name = "tourist_gender")
    private String touristGender;

    @Column(name = "tourist_contact")
    private String touristContat;

    @Column(name = "tourist_email")
    private String touristAddress;

    @Column(name = "passport_no")
    private  String touristPassport;

    @Column(name = "cuntry")
    private String country;

    @Column(name = "passwprd")
    private String password;

    @Column(name = "emrgcy_person")
    private String emergencyPerson;

    @Column(name = "emrgcy_relation")
    private String emergencyRelation;

    @Column(name = "emrgcy_contact")
    private String emergencyContact;


    public Tourist() {
    }

    public Tourist(int userId, String touristName, String touristGender, String touristContat, String touristAddress, String touristPassport, String country, String password, String emergencyPerson, String emergencyRelation, String emergencyContact) {
        this.userId = userId;
        this.touristName = touristName;
        this.touristGender = touristGender;
        this.touristContat = touristContat;
        this.touristAddress = touristAddress;
        this.touristPassport = touristPassport;
        this.country = country;
        this.password = password;
        this.emergencyPerson = emergencyPerson;
        this.emergencyRelation = emergencyRelation;
        this.emergencyContact = emergencyContact;
    }

    public Tourist(String touristName, String touristGender, String touristContat, String touristAddress, String touristPassport, String country, String password, String emergencyPerson, String emergencyRelation, String emergencyContact) {
        this.touristName = touristName;
        this.touristGender = touristGender;
        this.touristContat = touristContat;
        this.touristAddress = touristAddress;
        this.touristPassport = touristPassport;
        this.country = country;
        this.password = password;
        this.emergencyPerson = emergencyPerson;
        this.emergencyRelation = emergencyRelation;
        this.emergencyContact = emergencyContact;
    }

    //getters

    public int getUserId() {
        return userId;
    }

    public String getTouristName() {
        return touristName;
    }

    public String getTouristGender() {
        return touristGender;
    }

    public String getTouristContat() {
        return touristContat;
    }

    public String getTouristAddress() {
        return touristAddress;
    }

    public String getTouristPassport() {
        return touristPassport;
    }

    public String getCountry() {
        return country;
    }

    public String getPassword() {
        return password;
    }

    public String getEmergencyPerson() {
        return emergencyPerson;
    }

    public String getEmergencyRelation() {
        return emergencyRelation;
    }

    public String getEmergencyContact() {
        return emergencyContact;
    }

    //setters

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setTouristName(String touristName) {
        this.touristName = touristName;
    }

    public void setTouristGender(String touristGender) {
        this.touristGender = touristGender;
    }

    public void setTouristContat(String touristContat) {
        this.touristContat = touristContat;
    }

    public void setTouristAddress(String touristAddress) {
        this.touristAddress = touristAddress;
    }

    public void setTouristPassport(String touristPassport) {
        this.touristPassport = touristPassport;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmergencyPerson(String emergencyPerson) {
        this.emergencyPerson = emergencyPerson;
    }

    public void setEmergencyRelation(String emergencyRelation) {
        this.emergencyRelation = emergencyRelation;
    }

    public void setEmergencyContact(String emergencyContact) {
        this.emergencyContact = emergencyContact;
    }
}
