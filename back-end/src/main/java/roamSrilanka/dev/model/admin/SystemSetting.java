package roamSrilanka.dev.model.admin;


import jakarta.persistence.*;

@Table
@Entity(name = "system_setting")
public class SystemSetting {

    @Id
    @Column(name = "hotel_val_add")
    private Integer hotelValueAdded;

    @Column(name = "hotel_season_val_add")
    private Integer hotelSeasonalValueAdded;

    @Column(name = "hotel_cancel_fee")
    private Integer hotelCancellationFee;

    @Column(name = "hotel_company_commission")
    private Integer hotelCompanyCommission;

    @Column(name = "dirver_cancel_fee")
    private Integer driverCancellationFee;

    @Column(name = "driver_company_commission")
    private Integer driverCompanyCommission;

    @Column(name = "driver_perday_fee")
    private Integer driverPerDayFee;

    @Column(name = "driver_perday_km")
    private Integer driverPerDayKm;

    @Column(name = "driver_extraKm_fee")
    private Integer driverExtraKmFee;

    public  SystemSetting() {
    }

    public SystemSetting(Integer hotelValueAdded, Integer hotelSeasonalValueAdded, Integer hotelCancellationFee, Integer hotelCompanyCommission, Integer driverCancellationFee, Integer driverCompanyCommission, Integer driverPerDayFee, Integer driverPerDayKm, Integer driverExtraKmFee) {
        this.hotelValueAdded = hotelValueAdded;
        this.hotelSeasonalValueAdded = hotelSeasonalValueAdded;
        this.hotelCancellationFee = hotelCancellationFee;
        this.hotelCompanyCommission = hotelCompanyCommission;
        this.driverCancellationFee = driverCancellationFee;
        this.driverCompanyCommission = driverCompanyCommission;
        this.driverPerDayFee = driverPerDayFee;
        this.driverPerDayKm = driverPerDayKm;
        this.driverExtraKmFee = driverExtraKmFee;
    }

    public Integer getHotelValueAdded() {
        return hotelValueAdded;
    }

    public void setHotelValueAdded(Integer hotelValueAdded) {
        this.hotelValueAdded = hotelValueAdded;
    }

    public Integer getHotelSeasonalValueAdded() {
        return hotelSeasonalValueAdded;
    }

    public void setHotelSeasonalValueAdded(Integer hotelSeasonalValueAdded) {
        this.hotelSeasonalValueAdded = hotelSeasonalValueAdded;
    }

    public Integer getHotelCancellationFee() {
        return hotelCancellationFee;
    }

    public void setHotelCancellationFee(Integer hotelCancellationFee) {
        this.hotelCancellationFee = hotelCancellationFee;
    }

    public Integer getHotelCompanyCommission() {
        return hotelCompanyCommission;
    }

    public void setHotelCompanyCommission(Integer hotelCompanyCommission) {
        this.hotelCompanyCommission = hotelCompanyCommission;
    }

    public Integer getDriverCancellationFee() {
        return driverCancellationFee;
    }

    public void setDriverCancellationFee(Integer driverCancellationFee) {
        this.driverCancellationFee = driverCancellationFee;
    }

    public Integer getDriverCompanyCommission() {
        return driverCompanyCommission;
    }

    public void setDriverCompanyCommission(Integer driverCompanyCommission) {
        this.driverCompanyCommission = driverCompanyCommission;
    }

    public Integer getDriverPerDayFee() {
        return driverPerDayFee;
    }

    public void setDriverPerDayFee(Integer driverPerDayFee) {
        this.driverPerDayFee = driverPerDayFee;
    }

    public Integer getDriverPerDayKm() {
        return driverPerDayKm;
    }

    public void setDriverPerDayKm(Integer driverPerDayKm) {
        this.driverPerDayKm = driverPerDayKm;
    }

    public Integer getDriverExtraKmFee() {
        return driverExtraKmFee;
    }

    public void setDriverExtraKmFee(Integer driverExtraKmFee) {
        this.driverExtraKmFee = driverExtraKmFee;
    }

}

