package roamSrilanka.dev.repository.hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Hotel.HotelReviews;

import java.util.List;

@Repository
public interface HotelReviewsRepository extends JpaRepository<HotelReviews, Integer> {

    List<HotelReviews> findByRoomId(Integer roomId);
}
