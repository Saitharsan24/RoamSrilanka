package roamSrilanka.dev.model;

import jakarta.persistence.*;

@Table(name = "hotels")
@Entity
public class Hotel {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    @Column(name = "hotel_id")
    private int hotelId;
    @Column(name = "hotel_name")
    private String hotelName;
    @Column(name = "location")
    private String location;
    @Column(name = "description")
    private String description;

    public Hotel() {
    }
    public Hotel(int hotelId, String hotelName, String location, String description) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.location = location;
        this.description = description;
    }
    public Hotel(String hotelName, String location, String description) {
        this.hotelName = hotelName;
        this.location = location;
        this.description = description;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
