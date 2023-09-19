package roamSrilanka.dev.controller.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Hotel.HotelRooms;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.service.hotel.HotelRoomServices;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class HotelRoomController {

    @Autowired
    private HotelRoomServices hotelRoomServices;

    @PostMapping("/addHotelRoom")
    public ResponseEntity<HotelRooms> addHotelRoom(@RequestBody HotelRooms hotelRooms){

        HotelRooms hotelRoom = hotelRoomServices.addHotelRoom(hotelRooms);
        System.out.println(hotelRoom);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //View hotel rooms with hotel_id
    @GetMapping("/viewHotelRoom/{hotelId}")
    public ResponseEntity<List<HotelRooms>> viewHotelRoomsWithHotelId(@PathVariable Integer hotelId) {
        List<HotelRooms> hotelRooms = hotelRoomServices.getRoomsByHotelId(hotelId);

        if (!hotelRooms.isEmpty()) {
            return new ResponseEntity<>(hotelRooms, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    //View hotel rooms with room_id
    @GetMapping("/viewRoom/{roomId}")
    public ResponseEntity<List<HotelRooms>> viewHotelRoomsWithRoomId(@PathVariable Integer roomId) {
        List<HotelRooms> hotelRooms = hotelRoomServices.getRoomsByRoomId(roomId);

        if (!hotelRooms.isEmpty()) {
            return new ResponseEntity<>(hotelRooms, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    // Endpoint to retrieve all rooms.
    @GetMapping("/viewHotelRooms")
    public ResponseEntity<List<HotelRooms>> getAllRooms() {
        List<HotelRooms> resultList = hotelRoomServices.getAllRooms();
        return new ResponseEntity<>(resultList, HttpStatus.OK);
    }


    // Endpoint to update a room's information.
    // Ensure the ID in the URL matches the ID in the request body.
    @PutMapping("/updateRoom/{roomId}")
    public ResponseEntity<HotelRooms> updateHotelRoom(
            @PathVariable String roomId,
            @RequestBody HotelRooms updatedRoom
    ) {

        HotelRooms existingRoom = hotelRoomServices.getRoomById(roomId);

        if (existingRoom == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Update the existing room's information with the data from the request body
        if (updatedRoom.getRoomType() != null && !updatedRoom.getRoomType().isEmpty()) {
            existingRoom.setRoomType(updatedRoom.getRoomType());
        }


        if (updatedRoom.getPrice() != null && updatedRoom.getPrice() > 0) {
            existingRoom.setPrice(updatedRoom.getPrice());
        }

        if (updatedRoom.getNoOfBeds() != null && updatedRoom.getNoOfBeds() > 0) {
            existingRoom.setNoOfBeds(updatedRoom.getNoOfBeds());
        }
        if (updatedRoom.getOccupancy() != null && updatedRoom.getOccupancy() > 0) {
            existingRoom.setOccupancy(updatedRoom.getOccupancy());
        }

        // Save the updated room
        hotelRoomServices.saveRoom(existingRoom);

        return new ResponseEntity<>(existingRoom, HttpStatus.OK);
    }


    // Endpoint to delete a room by its roomId.
    @DeleteMapping("deleteRoom/{roomId}")
    public ResponseEntity<Void> deleteRoom(@PathVariable Integer roomId) {
        hotelRoomServices.deleteRoom(roomId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
