package roamSrilanka.dev.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import roamSrilanka.dev.model.DriverReview;
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


    @DeleteMapping("deleteVehicleByUser/{user_id}")
    public void deleteVehicleByUserId(@PathVariable("user_id") Long user_id) {
        vehicleService.deleteVehicleByUserId(user_id);
    }

    @GetMapping("vehiclebyUser/{user_id}")
    public List<Vehicle> findVehicleByUserId(@PathVariable("user_id") Long user_id) {
        return vehicleService.findVehicleUserById(user_id);
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


//     get the specific vehicle by vehicleID and and feedback
    @PutMapping("/vehicleFeedback/{vehicleID}")
    public ResponseEntity<Vehicle> saveFeedback(@PathVariable("vehicleID") Long vehicleID, @RequestBody Vehicle updatedVehicle) {
        Vehicle exitingVehicle = vehicleService.findbyId(vehicleID).orElse(null);

        if (exitingVehicle == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else {

            exitingVehicle.setFeedback(updatedVehicle.getFeedback());
            vehicleService.saveVehicle(exitingVehicle);
            return new ResponseEntity<>(exitingVehicle, HttpStatus.OK);

        }
    }
}

