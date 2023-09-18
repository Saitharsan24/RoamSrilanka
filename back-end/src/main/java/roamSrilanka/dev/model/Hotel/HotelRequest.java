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

    @Column(name="hotel_name")
    private String hotelName;

    @Column(name="room_type")
    private String roomType;

    @Column(name="date")
    private Date date;

    @Column(name="no_of_rooms")
    private Integer noOfRooms;

    @Column(name="tourist_name")
    private String touristName;

    @Column(name="tourist_email")
    private String touristEmail;

    @Column(name="tourist_phone")
    private String touristPhone;

    @Column(name="tourist_message")
    private String touristMessage;

    @Column(name="status")
    private String status;
    public HotelRequest() {
    }

    public HotelRequest(Integer requestId, String hotelName, String roomType, Date date, Integer noOfRooms, String touristName, String touristEmail, String touristPhone, String touristMessage, String status) {
        this.requestId = requestId;
        this.hotelName = hotelName;
        this.roomType = roomType;
        this.date = date;
        this.noOfRooms = noOfRooms;
        this.touristName = touristName;
        this.touristEmail = touristEmail;
        this.touristPhone = touristPhone;
        this.touristMessage = touristMessage;
        this.status = status;
    }

    public HotelRequest(String hotelName, String roomType, Date date, Integer noOfRooms, String touristName, String touristEmail, String touristPhone, String touristMessage, String status) {
        this.hotelName = hotelName;
        this.roomType = roomType;
        this.date = date;
        this.noOfRooms = noOfRooms;
        this.touristName = touristName;
        this.touristEmail = touristEmail;
        this.touristPhone = touristPhone;
        this.touristMessage = touristMessage;
        this.status = status;
    }

    public Integer getRequestId() {
        return requestId;
    }

    public void setRequestId(Integer requestId) {
        this.requestId = requestId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getNoOfRooms() {
        return noOfRooms;
    }

    public void setNoOfRooms(Integer noOfRooms) {
        this.noOfRooms = noOfRooms;
    }

    public String getTouristName() {
        return touristName;
    }

    public void setTouristName(String touristName) {
        this.touristName = touristName;
    }

    public String getTouristEmail() {
        return touristEmail;
    }

    public void setTouristEmail(String touristEmail) {
        this.touristEmail = touristEmail;
    }

    public String getTouristPhone() {
        return touristPhone;
    }

    public void setTouristPhone(String touristPhone) {
        this.touristPhone = touristPhone;
    }

    public String getTouristMessage() {
        return touristMessage;
    }

    public void setTouristMessage(String touristMessage) {
        this.touristMessage = touristMessage;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
