package roamSrilanka.dev.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Hotel.Hotels;

@Repository
public interface HotelRepository extends JpaRepository<Hotels, Integer> {

}
