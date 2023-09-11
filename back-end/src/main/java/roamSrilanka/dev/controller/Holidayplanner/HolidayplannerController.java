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
    @PutMapping("/updatePlannerName/{userId}")
    public ResponseEntity<Holidayplanner> updatePlannerName(
            @PathVariable Integer userId,
            @RequestParam String newPlannerName
    ) {
        Holidayplanner updatedHolidayplanner = holidayplannerService.updatePlannerName(userId, newPlannerName);
        if (updatedHolidayplanner != null) {
            return new ResponseEntity<>(updatedHolidayplanner, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Handle not found case
        }
    }




}

