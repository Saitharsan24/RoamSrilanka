package roamSrilanka.dev.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Holidayplanner.Holidayplanner;
import roamSrilanka.dev.model.Tourist.Tourist;
import roamSrilanka.dev.model.User;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.service.TouristService;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class TouristController {

    @Autowired
    private TouristService touristService;

//    @GetMapping("/viewTourist/{userId}")
//    public Tourist getTouristById(@PathVariable Integer userId){
//        return touristService.getTouristById(userId);
//    }


    @GetMapping("/tourist")
    @ResponseBody
    public Iterable<Object> getAllTourist(){
        return touristService.getAllTourist();
    }

    @GetMapping("/viewTourist/{id}")
    public ResponseEntity<Tourist> getHotelById(@PathVariable Integer id) {
        Tourist viewTourist = touristService.getTouristById(id);
        if(viewTourist != null) {
            return ResponseEntity.ok(viewTourist);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/viewTourist")
    public List<Tourist> getAllTourists(){
        return touristService.getAllTourists();
    }


    @PutMapping("/updateTourist/{id}")
    public ResponseEntity<Tourist> updateTourist(@PathVariable Integer id, @RequestBody Tourist updatedTourist) {
        Tourist existingTourist = touristService.getTouristById(id);

        if (existingTourist == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            // Update the existing tourist's information with the data from the request body
            existingTourist.setStatus(updatedTourist.getStatus());

            //save the changes made to the existing tourist
            touristService.addTourist(existingTourist);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }



}
