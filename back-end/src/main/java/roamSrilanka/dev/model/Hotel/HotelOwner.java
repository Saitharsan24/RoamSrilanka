package roamSrilanka.dev.model.Hotel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "HotelOwner")
@Table(name = "hotel_owner")
public class HotelOwner {
    @Id
    @Column(name = "owner_id")
    Integer ownerId;

    @Column(name = "owner_name")
    String ownerName;

    @Column(name = "owner_email")
    String ownerEmail;

    @Column(name = "owner_password")
    String ownerPassword;

    @Column(name = "owner_contact")
    String ownerContact;

    @Column(name = "owner_address")
    String ownerAddress;

    @Column(name = "nic")
    String nic;

    public HotelOwner() {
    }

    public HotelOwner(Integer ownerId, String ownerName, String ownerEmail, String ownerPassword, String ownerContact, String ownerAddress, String nic) {
        this.ownerId = ownerId;
        this.ownerName = ownerName;
        this.ownerEmail = ownerEmail;
        this.ownerPassword = ownerPassword;
        this.ownerContact = ownerContact;
        this.ownerAddress = ownerAddress;
        this.nic = nic;
    }

    public HotelOwner(String ownerName, String ownerEmail, String ownerPassword, String ownerContact, String ownerAddress, String nic) {
        this.ownerName = ownerName;
        this.ownerEmail = ownerEmail;
        this.ownerPassword = ownerPassword;
        this.ownerContact = ownerContact;
        this.ownerAddress = ownerAddress;
        this.nic = nic;
    }

    public Integer getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Integer ownerId) {
        this.ownerId = ownerId;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    public String getOwnerPassword() {
        return ownerPassword;
    }

    public void setOwnerPassword(String ownerPassword) {
        this.ownerPassword = ownerPassword;
    }

    public String getOwnerContact() {
        return ownerContact;
    }

    public void setOwnerContact(String ownerContact) {
        this.ownerContact = ownerContact;
    }

    public String getOwnerAddress() {
        return ownerAddress;
    }

    public void setOwnerAddress(String ownerAddress) {
        this.ownerAddress = ownerAddress;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }
}
