package roamSrilanka.dev.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Hotel.HotelRooms;

@Repository
public interface HotelRoomsRepository extends JpaRepository<HotelRooms, Integer> {

}
