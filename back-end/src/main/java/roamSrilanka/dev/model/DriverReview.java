package roamSrilanka.dev.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "driverReview")
public class DriverReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long review_id;

    @Column(name = "tourist_name")
    private String tourist_name;

    @Column(name = "date")
    private Date date;

    @Column(name = "feedback")
    private String feedback;

    @Column(name = "user_id")
    private Long userId;

    public Long getReview_id() {
        return review_id;
    }

    public void setReview_id(Long review_id) {
        this.review_id = review_id;
    }

    public String getTourist_name() {
        return tourist_name;
    }

    public void setTourist_name(String tourist_name) {
        this.tourist_name = tourist_name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        userId = userId;
    }
}
