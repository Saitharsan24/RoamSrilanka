package roamSrilanka.dev.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.Hotel.HotelImage;

public interface HotelImageRepository extends JpaRepository<HotelImage, Integer> {
}
