package roamSrilanka.dev.controller.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Hotel.HotelRooms;
import roamSrilanka.dev.service.hotel.HotelRoomServices;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class HotelRoomController {

    @Autowired
    private HotelRoomServices hotelRoomServices;

    @PostMapping("/addHotelRoom")
    public ResponseEntity<HotelRooms> addHotelRoom(@RequestBody HotelRooms hotelRooms){

        HotelRooms hotelRoom = hotelRoomServices.addHotelRoom(hotelRooms);

        return new ResponseEntity<>(HttpStatus.OK);
    }


    //View hotel rooms with id
    @GetMapping("/viewHotelRoom/{id}")
    public ResponseEntity<HotelRooms> viewHotelRoomwithId(@PathVariable Integer id){

            HotelRooms viewHotelRoom = hotelRoomServices.getRoomById(id).orElse(null);

            if(viewHotelRoom != null) {
                return new ResponseEntity<>(viewHotelRoom, HttpStatus.OK);
            } else {
                return ResponseEntity.notFound().build();
            }
    }


    // Endpoint to retrieve all rooms.
    @GetMapping
    public ResponseEntity<List<HotelRooms>> getAllRooms() {
        List<HotelRooms> rooms = hotelRoomServices.getAllRooms();
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }

    // Endpoint to update a room's information.
    // Ensure the ID in the URL matches the ID in the request body.
    @PutMapping("/{id}")
    public ResponseEntity<HotelRooms> updateRoom(@PathVariable Integer id, @RequestBody HotelRooms room) {
        if (!id.equals(room.getRoomId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        HotelRooms updatedRoom = hotelRoomServices.updateRoom(room);
        return new ResponseEntity<>(updatedRoom, HttpStatus.OK);
    }

    // Endpoint to delete a room by its ID.
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoom(@PathVariable Integer id) {
        hotelRoomServices.deleteRoom(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
