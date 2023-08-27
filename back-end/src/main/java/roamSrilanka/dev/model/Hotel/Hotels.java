package roamSrilanka.dev.model.Hotel;

import jakarta.persistence.*;

@Table
@Entity(name = "Hotels")
public class Hotels {

    @Id
    @Column(name="hotel_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int hotelId;

    @Column(name="hotel_name")
    private String hotelName;

    @Column(name="star_rating")
    private int starRating;

    @Column(name = "description")
    private String description;

    @Column(name = "hotel_type")
    private String hotelType;

    @Column(name = "address")
    private String address;

    @Column(columnDefinition ="jsonb" ,name = "geo_coordinates")
    private String coordinates;

    @Column(columnDefinition ="jsonb" ,name = "hotel_amenities")
    private String hotelAmenities;

    @Column(columnDefinition ="jsonb" ,name = "hotel_images")
    private String hotelImages;

    public Hotels(){
    }

    public int getHotelId() {
        return hotelId;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public int getStarRating() {
        return starRating;
    }

    public void setStarRating(int starRating) {
        this.starRating = starRating;
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

    public String getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(String coordinates) {
        this.coordinates = coordinates;
    }

    public String getHotelAmenities() {
        return hotelAmenities;
    }

    public void setHotelAmenities(String hotelAmenities) {
        this.hotelAmenities = hotelAmenities;
    }

    public String getHotelImages() {
        return hotelImages;
    }

    public void setHotelImages(String hotelImages) {
        this.hotelImages = hotelImages;
    }

    public Hotels(int hotelId, String hotelName, int starRating, String description, String hotelType, String address, String coordinates, String hotelAmenities, String hotelImages) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.starRating = starRating;
        this.description = description;
        this.hotelType = hotelType;
        this.address = address;
        this.coordinates = coordinates;
        this.hotelAmenities = hotelAmenities;
        this.hotelImages = hotelImages;
    }

    public Hotels(String hotelName, int starRating, String description, String hotelType, String address, String coordinates, String hotelAmenities, String hotelImages) {
        this.hotelName = hotelName;
        this.starRating = starRating;
        this.description = description;
        this.hotelType = hotelType;
        this.address = address;
        this.coordinates = coordinates;
        this.hotelAmenities = hotelAmenities;
        this.hotelImages = hotelImages;
    }


}
