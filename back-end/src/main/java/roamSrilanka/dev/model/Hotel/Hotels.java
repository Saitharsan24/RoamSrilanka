package roamSrilanka.dev.model.Hotel;

import jakarta.persistence.*;

import java.util.List;
import java.util.Map;

@Table
@Entity(name = "Hotels")
public class Hotels {

    @Id
    @Column(name="hotel_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer hotelId;

    @Column(name="hotel_name")
    private String hotelName;

    @Column(name="star_rating")
    private Integer starRating;

    @Column(name="user_rating")
    private Double userRating;

    @Column(name = "description")
    private String description;

    @Column(name = "hotel_type")
    private String hotelType;

    @Column(name = "address")
    private String address;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "latitude")
    private Double latitude;

    @ElementCollection
    @Column(name = "hotel_amenities")
    private List<String> hotelAmenities;

    @ElementCollection
    @Column(name = "hotel_images")
    private List<String> hotelImages;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<HotelRooms> rooms;  // One-to-Many relationship with HotelRooms

    //Constructors
    public Hotels() {
    }

    public Hotels(String hotelName, Integer starRating, Double userRating, String description, String hotelType, String address, Double longitude, Double latitude, List<String> hotelAmenities, List<String> hotelImages) {
        this.hotelName = hotelName;
        this.starRating = starRating;
        this.userRating = userRating;
        this.description = description;
        this.hotelType = hotelType;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.hotelAmenities = hotelAmenities;
        this.hotelImages = hotelImages;
    }

    public Hotels(Integer hotelId, String hotelName, Integer starRating, Double userRating, String description, String hotelType, String address, Double longitude, Double latitude, List<String> hotelAmenities, List<String> hotelImages) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.starRating = starRating;
        this.userRating = userRating;
        this.description = description;
        this.hotelType = hotelType;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.hotelAmenities = hotelAmenities;
        this.hotelImages = hotelImages;
    }

    public Hotels(Integer hotelId, String hotelName, Integer starRating, String description, String hotelType, String address, Double longitude, Double latitude, List<String> hotelAmenities, List<String> hotelImages) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.starRating = starRating;
        this.description = description;
        this.hotelType = hotelType;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.hotelAmenities = hotelAmenities;
        this.hotelImages = hotelImages;
    }

    //Getters and Setters
    public List<HotelRooms> getRooms() {
        return rooms;
    }

    public void setRooms(List<HotelRooms> rooms) {
        this.rooms = rooms;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer hotelId) {
        this.hotelId = hotelId;
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

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public List<String> getHotelAmenities() {
        return hotelAmenities;
    }

    public void setHotelAmenities(List<String> hotelAmenities) {
        this.hotelAmenities = hotelAmenities;
    }

    public List<String> getHotelImages() {
        return hotelImages;
    }

    public void setHotelImages(List<String> hotelImages) {
        this.hotelImages = hotelImages;
    }
}

