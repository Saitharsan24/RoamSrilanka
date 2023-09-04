package roamSrilanka.dev.controller.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.service.hotel.HotelService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class HotelController {

    @Autowired
     private HotelService hotelService;

    //Storing hotel details to the database when adding new hotels
    @PostMapping("/addHotel")
    public ResponseEntity<Hotels> createHotel(@RequestBody Hotels hotels){

            Hotels saveHotel = hotelService.addHotels(hotels);
            System.out.println(hotels);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Viewing all hotel details from the database
    @GetMapping("/viewHotels")
    public List<Hotels> getAllHotels() {
        return hotelService.getAllHotels();
    }

    //Getting a particulat hotel datails with the id
    @GetMapping("/viewHotel/{id}")
    public ResponseEntity<Hotels> getHotelById(@PathVariable Integer id) {
        Hotels viewHotel = hotelService.getHotelById(id);
        if(viewHotel != null) {
            return ResponseEntity.ok(viewHotel);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
