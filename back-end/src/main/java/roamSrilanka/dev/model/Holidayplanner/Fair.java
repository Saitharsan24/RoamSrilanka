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

    @Column(name = "status", columnDefinition = "int default 0")
    private int status;

    public Fair() {
    }

    public Fair(int fairId, String fairname, float rent, String description, int status) {
        this.fairId = fairId;
        this.fairname = fairname;
        this.rent = rent;
        this.description = description;
        this.status = status;
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

    public void setFairname(String fairname) {
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

    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
}
