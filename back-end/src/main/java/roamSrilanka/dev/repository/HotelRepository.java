package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

}
