package roamSrilanka.dev.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import roamSrilanka.dev.model.Vehicle;
import roamSrilanka.dev.repository.VehicleRepository;
import roamSrilanka.dev.service.VehicleService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class VehicleController {

    private final VehicleService vehicleService;
    private VehicleRepository vehicleRepository;
    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    // working in insomnia
    @GetMapping("/vehicle")
    public List<Vehicle> findAllVehicle() {
        return vehicleService.findAllVehicle();
    }

    // working in insomnia
    @GetMapping("vehicle/{vehicleID}")
    public Optional<Vehicle> findVehicleById(@PathVariable("vehicleID") Long vehicleID) {
        return vehicleService.findbyId(vehicleID);
    }

    @GetMapping("/count")
    public ResponseEntity<Long> getRowCount() {
        long rowCount = vehicleService.getVehicleCount();
        return ResponseEntity.ok(rowCount);
    }


    @PostMapping("/addVehicle")
    public Vehicle saveVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.saveVehicle(vehicle);
    }

    @PutMapping
    public Vehicle updateVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.updateVehicle(vehicle);
    }

    @DeleteMapping("deleteVehicle/{vehicleID}")
    public void deleteVehicle(@PathVariable("vehicleID") Long vehicleID) {
        vehicleService.deleteVehicle(vehicleID);
    }
}