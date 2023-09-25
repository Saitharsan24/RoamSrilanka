package roamSrilanka.dev.model.Hotel;

import jakarta.persistence.*;

@Table(name = "hotel_image")
@Entity(name = "HotelImage")
public class HotelImage {
    @Column(name = "hotel_id")
    private Integer hotelId;

    @Id
    @Column(name = "image_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer imageId;

    @Column(name = "hotel_image")
    private String hotelImage;

    public HotelImage() {
    }

    public HotelImage(Integer hotelId, Integer imageId, String hotelImage) {
        this.hotelId = hotelId;
        this.imageId = imageId;
        this.hotelImage = hotelImage;
    }

    public HotelImage(Integer hotelId, String hotelImage) {
        this.hotelId = hotelId;
        this.hotelImage = hotelImage;
    }

    public Integer getImageId() {
        return imageId;
    }

    public void setImageId(Integer imageId) {
        this.imageId = imageId;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer hotelId) {
        this.hotelId = hotelId;
    }

    public String getHotelImage() {
        return hotelImage;
    }

    public void setHotelImage(String hotelImage) {
        this.hotelImage = hotelImage;
    }
}
