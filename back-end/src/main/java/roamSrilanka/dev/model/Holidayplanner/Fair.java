package roamSrilanka.dev.model.Holidayplanner;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "fair")
public class Fair {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fair_no")
    private int fairId;

    @Column(name = "fairname")
    private String fairname;

    @Column(name = "rent")
    private float rent;

    @Column(name = "description" ,columnDefinition = "VARCHAR(2000)")
    private String description;

    @ElementCollection
    @Column(name = "fair_images")
    private List<String> fairImages;

    public Fair() {
    }

    public Fair(int fairId, String fairname, float rent, String description, List<String> fairImages) {
        this.fairId = fairId;
        this.fairname = fairname;
        this.rent = rent;
        this.description = description;
        this.fairImages = fairImages;
    }

    public int getFairId() {
        return fairId;
    }

    public void setFairId(int fairId) {
        this.fairId = fairId;
    }

    public String getFairname() {
        return fairname;
    }

    public void setName(String fairname) {
        this.fairname = fairname;
    }

    public float getRent() {
        return rent;
    }

    public void setRent(float rent) {
        this.rent = rent;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getFairImages() {
        return fairImages;
    }

    public void setFairImages(List<String> fairImages) {
        this.fairImages = fairImages;
    }
}
