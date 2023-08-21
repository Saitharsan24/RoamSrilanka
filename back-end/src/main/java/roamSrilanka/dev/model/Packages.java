package roamSrilanka.dev.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Table(name = "packages")
@Entity
public class Packages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="packageID")
    private int packageID;
    @Column(name = "type")
    private String type;
    @Column(name = "price")
    private BigDecimal price;
//    private List<String> places;


    public Packages() {
    }

    public Packages(int packageID, String type, BigDecimal price) {
        this.packageID = packageID;
        this.type = type;
        this.price = price;
    }

    public Packages(String type, BigDecimal price) {
        this.type = type;
        this.price = price;
    }

    public int getPackageID() {
        return packageID;
    }

    public void setPackageID(int packageID) {
        this.packageID = packageID;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
