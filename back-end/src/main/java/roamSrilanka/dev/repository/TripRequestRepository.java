package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.TripRequest;

import java.util.List;

@Repository
public interface TripRequestRepository extends JpaRepository<TripRequest, Long> {


}
