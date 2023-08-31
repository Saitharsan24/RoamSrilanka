package roamSrilanka.dev.model.Hotel;

import jakarta.persistence.*;

import java.util.List;

@Table
@Entity
public class HotelRooms {

    @Id
    @Column(name = "room_id")
    private Integer roomId;

    @ManyToOne(fetch = FetchType.LAZY) // Many-to-One relationship with Hotels
    @JoinColumn(name = "hotel_id", nullable = false, insertable = false, updatable = false)
    private Hotels hotel; // Reference to the hotel this room belongs to

    @Column(name = "hotel_id")
    private Integer hotelId;

    @Column(name = "room_type")
    private String roomType;

    @Column(name = "occupancy")
    private Integer occupancy;

    @Column(name = "price")
    private Double price;

    @Column(name = "description")
    private String description;

    @Column(name = "availability")
    private Boolean availability;

    @ElementCollection
    @Column(name = "policies")
    private List<String> policies;

    @ElementCollection
    @Column(name = "amenities")
    private List<String> amenities;

    @ElementCollection
    @Column(name = "images")
    private List<String> images;


    //Constructors
    public HotelRooms() {
    }

    public HotelRooms(Integer roomId, Integer hotelId, String roomType, Integer occupancy, Double price, String description, Boolean availability, List<String> policies, List<String> amenities, List<String> images) {
        this.roomId = roomId;
        this.hotelId = hotelId;
        this.roomType = roomType;
        this.occupancy = occupancy;
        this.price = price;
        this.description = description;
        this.availability = availability;
        this.policies = policies;
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

    public Hotels getHotel() {
        return hotel;
    }

    public void setHotel(Hotels hotel) {
        this.hotel = hotel;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer hotelId) {
        this.hotelId = hotelId;
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

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }

    public List<String> getPolicies() {
        return policies;
    }

    public void setPolicies(List<String> policies) {
        this.policies = policies;
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
