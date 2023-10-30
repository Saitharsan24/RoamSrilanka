package roamSrilanka.dev.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.Hotel.HotelOwner;

public interface HotelOwnerRepository extends JpaRepository<HotelOwner, Integer> {
}
