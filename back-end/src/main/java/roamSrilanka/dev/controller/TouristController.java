package roamSrilanka.dev.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.service.TouristService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class TouristController {

    @Autowired
    private TouristService touristService;

}
