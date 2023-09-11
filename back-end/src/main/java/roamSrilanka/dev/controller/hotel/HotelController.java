package roamSrilanka.dev.controller.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Hotel.HotelRequest;
import roamSrilanka.dev.model.Hotel.HotelRooms;
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
           // System.out.println(hotels);
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

    @PutMapping("/updateHotel/{hotelId}")
    public ResponseEntity<Hotels> updateHotel(@PathVariable Integer hotelId, @RequestBody Hotels updatedHotel) {
        Hotels existingHotel = hotelService.getHotelById(hotelId);

        if (existingHotel == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Update only the non-null fields from updatedHotel
        if (updatedHotel.getHotelName() != null && !updatedHotel.getHotelName().isEmpty()) {
            existingHotel.setHotelName(updatedHotel.getHotelName());
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
