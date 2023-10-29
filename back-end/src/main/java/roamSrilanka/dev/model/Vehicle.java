package roamSrilanka.dev.model;

import jakarta.persistence.*;
import org.hibernate.annotations.ValueGenerationType;

import javax.xml.crypto.Data;
import java.util.Date;

@Entity
@Table(name = "vehicle")

public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vehicleID")
    private Long vehicleID;

    @Column(name = "vehicle_number")
    private String vehicle_number;

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

    @Column(name = "status")
    private String status;

    @Column(name="feedback")
    private String feedback;

    @Column(name="insurance_no")
    private String insurance_no;

    @Column(name="insurance_company")
    private String insurance_company;

    @Column(name="insurance_sdate")
    private  Date insurance_sdate;

    @Column(name="insurance_edate")
    private Date insurance_edate;

    @Column(name="insurance_img")
    private String insurance_img;

//    @OneToOne
//    @MapsId
//    @JoinColumn(name = "vehicleID")
//    private Driver driver;

    public Vehicle() {
    }

    public Vehicle(Long vehicleID, String vehicle_number, String color, String model, String company, int seats, int year, String image1, String image2, String image3, String image4,String status,String feedback,String insurance_no,String insurance_company,Data insurance_sdate,Date insurance_edate,String insurance_img) {
        this.vehicle_number = vehicle_number;
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
        this.status = status;
        this.feedback = feedback;
        this.insurance_no = insurance_no;
        this.insurance_company = insurance_company;
        this.insurance_sdate = (Date) insurance_sdate;
        this.insurance_edate = insurance_edate;
        this.insurance_img = insurance_img;
    }

    public Vehicle(String vehicle_number, String color, String model, String company, int seats, int year, String image1, String image2, String image3, String image4,String status,String feedback,String insurance_no,String insurance_company,Data insurance_sdate,Date insurance_edate) {
        this.vehicle_number = vehicle_number;
        this.color = color;
        this.model = model;
        this.company = company;
        this.seats = seats;
        this.year = year;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.status = status;
        this.feedback = feedback;
        this.insurance_no = insurance_no;
        this.insurance_company = insurance_company;
        this.insurance_sdate = (Date) insurance_sdate;
        this.insurance_edate = insurance_edate;
        this.insurance_img = insurance_img;
    }

    public Long getVehicleID() {
        return vehicleID;
    }

    public void setVehicleID(Long vehicleID) {
        this.vehicleID = vehicleID;
    }

    public String getVehicle_number() {
        return vehicle_number;
    }

    public void setVehicle_number(String vehicle_number) {
        this.vehicle_number = vehicle_number;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;

    }

    public String getInsurance_no() {
        return insurance_no;
    }

    public void setInsurance_no(String insurance_no) {
        this.insurance_no = insurance_no;
    }

    public String getInsurance_company() {
        return insurance_company;
    }

    public void setInsurance_company(String insurance_company) {
        this.insurance_company = insurance_company;
    }

    public Date getInsurance_sdate() {
        return insurance_sdate;
    }

    public void setInsurance_sdate(Date insurance_sdate) {
        this.insurance_sdate = insurance_sdate;
    }

    public Date getInsurance_edate() {
        return insurance_edate;
    }

    public void setInsurance_edate(Date insurance_edate) {
        this.insurance_edate = insurance_edate;
    }

    public String getInsurance_img() {
        return insurance_img;
    }

    public void setInsurance_img(String insurance_img) {
        this.insurance_img = insurance_img;
    }


}
