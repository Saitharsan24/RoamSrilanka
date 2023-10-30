package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.DriverReview;
import roamSrilanka.dev.model.Hotel.HotelReviews;
import roamSrilanka.dev.model.TripRequest;

import java.util.List;

@Repository
public interface DriverReviewRepository extends JpaRepository<DriverReview, Long> {

    List<DriverReview> findReviewByUserId(Long userId);
}
