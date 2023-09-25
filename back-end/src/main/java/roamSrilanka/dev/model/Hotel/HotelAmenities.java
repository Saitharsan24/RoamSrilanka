package roamSrilanka.dev.model.Hotel;

import jakarta.persistence.*;

@Table (name = "HotelAmenities")
@Entity(name = "HotelAmenities")
public class HotelAmenities {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "amenity_id")
        private Integer amenityId;

        @Column(name = "amenities")
        private String amenities;

        @ManyToOne
        @JoinColumn(name = "hotel_id")
        private Hotels hotels;

        public HotelAmenities() {
        }

        public HotelAmenities(Integer amenityId, String amenities, Hotels hotels) {
                this.amenityId = amenityId;
                this.amenities = amenities;
                this.hotels = hotels;
        }

        public HotelAmenities(String amenities, Hotels hotels) {
                this.amenities = amenities;
                this.hotels = hotels;
        }

        public Integer getAmenityId() {
                return amenityId;
        }

        public void setAmenityId(Integer amenityId) {
                this.amenityId = amenityId;
        }

        public String getAmenities() {
                return amenities;
        }

        public void setAmenities(String amenities) {
                this.amenities = amenities;
        }

        public Hotels getHotels() {
                return hotels;
        }

        public void setHotels(Hotels hotels) {
                this.hotels = hotels;
        }
}
