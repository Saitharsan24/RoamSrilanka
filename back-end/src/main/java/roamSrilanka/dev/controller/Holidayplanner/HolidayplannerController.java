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

    @PutMapping("/updateHolidayplanner/{userId}")
    public ResponseEntity<Holidayplanner> updateHolidayplanner(@PathVariable Integer userId, @RequestBody Holidayplanner updatedHolidayplanner) {
        Holidayplanner existingHolidayplanner = HolidayplannerService.getHolidayplannerById(userId);

        if (existingHolidayplanner == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Update only the non-null fields from updatedHotel
        if (updatedHolidayplanner.getHolidayplannerName() != null && !updatedHoliadayplanner.getHotelName().isEmpty()) {
            existingHolidayplanner.setholidayplannerName(updatedHolidayplanner.getHolidayplannerName());
        }
        if (updatedHotel.getStarRating() != null && updatedHotel.getStarRating() > 0) {
            existingHotel.setStarRating(updatedHotel.getStarRating());
        }
        if (updatedHotel.getUserRating() != null && updatedHotel.getUserRating() >= 0) {
            existingHotel.setUserRating(updatedHotel.getUserRating());
        }
        if (updatedHotel.getDescription() != null && !updatedHotel.getDescription().isEmpty()) {
            existingHotel.setDescription(updatedHotel.getDescription());
        }
        if (updatedHotel.getHotelType() != null && !updatedHotel.getHotelType().isEmpty()) {
            existingHotel.setHotelType(updatedHotel.getHotelType());
        }
        if (updatedHotel.getAddress() != null && !updatedHotel.getAddress().isEmpty()) {
            existingHotel.setAddress(updatedHotel.getAddress());
        }
        if (updatedHotel.getLatitude() != null) {
            existingHotel.setLatitude(updatedHotel.getLatitude());
        }
        if (updatedHotel.getLongitude() != null) {
            existingHotel.setLongitude(updatedHotel.getLongitude());
        }
        // Save the updated hotel
        hotelService.saveHotel(existingHotel);

        return new ResponseEntity<>(existingHotel, HttpStatus.OK);
    }

}

