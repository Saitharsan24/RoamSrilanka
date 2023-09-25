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

//    @ElementCollection
//    @Column(name = "hotel_images")
//    private List<File> hotelImages;
//
//    @ElementCollection
//    @Column(name = "hotel_amenities")
//    private ArrayList<String> hAmenities = new ArrayList<>();

//    @OneToMany(mappedBy = "hotels", cascade = CascadeType.ALL)
//    private List<HotelAmenities> hotelAmenities = new ArrayList<>();

//    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<HotelRooms> rooms;  // One-to-Many relationship with HotelRooms

    //Constructors
    public Hotels() {
    }

    public Hotels(String hotelName, Integer starRating, Double userRating, String description, String hotelType, String address, String city, Double price) {
        this.hotelName = hotelName;
        this.starRating = starRating;
        this.userRating = userRating;
        this.description = description;
        this.hotelType = hotelType;
        this.address = address;
        this.city = city;
        this.price = price;
    }

    public Hotels(Integer hotelId, String hotelName, Integer starRating, Double userRating, String description, String hotelType, String address, String city, Double price) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.starRating = starRating;
        this.userRating = userRating;
        this.description = description;
        this.hotelType = hotelType;
        this.address = address;
        this.city = city;
        this.price = price;
    }

    //    public Hotels(Integer hotelId, String hotelName, Integer starRating, Double userRating, String description, String hotelType, String address, String city, List<File> hotelImages, List<HotelAmenities> hotelAmenities) {
//        this.hotelId = hotelId;
//        this.hotelName = hotelName;
//        this.starRating = starRating;
//        this.userRating = userRating;
//        this.description = description;
//        this.hotelType = hotelType;
//        this.address = address;
//        this.city = city;
//        this.hotelImages = hotelImages;
//        this.hotelAmenities = hotelAmenities;
//    }
//
//    public Hotels(String hotelName, Integer starRating, Double userRating, String description, String hotelType, String address, String city, List<File> hotelImages, List<HotelAmenities> hotelAmenities) {
//        this.hotelName = hotelName;
//        this.starRating = starRating;
//        this.userRating = userRating;
//        this.description = description;
//        this.hotelType = hotelType;
//        this.address = address;
//        this.city = city;
//        this.hotelImages = hotelImages;
//        this.hotelAmenities = hotelAmenities;
//    }


    //Getters and Setters
//    public List<HotelRooms> getRooms() {
//        return rooms;
//    }
//
//    public void setRooms(List<HotelRooms> rooms) {
//        this.rooms = rooms;
//    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

//    public List<String> getHotelImages() {
//        return hotelImages;
//    }
//
//    public void setHotelImages(List<String> hotelImages) {
//        this.hotelImages = hotelImages;
//    }

   // public List<HotelAmenities> getHotelAmenities() {
      //  return hotelAmenities;
  //  }

    //public void setHotelAmenities(List<HotelAmenities> hotelAmenities) {
     //   this.hotelAmenities = hotelAmenities;
   // }
}


