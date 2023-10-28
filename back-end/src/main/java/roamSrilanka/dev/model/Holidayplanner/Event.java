package roamSrilanka.dev.model.Holidayplanner;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_no")
    private int eventId;

    @Column(name = "name")
    private String name;

    @Column(name = "date")
    private String date; // LocalDate date

    @Column(name = "days")
    private int days;

    @Column(name = "places")
    private String places;

    @Column(name = "description",columnDefinition = "VARCHAR(2000)")
    private String description;


    @ElementCollection
    @Column(name = "event_images")
    private List<String> eventImages;

    public Event() {
    }

    public Event(int eventId, String name, String date, int days, String places, String description, List<String> eventImages) {
        this.eventId = eventId;
        this.name = name;
        this.date = date;
        this.days = days;
        this.places = places;
        this.description = description;
        this.eventImages = eventImages;
    }

    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }

    public String getPlaces() {
        return places;
    }

    public void setPlaces(String places) {
        this.places = places;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getEventImages() {
        return eventImages;
    }

    public void setEventImages(List<String> eventImages) {
        this.eventImages = eventImages;
    }

    @Table(name = "packages")
    @Entity
    public static class Packages {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="packageID")
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

        public Packages() {
        }

        public Packages(int packageID, BigDecimal price, String package_name, Boolean meals, Boolean trip_guide, int days, int hotel_rating, String places) {
            this.packageID = packageID;
            this.price = price;
            this.package_name = package_name;
            this.meals = meals;
            this.trip_guide = trip_guide;
            this.days = days;
            this.hotel_rating = hotel_rating;
            this.places = places;
        }

        public Packages(BigDecimal price, String package_name, Boolean meals, Boolean trip_guide, int days, int hotel_rating, String places) {
            this.price = price;
            this.package_name = package_name;
            this.meals = meals;
            this.trip_guide = trip_guide;
            this.days = days;
            this.hotel_rating = hotel_rating;
            this.places = places;
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
}
