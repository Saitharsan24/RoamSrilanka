package roamSrilanka.dev.model.Holidayplanner;

import jakarta.persistence.*;
import lombok.Getter;

import java.math.BigDecimal;

@Table(name = "packages")
@Entity
public class Packages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="packageid")
    private int packageID;

    @Column(name = "price")
    private BigDecimal price;
//    private List<String> places;
@Column(name = "package_name" )
    private String package_name;
@Column(name = "meals")
    private Boolean meals;
@Column(name = "trip_guide")
    private Boolean trip_guide;
@Column(name = "days")
    private int days;
@Column(name = "hotel_rating")
    private int hotel_rating;
@Column(name = "places")
    private String places;

@Column(name = "status")
private int status;


    public Packages() {
    }

    public Packages(int packageID, BigDecimal price, String package_name, Boolean meals, Boolean trip_guide, int days, int hotel_rating, String places, int status ) {
        this.packageID = packageID;
        this.price = price;
        this.package_name = package_name;
        this.meals = meals;
        this.trip_guide = trip_guide;
        this.days = days;
        this.hotel_rating = hotel_rating;
        this.places = places;
        this.status = status;
    }

    public Packages(BigDecimal price, String package_name, Boolean meals, Boolean trip_guide, int days, int hotel_rating, String places, int status) {
        this.price = price;
        this.package_name = package_name;
        this.meals = meals;
        this.trip_guide = trip_guide;
        this.days = days;
        this.hotel_rating = hotel_rating;
        this.places = places;
        this.status = status;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public void setDays(int days) {
        this.days = days;
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

    public Boolean getMeals() {
        return meals;
    }

    public void setMeals(Boolean meals) {
        this.meals = meals;
    }

    public int getPackageID() {
        return packageID;
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

    public int getDays() {
        return days;
    }

    public void setDays(Integer days) {
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
}