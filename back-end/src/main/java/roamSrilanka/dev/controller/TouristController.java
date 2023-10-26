package roamSrilanka.dev.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.Holidayplanner.Holidayplanner;
import roamSrilanka.dev.model.Tourist.Tourist;
import roamSrilanka.dev.model.User;
import roamSrilanka.dev.service.TouristService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class TouristController {

    @Autowired
    private TouristService touristService;

    @GetMapping("/viewTourist")
    public List<Tourist> getAllTourist(){
        return touristService.getAllTourist();
    }

    @GetMapping("/viewTourist/{userId}")
    public Tourist getTouristById(@PathVariable Integer userId){
        return touristService.getTouristById(userId);
    }



}
