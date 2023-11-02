package roamSrilanka.dev.model.Hotel;

import jakarta.persistence.*;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Table
@Entity(name = "Hotels")
public class Hotels {
    @Id
    @Column(name = "hotel_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer hotelId;

    @Column(name = "owner_id")
    private Integer ownerId;

    @Column(name = "hotel_name")
    private String hotelName;

    @Column(name = "star_rating")
    private Integer starRating;

    @Column(name = "user_rating")
    private Double userRating;

    @Column(name = "description")
    private String description;

    @Column(name = "hotel_type")
    private String hotelType;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "price")
    private Double price;

    @Column(name = "hotel_availability")
    private Boolean hotelAvailability;

    @Column(name = "status")
    private String status;

    //Constructors
    public Hotels() {
    }

    public Hotels(Integer hotelId, Integer ownerId, String hotelName, Integer starRating, Double userRating, String description, String hotelType, String address, String city, Double price, Boolean hotelAvailability, String status) {
        this.hotelId = hotelId;
        this.ownerId = ownerId;
        this.hotelName = hotelName;
        this.starRating = starRating;
        this.userRating = userRating;
        this.description = description;
        this.hotelType = hotelType;
        this.address = address;
        this.city = city;
        this.price = price;
        this.hotelAvailability = hotelAvailability;
        this.status = status;
    }

    public Hotels(Integer ownerId, String hotelName, Integer starRating, Double userRating, String description, String hotelType, String address, String city, Double price, Boolean hotelAvailability,String status) {
        this.ownerId = ownerId;
        this.hotelName = hotelName;
        this.starRating = starRating;
        this.userRating = userRating;
        this.description = description;
        this.hotelType = hotelType;
        this.address = address;
        this.city = city;
        this.price = price;
        this.hotelAvailability = hotelAvailability;
        this.status = status;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer hotelId) {
        this.hotelId = hotelId;
    }

    public Integer getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Integer ownerId) {
        this.ownerId = ownerId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public Integer getStarRating() {
        return starRating;
    }

    public void setStarRating(Integer starRating) {
        this.starRating = starRating;
    }

    public Double getUserRating() {
        return userRating;
    }

    public void setUserRating(Double userRating) {
        this.userRating = userRating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHotelType() {
        return hotelType;
    }

    public void setHotelType(String hotelType) {
        this.hotelType = hotelType;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getHotelAvailability() {
        return hotelAvailability;
    }

    public void setHotelAvailability(Boolean hotelAvailability) {
        this.hotelAvailability = hotelAvailability;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}


