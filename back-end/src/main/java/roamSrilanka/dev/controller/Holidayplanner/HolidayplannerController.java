package roamSrilanka.dev.controller.Holidayplanner;


import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Holidayplanner.Holidayplanner;
import roamSrilanka.dev.service.holidayplanner.HolidayplannerService;
import roamSrilanka.dev.service.hotel.HotelService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HolidayplannerController {

    @Autowired
    private HolidayplannerService holidayplannerService;

    //Storing holidayplanner to the database when adding new holidayplanner
    @PostMapping("/addPlanner")
    public ResponseEntity<Holidayplanner> createHolidayplanner(@RequestBody Holidayplanner holidayplanner) {
        Holidayplanner saveHolidayplanner = holidayplannerService.addPlanner(holidayplanner);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //view holidayplanner
    @GetMapping("/viewHolidayplanner")
    public List<Holidayplanner> getAllHolidayplanner() {
        return holidayplannerService.getAllHolidayplanner();
    }

    @GetMapping("/viewHolidayplanner/{userId}")
    public Holidayplanner getHolidayplannerById(@PathVariable Integer userId) {
        return holidayplannerService.getHolidayplannerById(userId);
    }

    // Update plannerName
    @PutMapping("/updateHolidayplanner/{userId}")
    public ResponseEntity UpdateHolidayplanner(@PathVariable Integer userId, @RequestBody Holidayplanner updatedHolidayplanner) {
        Holidayplanner existingHolidayplanner = holidayplannerService.getHolidayplannerById(userId);

        if (existingHolidayplanner == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Update the existing holidayplanner's information with the data from the request body
        existingHolidayplanner.setPlannerName(updatedHolidayplanner.getPlannerName());
        existingHolidayplanner.setEmail(updatedHolidayplanner.getEmail());
        existingHolidayplanner.setStatus(updatedHolidayplanner.getStatus());


        // Save the changes made to the existing holidayplanner
        holidayplannerService.addPlanner(existingHolidayplanner);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //delete holidayplanner
    @DeleteMapping("/deleteHolidayplanner/{userId}")
    public ResponseEntity deleteHolidayplanner(@PathVariable Integer userId){
        holidayplannerService.deleteHolidayplanner(userId);
        return new ResponseEntity(HttpStatus.OK);
    }





}

