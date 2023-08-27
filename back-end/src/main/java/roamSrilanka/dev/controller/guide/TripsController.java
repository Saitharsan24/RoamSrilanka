package roamSrilanka.dev.controller.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.guide.Trips;
import roamSrilanka.dev.service.guide.TripsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TripsController {

    @Autowired
    private TripsService tripsService;

    @GetMapping("/trips")
    @ResponseBody
    public Iterable<Trips> getAllTrips(){return tripsService.getAllTrips();}
}
