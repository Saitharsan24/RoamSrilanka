package roamSrilanka.dev.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import roamSrilanka.dev.model.Vehicle;
import roamSrilanka.dev.repository.VehicleRepository;



import org.springframework.data.rest.webmvc.support.RepositoryEntityLinks;
import org.springframework.stereotype.Repository;

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

    @PutMapping("/updateVehicle/{vehicleID}")
    public Repository updateVehicle(@PathVariable("vehicleID") Long vehicleID, @RequestBody Vehicle vehicle) {
        Vehicle exitingVehicle = vehicleService.findbyId(vehicleID).orElse(null);

        if (exitingVehicle==null) {
            return null;
        }
        else {
            exitingVehicle.setVehicle_number(vehicle.getVehicle_number());
            exitingVehicle.setColor(vehicle.getColor());
            exitingVehicle.setModel(vehicle.getModel());
            exitingVehicle.setStatus(vehicle.getStatus());

            //save the changes made to the existing vehicle
            vehicleService.saveVehicle(exitingVehicle);
            return null;

        }
    }


    // get the specific vehicle by vehicleID and and feedback
    @GetMapping("/vehicle/{vehicleID}/{feedback}")
    public Vehicle saveFeedback(@PathVariable("vehicleID") Long vehicleID, @PathVariable("feedback") String feedback) {
        Vehicle exitingVehicle = vehicleService.findbyId(vehicleID).orElse(null);

        if (exitingVehicle==null) {
            return null;
        }
        else {
            exitingVehicle.setFeedback(feedback);

            //save the changes made to the existing vehicle
            vehicleService.saveVehicle(exitingVehicle);
            return null;

        }
    }
}

