package roamSrilanka.dev.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Hotel.HotelRequest;

@Repository
public interface HotelRequestRepository extends JpaRepository<HotelRequest, Integer> {
}
