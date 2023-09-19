package roamSrilanka.dev.repository.guide;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.guide.Trips;

@Repository
public interface TripsRepository extends JpaRepository<Trips, Integer> {
    //Trips findByTripId(int tripId);
}
