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

    @Column(name = "room_id")
    private Integer roomId;

    @Column(name = "date")
    private Date date;

    @Column(name = "review")
    private String review;

    @Column(name = "rating")
    private Integer rating;

    public HotelReviews() {
    }

    public HotelReviews(Integer requestId, Date date, String review, Integer rating, Integer roomId) {
        this.requestId = requestId;
        this.date = date;
        this.review = review;
        this.rating = rating;
        this.roomId = roomId;
    }

    public HotelReviews(Integer reviewId, Integer requestId, Date date, String review, Integer rating, Integer roomId) {
        this.reviewId = reviewId;
        this.requestId = requestId;
        this.date = date;
        this.review = review;
        this.rating = rating;
        this.roomId = roomId;
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

    public Integer getRoomId() {
    	return roomId;
    }

    public void setRoomId(Integer roomId) {
    	this.roomId = roomId;
    }
}
