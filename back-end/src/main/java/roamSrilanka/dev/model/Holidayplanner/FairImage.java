package roamSrilanka.dev.model.Holidayplanner;

import jakarta.persistence.*;

@Table(name = "fair_image")
@Entity(name = "FairImage")
public class FairImage {
    @Id
    @Column(name = "img_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer imageId;
    @Column(name = "fair_no")
    private Integer fairId;

    @Column(name = "fair_image")
    private String fairImage;

    public FairImage() {
    }

    public FairImage(Integer imageId, Integer fairId, String fairImage) {
        this.imageId = imageId;
        this.fairId = fairId;
        this.fairImage = fairImage;
    }

    public FairImage(Integer fairId, String fairImage) {
        this.fairId = fairId;
        this.fairImage = fairImage;
    }

    public Integer getImageId() {
        return imageId;
    }

    public void setImageId(Integer imageId) {
        this.imageId = imageId;
    }

    public Integer getFairId() {
        return fairId;
    }

    public void setFairId(Integer fairId) {
        this.fairId = fairId;
    }

    public String getFairImage() {
        return fairImage;
    }

    public void setFairImage(String fairImage) {
        this.fairImage = fairImage;
    }
}
