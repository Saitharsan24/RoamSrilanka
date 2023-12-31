package roamSrilanka.dev.model.Hotel;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ser.std.StdKeySerializers;
import jakarta.persistence.*;

import java.util.Date;

@Table(name = "hotel_requests")
@Entity (name = "HotelRequests")
public class HotelRequest {
    @Id
    @Column(name="request_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer requestId;

    @Column(name="user_id")
    private Integer userId;

    @Column(name="hotel_id")
    private Integer hotelId;

    @Column(name="room_id")
    private Integer roomId;

    @Column(name="date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;

    @Column(name="from_date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date fromDate;

    @Column(name="to_date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date toDate;

    @Column(name="status")
    private String status;

    public HotelRequest() {
    }

    public HotelRequest(Integer requestId, Integer userId, Integer hotelId, Integer roomId, Date date, Date fromDate, Date toDate, String status) {
        this.requestId = requestId;
        this.userId = userId;
        this.hotelId = hotelId;
        this.roomId = roomId;
        this.date = date;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.status = status;
    }

    public HotelRequest(Integer userId, Integer hotelId, Integer roomId, Date date, Date fromDate, Date toDate, String status) {
        this.userId = userId;
        this.hotelId = hotelId;
        this.roomId = roomId;
        this.date = date;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.status = status;
    }

    public Integer getRequestId() {
        return requestId;
    }

    public void setRequestId(Integer requestId) {
        this.requestId = requestId;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer hotelId) {
        this.hotelId = hotelId;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    public Date getToDate() {
        return toDate;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
