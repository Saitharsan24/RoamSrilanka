package roamSrilanka.dev.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.Tourist;
import roamSrilanka.dev.service.TouristService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class TouristController {

    @Autowired
    private TouristService touristService;

    @PostMapping("/addTourist")
    public ResponseEntity<Tourist> addTourist(Tourist tourist){
        Tourist newTourist = touristService.addTourist(tourist);
        if(newTourist != null){
            return new ResponseEntity<>(newTourist, HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
