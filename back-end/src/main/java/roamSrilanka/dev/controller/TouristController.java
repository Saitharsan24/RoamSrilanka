package roamSrilanka.dev.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.model.Tourist.Tourist;
import roamSrilanka.dev.service.TouristService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class TouristController {

    @Autowired
    private TouristService touristService;

    @GetMapping("/viewTourist/{id}")
    public ResponseEntity<Tourist> getHotelById(@PathVariable Integer id) {
        Tourist viewTourist = touristService.getTouristById(id);
        if(viewTourist != null) {
            return ResponseEntity.ok(viewTourist);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
