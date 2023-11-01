package roamSrilanka.dev.repository.holidayplanner;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.Holidayplanner.FairRequest;

public interface FairRequestRepository extends JpaRepository<FairRequest, Integer> {
}
