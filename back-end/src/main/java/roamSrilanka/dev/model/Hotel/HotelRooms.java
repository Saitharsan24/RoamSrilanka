package roamSrilanka.dev.model.Hotel;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.List;

@Table
@Entity
public class HotelRooms {

    @Id
    @Column(name = "room_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roomId;

//    @ManyToOne(fetch = FetchType.LAZY) // Many-to-One relationship with Hotels
//    @JoinColumn(name = "hotel_id", nullable = false, insertable = false, updatable = false)
//    private Hotels hotel; // Reference to the hotel this room belongs to

    @ManyToOne
    @MapsId
    @JoinColumn(name = "hotel_id")
    private Hotels hotels;

    @Column(name = "room_type")
    private String roomType;

    @Column(name = "occupancy")
    private Integer occupancy;

    @Column(name = "price")
    private Double price;

    @Getter
    @Column(name = "no_of_beds")
    private Integer noOfBeds;

    @Column(name = "policy_bathroom")
    private String policyBathroom;

    @Column(name = "policy_bedroom")
    private String policyBedroom;

    @Column(name = "policy_foodanddrink")
    private String policyFoodanddrink;

    @Column(name = "policy_internet")
    private String policyInternet;

    @ElementCollection
    @Column(name = "amenities")
    private List<String> amenities;

    @ElementCollection
    @Column(name = "images")
    private List<String> images;


    //Constructors
    public HotelRooms() {
    }

    public HotelRooms(Integer roomId, Integer hotelId, String roomType, Integer occupancy, Double price, Integer noOfBeds, String policyBathroom, String policyBedroom, String policyFoodanddrink, String policyInternet, List<String> amenities, List<String> images) {
        this.roomId = roomId;
        this.hotels = hotels;
        this.roomType = roomType;
        this.occupancy = occupancy;
        this.price = price;
        this.noOfBeds = noOfBeds;
        this.policyBathroom = policyBathroom;
        this.policyBedroom = policyBedroom;
        this.policyFoodanddrink = policyFoodanddrink;
        this.policyInternet = policyInternet;
        this.amenities = amenities;
        this.images = images;
    }

    public HotelRooms(Integer hotelId, String roomType, Integer occupancy, Double price, Integer noOfBeds, String policyBathroom, String policyBedroom, String policyFoodanddrink, String policyInternet, List<String> amenities, List<String> images) {
        this.hotelId = hotelId;
        this.roomType = roomType;
        this.occupancy = occupancy;
        this.price = price;
        this.noOfBeds = noOfBeds;
        this.policyBathroom = policyBathroom;
        this.policyBedroom = policyBedroom;
        this.policyFoodanddrink = policyFoodanddrink;
        this.policyInternet = policyInternet;
        this.amenities = amenities;
        this.images = images;
    }

    public HotelRooms(String roomType, Integer occupancy, Double price, Integer noOfBeds, List<String> amenities, List<String> images) {
        this.roomType = roomType;
        this.occupancy = occupancy;
        this.price = price;
        this.noOfBeds = noOfBeds;
        this.amenities = amenities;
        this.images = images;
    }

    //Getters and Setters
    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

//    public Hotels getHotel() {
//        return hotel;
//    }
//
//    public void setHotel(Hotels hotel) {
//        this.hotel = hotel;
//    }


    public String getPolicyBathroom() {
        return policyBathroom;
    }

    public void setPolicyBathroom(String policyBathroom) {
        this.policyBathroom = policyBathroom;
    }

    public String getPolicyBedroom() {
        return policyBedroom;
    }

    public void setPolicyBedroom(String policyBedroom) {
        this.policyBedroom = policyBedroom;
    }

    public String getPolicyFoodanddrink() {
        return policyFoodanddrink;
    }

    public void setPolicyFoodanddrink(String policyFoodanddrink) {
        this.policyFoodanddrink = policyFoodanddrink;
    }

    public String getPolicyInternet() {
        return policyInternet;
    }

    public void setPolicyInternet(String policyInternet) {
        this.policyInternet = policyInternet;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotels(Hotels hotels) {
        this.hotels = hotels;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public Integer getOccupancy() {
        return occupancy;
    }

    public void setOccupancy(Integer occupancy) {
        this.occupancy = occupancy;
    }

    public void setNoOfBeds(Integer noOfBeds) {
        this.noOfBeds = noOfBeds;
    }

    public Integer getNoOfBeds() {
        return noOfBeds;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<String> getAmenities() {
        return amenities;
    }

    public void setAmenities(List<String> amenities) {
        this.amenities = amenities;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }
}
