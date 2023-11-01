package roamSrilanka.dev.model.Holidayplanner;

import jakarta.persistence.*;

import java.time.LocalDate;

@Table(name = "hp_fairrequest")
@Entity
public class FairRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fairrequestID")
    private int fairrequestID;

    @Column(name = "touristID")
    private int touristID;

    @Column(name = "fair_no")
    private int fair_no;

    @Column(name = "fromdate")
    private LocalDate fromdate;

    @Column(name = "todate")
    private LocalDate todate;

    @Column(name = "status", columnDefinition = "int default 0")
    private int status;

    @Column(name = "amount")
    private int amount;

    public FairRequest() {
    }

    public FairRequest(int fairrequestID, int touristID, int fair_no, LocalDate fromdate, LocalDate todate, int status, int amount) {
        this.fairrequestID = fairrequestID;
        this.touristID = touristID;
        this.fair_no = fair_no;
        this.fromdate = fromdate;
        this.todate = todate;
        this.status = status;
        this.amount = amount;
    }

    public int getFairrequestID() {
        return fairrequestID;
    }

    public void setFairrequestID(int fairrequestID) {
        this.fairrequestID = fairrequestID;
    }

    public int getTouristID() {
        return touristID;
    }

    public void setTouristID(int touristID) {
        this.touristID = touristID;
    }

    public int getFair_no() {
        return fair_no;
    }

    public void setFair_no(int fair_no) {
        this.fair_no = fair_no;
    }

    public LocalDate getFromdate() {
        return fromdate;
    }

    public void setFromdate(LocalDate fromdate) {
        this.fromdate = fromdate;
    }

    public LocalDate getTodate() {
        return todate;
    }

    public void setTodate(LocalDate todate) {
        this.todate = todate;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
