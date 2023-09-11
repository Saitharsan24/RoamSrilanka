package roamSrilanka.dev.controller;

import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Vehicle;
import roamSrilanka.dev.service.VehicleService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class VehicleController {

    private final VehicleService vehicleService;

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

     //add working in insomnia
     @PostMapping("/addVehicle")
     public Vehicle saveVehicle(@RequestBody Vehicle vehicle) { return vehicleService.saveVehicle(vehicle);
     }

    @PutMapping
    public Vehicle updateVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.updateVehicle(vehicle);
    }

    @DeleteMapping("/{vehicleID}")
    public void deleteVehicle(@PathVariable("vehicleID") Long vehicleID) {
        vehicleService.deleteVehicle(vehicleID);
    }
}
