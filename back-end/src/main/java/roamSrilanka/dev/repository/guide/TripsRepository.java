package roamSrilanka.dev.repository.guide;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.guide.GuideTrip;

@Repository
public interface TripsRepository extends JpaRepository<GuideTrip, Integer> {
    //Trips findByTripId(int tripId);
}
