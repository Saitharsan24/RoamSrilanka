package roamSrilanka.dev.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Hotel.HotelRooms;

import java.util.List;

@Repository
public interface HotelRoomsRepository extends JpaRepository<HotelRooms, Integer> {

    List<HotelRooms> findByHotelId(Integer hotelId);
    List<HotelRooms> findByRoomId(Integer roomId);
}
