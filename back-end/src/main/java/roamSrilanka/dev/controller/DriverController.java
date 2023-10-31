package roamSrilanka.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Driver;
import roamSrilanka.dev.service.DriverService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DriverController {

    @Autowired
    private DriverService driverService;

//    @PostMapping("/addDriver")
//    public ResponseEntity<Driver> createDriver(@RequestBody Driver driver) {
//        Driver saveDriver = driverService.addDriver(driver);
//        return ResponseEntity.ok(saveDriver);
//    }

    @GetMapping("/viewDriver")
    public List<Driver> getAllDriver() {
        return driverService.getAllDriver();
    }

    @GetMapping("/viewDriver/{userId}")
    public Driver getDriverById(@PathVariable Long userId){
        return driverService.getDriverById(userId);
    }

    @PutMapping("/updateDriver/{userId}")
     public ResponseEntity UpdateDriver(@PathVariable Integer userid,@RequestBody Driver updateDriver) {

        Long userId = null;
        Driver existingDriver = driverService.getDriverById(userId);

        if (existingDriver == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Update the existing driver's information with the data from the request body
        existingDriver.setStatus(updateDriver.getStatus());

        // Save the changes made to the existing driver
        driverService.addDriver(existingDriver);
        return new ResponseEntity<>(HttpStatus.OK);


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
}
