//package roamSrilanka.dev.service.impl;
//
//import org.springframework.stereotype.Service;
//import roamSrilanka.dev.model.Vehicle;
//import roamSrilanka.dev.repository.VehicleRepository;
//import roamSrilanka.dev.service.VehicleService;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class VehicleServiceImpl implements VehicleService {
//
//    private final VehicleRepository vehicleRepository;
//
//    public VehicleServiceImpl(VehicleRepository vehicleRepository) {
//        this.vehicleRepository = vehicleRepository;
//    }
//
//    @Override
//    public List<Vehicle> findAllVehicle() {
//        return vehicleRepository.findAll();
//    }
//
//    @Override
//    public Optional<Vehicle> findbyId(Long vehicleID) {
//        return vehicleRepository.findById(vehicleID);
//    }
//
//    @Override
//    public Vehicle saveVehicle(Vehicle vehicle) {
//        return vehicleRepository.save(vehicle);
//    }
//
//    @Override
//    public Vehicle updateVehicle(Vehicle vehicle) {
//        return vehicleRepository.save(vehicle);
//    }
//
//    @Override
//    public void deleteVehicle(Long vehicleID) {
//        vehicleRepository.deleteById(vehicleID);
//    }
//}
