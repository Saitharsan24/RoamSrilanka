package roamSrilanka.dev.controller.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.service.HotelService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class HotelController {

    @Autowired
     private HotelService hotelService;

    @PostMapping("/addHotel")
    public ResponseEntity<Hotels> createHotel(@RequestBody Hotels hotels){
        Hotels saveHotel = hotelService.addHotels(hotels);
        System.out.print(saveHotel);
        return new ResponseEntity<>(saveHotel, HttpStatus.OK);
    }
}
