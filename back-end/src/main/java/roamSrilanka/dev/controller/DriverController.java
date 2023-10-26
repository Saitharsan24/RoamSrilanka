package roamSrilanka.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.Driver;
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
}
