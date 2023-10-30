package roamSrilanka.dev.model.guide;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "guide")
public class Guide {
    @Id
    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "nic")
    private String nic;

    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "guide_availability")
    private Boolean guideAvailability;

    @Column(name = "sltda_no")
    private String sltdaNo;

    @Column(name = "address")
    private String address;

    public Guide() {
    }

    public Guide(Integer userId, String nic, String phoneNo, Boolean guideAvailability, String sltdaNo, String address) {
        this.userId = userId;
        this.nic = nic;
        this.phoneNo = phoneNo;
        this.guideAvailability = guideAvailability;
        this.sltdaNo = sltdaNo;
        this.address = address;
    }

    public Guide(String nic, String phoneNo, Boolean guideAvailability, String sltdaNo, String address) {
        this.nic = nic;
        this.phoneNo = phoneNo;
        this.guideAvailability = guideAvailability;
        this.sltdaNo = sltdaNo;
        this.address = address;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
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

    public Boolean getGuideAvailability() {
        return guideAvailability;
    }

    public void setGuideAvailability(Boolean guideAvailability) {
        this.guideAvailability = guideAvailability;
    }

    public String getSltdaNo() {
        return sltdaNo;
    }

    public void setSltdaNo(String sltdaNo) {
        this.sltdaNo = sltdaNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
