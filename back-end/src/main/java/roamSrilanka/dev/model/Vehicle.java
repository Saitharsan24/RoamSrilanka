package roamSrilanka.dev.model;

import jakarta.persistence.*;
import org.hibernate.annotations.ValueGenerationType;

@Entity
@Table(name = "vehicle")

public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vehicleID")
    private Long vehicleID;

    @Column(name = "color")
    private String color;

    @Column(name = "model")
    private String model;

    @Column(name = "company")
    private String company;

    @Column(name = "seats")
    private int seats;

    @Column(name = "year")
    private int year;

    @Column(name = "image1")
    private String image1;

    @Column(name = "image2")
    private String image2;

    @Column(name = "image3")
    private String image3;

    @Column(name = "image4")
    private String image4;

    public Vehicle() {
    }

    public Vehicle(Long vehicleID, String color, String model, String company, int seats, int year, String image1, String image2, String image3, String image4) {
        this.vehicleID = vehicleID;
        this.color = color;
        this.model = model;
        this.company = company;
        this.seats = seats;
        this.year = year;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
    }

    public Vehicle(String color, String model, String company, int seats, int year, String image1, String image2, String image3, String image4) {
        this.color = color;
        this.model = model;
        this.company = company;
        this.seats = seats;
        this.year = year;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
    }

    public Long getVehicleID() {
        return vehicleID;
    }

    public void setVehicleID(Long vehicleID) {
        this.vehicleID = vehicleID;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getImage1() {
        return image1;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }

    public String getImage3() {
        return image3;
    }

    public void setImage3(String image3) {
        this.image3 = image3;
    }

    public String getImage4() {
        return image4;
    }

    public void setImage4(String image4) {
        this.image4 = image4;
    }
}
