package roamSrilanka.dev.model.Holidayplanner;

import jakarta.persistence.*;
import lombok.Getter;

import java.math.BigDecimal;

@Table(name = "packages")
@Entity
public class Packages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "packageid")
    private int packageID;

    @Column(name = "price")
    private BigDecimal price;
    //    private List<String> places;
    @Column(name = "package_name")
    private String package_name;
    @Column(name = "trip_guide")
    private Boolean trip_guide;

    @Column(name = "vehicle")
    private Boolean vehicle;

    @Column(name = "days")
    private int days;
    @Column(name = "hotel_rating")
    private int hotel_rating;
    @Column(name = "places")
    private String places;

    @Column(name = "status")
    private String status;

    @Column(name = "discription", columnDefinition = "VARCHAR(2000)")
    private String discription;

    @Column(name = "no_of_people")
    private int no_of_people;


    public Packages() {
    }

    public Packages(int packageID, BigDecimal price, String package_name, Boolean trip_guide, int days, int hotel_rating, String places, int status, String discription, int no_of_people) {
        this.packageID = packageID;
        this.price = price;
        this.package_name = package_name;
        this.trip_guide = trip_guide;
        this.days = days;
        this.hotel_rating = hotel_rating;
        this.places = places;
        this.status = status;
        this.discription = discription;
        this.no_of_people = no_of_people;
    }

    public Packages(BigDecimal price, String package_name, Boolean meals, Boolean trip_guide, int days, int hotel_rating, String places, int status, String discription, int no_of_people) {
        this.price = price;
        this.package_name = package_name;
        this.trip_guide = trip_guide;
        this.days = days;
        this.hotel_rating = hotel_rating;
        this.places = places;
        this.status = status;
        this.discription = discription;
        this.no_of_people = no_of_people;
    }

    public int getPackageID() {
        return packageID;
    }

    public void setPackageID(int packageID) {
        this.packageID = packageID;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getPackage_name() {
        return package_name;
    }

    public void setPackage_name(String package_name) {
        this.package_name = package_name;
    }

    public Boolean getTrip_guide() {
        return trip_guide;
    }

    public void setTrip_guide(Boolean trip_guide) {
        this.trip_guide = trip_guide;
    }

    public Boolean getVehicle() {
        return vehicle;
    }

    public void setVehicle(Boolean vehicle) {
        this.vehicle = vehicle;
    }

    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }

    public int getHotel_rating() {
        return hotel_rating;
    }

    public void setHotel_rating(int hotel_rating) {
        this.hotel_rating = hotel_rating;
    }

    public String getPlaces() {
        return places;
    }

    public void setPlaces(String places) {
        this.places = places;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDiscription() {
        return discription;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }

    public int getNo_of_people() {
        return no_of_people;
    }

    public void setNo_of_people(int no_of_people) {
        this.no_of_people = no_of_people;
    }

//    public Boolean getVehicle() {
//        return vehicle;
//    }
//
//    public void setVehicle(Boolean vehicle) {
//        this.vehicle = vehicle;
//    }
}
