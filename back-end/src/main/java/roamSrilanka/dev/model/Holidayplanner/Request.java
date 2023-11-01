package roamSrilanka.dev.model.Holidayplanner;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;

@Table(name = "hp_request")
@Entity
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "p_bookingID")
    private int p_bookingID;

    @Column(name = "toursitID")
    private int touristID;

    @Column(name = "packageID")
    private int packageID;

    @Column(name = "fromdate")
    private LocalDate fromdate;

//    @Column(name = "todate")
//    private LocalDate todate;

    @Column(name = "hotel_id")
    private int hotel_id;

    @Column(name = "guide_id")
    private int guide_id;

    @Column(name = "driver_id")
    private int driver_id;

    @Column(name = "status")
    private int status;

    public Request() {
    }

    public Request(int p_bookingID, int touristID, int packageID, LocalDate fromdate, int hotel_id, int guide_id, int driver_id, int status) {
        this.p_bookingID = p_bookingID;
        this.touristID = touristID;
        this.packageID = packageID;
        this.fromdate = fromdate;
//        this.todate = todate;
        this.hotel_id = hotel_id;
        this.guide_id = guide_id;
        this.driver_id = driver_id;
        this.status = status;
    }

    public Request(int touristID, int packageID, LocalDate fromdate, int hotel_id, int guide_id, int driver_id, int status) {
        this.touristID = touristID;
        this.packageID = packageID;
        this.fromdate = fromdate;
//        this.todate = todate;
        this.hotel_id = hotel_id;
        this.guide_id = guide_id;
        this.driver_id = driver_id;
        this.status = status;
    }

    public int getP_bookingID() {
        return p_bookingID;
    }

    public void setP_bookingID(int p_bookingID) {
        this.p_bookingID = p_bookingID;
    }

    public int getPackageID() {
        return packageID;
    }

    public void setPackageID(int packageID) {
        this.packageID = packageID;
    }

//    public LocalDate getTodate() {
//        return todate;
//    }
//
//    public void setTodate(LocalDate todate) {
//        this.todate = todate;
//    }

    public int getGuide_id() {
        return guide_id;
    }

    public void setGuide_id(int guide_id) {
        this.guide_id = guide_id;
    }

    public int getTouristID() {
        return touristID;
    }

    public void setTouristID(int touristID) {
        this.touristID = touristID;
    }

    public LocalDate getFromdate() {
        return fromdate;
    }

    public void setFromdate(LocalDate fromdate) {
        this.fromdate = fromdate;
    }

    public int getHotel_id() {
        return hotel_id;
    }

    public void setHotel_id(int hotel_id) {
        this.hotel_id = hotel_id;
    }

    public int getDriver_id() {
        return driver_id;
    }

    public void setDriver_id(int driver_id) {
        this.driver_id = driver_id;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
