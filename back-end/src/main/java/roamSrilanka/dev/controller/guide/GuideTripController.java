package roamSrilanka.dev.controller.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.model.guide.GuideTrip;
import roamSrilanka.dev.service.guide.TripsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GuideTripController {

    @Autowired
    private TripsService tripsService;

    @GetMapping("/viewTrips")
    @ResponseBody
    public Iterable<GuideTrip> getAllTrips(){return tripsService.getAllTrips();}


    @PostMapping("/addTrip")
    public ResponseEntity<GuideTrip> addGuideTrip(@RequestBody GuideTrip guideTrip){

        GuideTrip guidetrip = tripsService.addTrip(guideTrip);
        return new ResponseEntity<>(guidetrip, HttpStatus.OK);
    }

    @GetMapping("/viewTrip/{id}")
    @ResponseBody
    public ResponseEntity<GuideTrip> getTripById(@PathVariable Integer id) {
        GuideTrip viewTrip = tripsService.getTripById(id);
        if(viewTrip != null) {
            return ResponseEntity.ok(viewTrip);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    @PostMapping("/addTrip")
//    public ResponseEntity<GuideTrip> addTrip(@RequestBody GuideTrip guideTrip){
//        GuideTrip trip = tripsService.addTrip(guideTrip);
//        System.out.println(trip);
//        return ResponseEntity.ok(trip);
//    }
}
