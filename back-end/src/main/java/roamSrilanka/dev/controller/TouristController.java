package roamSrilanka.dev.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.service.TouristService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class TouristController {

    @Autowired
    private TouristService touristService;

    @GetMapping("/tourist")
    @ResponseBody
    public Iterable<Object> getAllTourist(){
        return touristService.getAllTourist();
    }
}
