package roamSrilanka.dev.model.Hotel;

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

    @Column(name="hotel_id")
    private String hotelId;

    @Column(name="room_id")
    private Integer roomId;

    @Column(name="date")
    private Date date;

    @Column(name="from_date")
    private Date fromDate;

    @Column(name="to_date")
    private Date toDate;

    @Column(name="status")
    private String status;
    public HotelRequest() {
    }

    public HotelRequest(String hotelId, Integer roomId, Date date, Date fromDate, Date toDate, String status) {
        this.hotelId = hotelId;
        this.roomId = roomId;
        this.date = date;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.status = status;
    }

    public HotelRequest(Integer requestId, String hotelId, Integer roomId, Date date, Date fromDate, Date toDate, String status) {
        this.requestId = requestId;
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

    public String gethotelId() {
        return hotelId;
    }

    public void sethotelId(String hotelId) {
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
