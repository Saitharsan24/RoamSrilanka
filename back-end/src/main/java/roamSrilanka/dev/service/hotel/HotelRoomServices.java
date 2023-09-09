package roamSrilanka.dev.service.hotel;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Hotel.HotelRooms;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.repository.hotel.HotelRepository;
import roamSrilanka.dev.repository.hotel.HotelRoomsRepository;

import java.util.List;
import java.util.Optional;


@Service
public class HotelRoomServices {

    @Autowired
    private HotelRoomsRepository hotelRoomsRepository;

    @Autowired
    private HotelRepository hotelRepository;

    //Adding hotel rooms to database
    public HotelRooms addHotelRoom(HotelRooms hotelRooms){

        //Hotels existingHotel = hotelRepository.findById(hotelRooms.getHotelId()).orElseThrow(() -> new EntityNotFoundException("Hotel not found"));
//        hotelRooms.setHotel(existingHotel);
        return hotelRoomsRepository.save(hotelRooms);
    }

    // Retrieves a room by its hotel_Id.
    public List<HotelRooms> getRoomsByHotelId(Integer hotelId) {
        return hotelRoomsRepository.findByHotelId(hotelId);
    }

    // Retrieves a room by its ID.
    public List<HotelRooms> getRoomsByRoomId(Integer roomId) {
        return hotelRoomsRepository.findByRoomId(roomId);
    }


    // Retrieves all rooms.
    public List<HotelRooms> getAllRooms() {
        return hotelRoomsRepository.findAll();
    }

    //Delete specific room using ID
    public void deleteRoom(Integer roomId) {
        hotelRoomsRepository.deleteById(roomId);
    }

    // Updates an existing room.
//    public HotelRooms updateRoom(HotelRooms room) {
//        if (hotelRoomsRepository.existsById(room.getRoomId())) {
//            return hotelRoomsRepository.save(room);
//        }
//        throw new EntityNotFoundException("Room not found with id " + room.getRoomId());
//    }

    public HotelRooms getRoomById(String roomId) {
        Optional<HotelRooms> room = hotelRoomsRepository.findById(Integer.parseInt(roomId));
        if (room.isPresent()) {
            return room.get();
        }
        throw new EntityNotFoundException("Room not found with id " + roomId);
    }

    public void saveRoom(HotelRooms existingRoom) {
        hotelRoomsRepository.save(existingRoom);
    }
}
