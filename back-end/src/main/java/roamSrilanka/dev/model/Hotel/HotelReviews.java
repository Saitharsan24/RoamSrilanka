package roamSrilanka.dev.model.Hotel;

import jakarta.persistence.*;

import java.util.Date;

@Table(name = "hotel_reviews")
@Entity(name = "HotelReviews")
public class HotelReviews {

    @Id
    @Column(name = "review_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reviewId;

    @Column(name = "request_id")
    private Integer requestId;

    @Column(name = "date")
    private Date date;

    @Column(name = "review")
    private String review;

    @Column(name = "rating")
    private Integer rating;

    public HotelReviews() {
    }

    public HotelReviews(Integer reviewId, Integer requestId, Date date, String review, Integer rating) {
        this.reviewId = reviewId;
        this.requestId = requestId;
        this.date = date;
        this.review = review;
        this.rating = rating;
    }

    public HotelReviews(Integer requestId, Date date, String review, Integer rating) {
        this.requestId = requestId;
        this.date = date;
        this.review = review;
        this.rating = rating;
    }

    public Integer getReviewId() {
        return reviewId;
    }

    public void setReviewId(Integer reviewId) {
        this.reviewId = reviewId;
    }

    public Integer getRequestId() {
        return requestId;
    }

    public void setRequestId(Integer requestId) {
        this.requestId = requestId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
