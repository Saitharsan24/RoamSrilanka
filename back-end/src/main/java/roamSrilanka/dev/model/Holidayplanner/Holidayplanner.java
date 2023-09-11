package roamSrilanka.dev.model.Holidayplanner;

import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.ColumnDefault;

import java.util.Date;

@Table(name="holidayplanner")
@Entity
public class Holidayplanner {
    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(name="planner_name")
    private String plannerName;

    @Column(name="date_of_birth")
    private Date date;

    @Getter
    @Column(name="contact_no")
    private Integer contactNo;

    @Column (name="email")
    private String email;

    @Column(name="nic")
    private String nic;

    @Column (name="image")
    private  String image;

    @Column(name="gender")
    private String gender;

    @Column(name="address")
    private String address;



    @Column(name = "status", columnDefinition = "VARCHAR(255) DEFAULT '1'")
    private String status;



    @Column(name="password")
    private String password;

    public Holidayplanner(){

    }

    public Holidayplanner(String plannerName, Date date, Integer contactNo, String email, String nic, String image, String gender, String address,String status ,String password) {
        this.plannerName = plannerName;
        this.date = date;
        this.contactNo = contactNo;
        this.email = email;
        this.nic = nic;
        this.image = image;
        this.gender = gender;
        this.address = address;
        this.status = status;
        this.password = password;
    }

    public Holidayplanner(Integer userId, String plannerName, Date date, Integer contactNo, String email, String nic, String image, String gender, String address,String status , String password) {
        this.userId = userId;
        this.plannerName = plannerName;
        this.date = date;
        this.contactNo = contactNo;
        this.email = email;
        this.nic = nic;
        this.image = image;
        this.gender = gender;
        this.address = address;
        this.status = status;
        this.password = password;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getPlannerName() {
        return plannerName;
    }

    public void setPlannerName(String plannerName) {
        this.plannerName = plannerName;
    }

    public void setContactNo(Integer contactNo) {
        this.contactNo = contactNo;
    }

    public Integer getContactNo() {
        return contactNo;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getNic() {
        return nic;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress() {
        return address;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
