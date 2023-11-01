package roamSrilanka.dev.model;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.Date;

@Table(name = "driver")
@Entity
public class Driver {
    @Getter
    @Id
    @Column(name = "user_id")
    private int userId;

    @Column(name="nic")
    private String nic;

    @Column(name="phone_no")
    private String phoneNo;

    @Column(name="bank_acc_no")
    private String bankAccNo;

    @Column(name="SLTDA_no")
    private String SLTDANo;

    @Column(name="Date_of_birth")
    private Date dateOfBirth;

    @Column(name="Address")
    private String address;

    @Column(name = "license_no")
    private String licenseNo;

    @Column(name = "license_exp_date")
    private Date licenseExpDate;

    @Column(name = "status")
    private String status;

    @Column(name = "license_image")
    private String licenseImage;

    @Column(name = "payment")
    private Long payment;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    //    @OneToOne(mappedBy = "vehicle", cascade = CascadeType.ALL)
   //    private Vehicle vehicle;
    public Driver() {
    }

    public Driver(int userId, String nic, String phoneNo, String bankAccNo, String SLTDANo, Date dateOfBirth, String address, String licenseNo, Date licenseExpDate, String status, String licenseImage) {
        this.userId = userId;
        this.nic = nic;
        this.phoneNo = phoneNo;
        this.bankAccNo = bankAccNo;
        this.SLTDANo = SLTDANo;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.licenseNo = licenseNo;
        this.licenseExpDate = licenseExpDate;
        this.status = status;
        this.licenseImage = licenseImage;
    }

    public Driver(int userId, String nic, String phoneNo, String bankAccNo, String SLTDANo, Date dateOfBirth, String address, String licenseNo, Date licenseExpDate, String status) {
        this.userId = userId;
        this.nic = nic;
        this.phoneNo = phoneNo;
        this.bankAccNo = bankAccNo;
        this.SLTDANo = SLTDANo;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.licenseNo = licenseNo;
        this.licenseExpDate = licenseExpDate;
        this.status = status;
    }


    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getBankAccNo() {
        return bankAccNo;
    }

    public void setBankAccNo(String bankAccNo) {
        this.bankAccNo = bankAccNo;
    }

    public String getSLTDANo() {
        return SLTDANo;
    }

    public void setSLTDANo(String SLTDANo) {
        this.SLTDANo = SLTDANo;
    }



    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    public String getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
    }

    public Date getLicenseExpDate() {
        return licenseExpDate;
    }

    public void setLicenseExpDate(Date licenseExpDate) {
        this.licenseExpDate = licenseExpDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public String getLicenseImage() {
        return licenseImage;
    }

    public void setLicenseImage(String licenseImage) {
        this.licenseImage = licenseImage;
    }





}
