package roamSrilanka.dev.model.Holidayplanner;

import jakarta.persistence.*;

@Entity(name = "EventImage")
@Table(name = "event_image")
public class EventImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "img_id")
    private Integer imageId;

    @Column(name = "event_no")
    private Integer eventId;

    @Column(name = "event_image")
    private String eventImage;

    public EventImage() {
    }

    public EventImage(Integer imageId, Integer eventId, String eventImage) {
        this.imageId = imageId;
        this.eventId = eventId;
        this.eventImage = eventImage;
    }

    public EventImage(Integer eventId, String eventImage) {
        this.eventId = eventId;
        this.eventImage = eventImage;
    }

    public Integer getImageId() {
        return imageId;
    }

    public void setImageId(Integer imageId) {
        this.imageId = imageId;
    }

    public Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        this.eventId = eventId;
    }

    public String getEventImage() {
        return eventImage;
    }

    public void setEventImage(String eventImage) {
        this.eventImage = eventImage;
    }
}
