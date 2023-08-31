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

        Hotels existingHotel = hotelRepository.findById(hotelRooms.getHotelId()).orElseThrow(() -> new EntityNotFoundException("Hotel not found"));
        return hotelRoomsRepository.save(hotelRooms);
    }

    // Retrieves a room by its ID.
    public Optional<HotelRooms> getRoomById(Integer id) {
        return hotelRoomsRepository.findById(id);
    }

    // Retrieves all rooms.
    public List<HotelRooms> getAllRooms() {
        return hotelRoomsRepository.findAll();
    }

    //Delete specific room using ID
    public void deleteRoom(Integer id) {
        hotelRoomsRepository.deleteById(id);
    }

    // Updates an existing room.
    public HotelRooms updateRoom(HotelRooms room) {
        if (hotelRoomsRepository.existsById(room.getRoomId())) {
            return hotelRoomsRepository.save(room);
        }
        throw new EntityNotFoundException("Room not found with id " + room.getRoomId());
    }

}
