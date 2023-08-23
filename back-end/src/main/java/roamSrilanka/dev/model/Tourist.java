package roamSrilanka.dev.model;


import jakarta.persistence.*;


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

    @OneToOne
    @MapsId
    @JoinColumn(name = "userId")
    private User user;

    public Tourist() {
    }

    public Tourist(int userId, String touristName, String touristGender, String touristContat, String touristPassport, String country, String emergencyPerson, String emergencyRelation, String emergencyContact) {
        this.userId = userId;
        this.touristName = touristName;
        this.touristGender = touristGender;
        this.touristContat = touristContat;
        this.touristPassport = touristPassport;
        this.country = country;
        this.emergencyPerson = emergencyPerson;
        this.emergencyRelation = emergencyRelation;
        this.emergencyContact = emergencyContact;
    }

    public Tourist(int userId, String touristName, String touristGender, String touristContat, String touristPassport, String country) {
        this.userId = userId;
        this.touristName = touristName;
        this.touristGender = touristGender;
        this.touristContat = touristContat;
        this.touristPassport = touristPassport;
        this.country = country;
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
    public String getTouristName() {
        return touristName;
    }

    //Setters
    public void setTouristName(String touristName) {
        this.touristName = touristName;
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
    public String getTouristContat() {
        return touristContat;
    }

    //Setters
    public void setTouristContat(String touristContat) {
        this.touristContat = touristContat;
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
}


