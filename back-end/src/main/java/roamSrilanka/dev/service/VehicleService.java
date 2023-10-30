package roamSrilanka.dev.service;

import roamSrilanka.dev.model.Vehicle;

import java.util.List;
import java.util.Optional;

public interface VehicleService {
    List<Vehicle> findAllVehicle();
    Optional<Vehicle> findbyId(Long vehicleID);
    Vehicle saveVehicle(Vehicle vehicle);
    Vehicle updateVehicle(Vehicle vehicle);
    void deleteVehicle(Long vehicleID);


    long getVehicleCount();

    List<Vehicle> findVehicleUserById(Long userId);
    Vehicle saveFeedback(Vehicle vehicle);

}
