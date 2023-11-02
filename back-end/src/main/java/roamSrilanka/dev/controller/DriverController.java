package roamSrilanka.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Driver;
import roamSrilanka.dev.model.Tourist.Tourist;
import roamSrilanka.dev.service.DriverService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DriverController {

    @Autowired
    private DriverService driverService;



    @GetMapping("/viewDriver")
    public List<Driver> getAllDriver() {
        return driverService.getAllDriver();
    }

    @GetMapping("/viewDriver/{userId}")
    public Driver getDriverById(@PathVariable Long userId){
        return driverService.getDriverById(userId);
    }


    @PutMapping("/driverAvailability/{id}")
    public ResponseEntity<Driver> driverAvailability(@PathVariable Long id) {
        Driver existingDriver = driverService.getDriverById(id);

        if (existingDriver == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (existingDriver.getDriverAvailability() != null) {
            existingDriver.setDriverAvailability(false);
        }

        driverService.addDriver(existingDriver);
        return ResponseEntity.ok(existingDriver);
    }



    @PutMapping("/updateDriver/{id}")
    public ResponseEntity<Driver> updateDriver(@PathVariable Long id, @RequestBody Driver updatedDriver) {
        Driver existingDriver = driverService.getDriverById(id);

        if (existingDriver == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            // Update the existing tourist's information with the data from the request body
            existingDriver.setStatus(updatedDriver.getStatus());

            //save the changes made to the existing tourist
            driverService.addDriver(existingDriver);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
