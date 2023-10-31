package roamSrilanka.dev.model.guide;

import jakarta.persistence.*;

@Entity
@Table(name = "guide")
public class Guide {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(name = "nic")
    private String nic;

    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "guide_availability", columnDefinition = "int default 0")
    private int guideAvailability;

    @Column(name = "sltda_no")
    private String sltdaNo;

    @Column(name = "address")
    private String address;

    @Column(name = "guide_name")
    private String guideName;

    @Column(name = "specialization")
    private String specialization;

    @Column(name = "experience")
    private String experience;

    @Column(name = "Description")
    private String Description;

    @Column(name = "fees")
        private int fee;

    @Column(name = "rating")
        private float rating;

    public Guide() {
    }

    public Guide(Integer userId, String nic, String phoneNo, int guideAvailability, String sltdaNo, String address, String guideName, String specialization, String experience, String description, int fee, float rating) {
        this.userId = userId;
        this.nic = nic;
        this.phoneNo = phoneNo;
        this.guideAvailability = guideAvailability;
        this.sltdaNo = sltdaNo;
        this.address = address;
        this.guideName = guideName;
        this.specialization = specialization;
        this.experience = experience;
        this.Description = description;
        this.fee = fee;
        this.rating = rating;
    }

    public Guide(String nic, String phoneNo, int guideAvailability, String sltdaNo, String address, String guideName, String specialization, String experience, String description, int fee, float rating) {
        this.nic = nic;
        this.phoneNo = phoneNo;
        this.guideAvailability = guideAvailability;
        this.sltdaNo = sltdaNo;
        this.address = address;
        this.guideName = guideName;
        this.specialization = specialization;
        this.experience = experience;
        this.Description = description;
        this.fee = fee;
        this.rating = rating;

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

    public int getGuideAvailability() {
        return guideAvailability;
    }

    public void setGuideAvailability(int guideAvailability) {
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


         public String getGuideName() {
            return guideName;
        }

        public void setGuideName(String guideName) {
            this.guideName = guideName;
        }

        public String getSpecialization() {
            return specialization;
        }

        public void setSpecialization(String specialization) {
            this.specialization = specialization;
        }

        public String getExperience() {
            return experience;
        }

        public void setExperience(String experience) {
            this.experience = experience;
        }

        public String getDescription() {
            return Description;
        }

        public void setDescription(String description) {
            Description = description;
        }

        public int getFee() {
            return fee;
        }

        public void setFee(int fee) {
            this.fee = fee;
        }

        public float getRating() {
            return rating;
        }

        public void setRating(float rating) {
            this.rating = rating;
        }

}
