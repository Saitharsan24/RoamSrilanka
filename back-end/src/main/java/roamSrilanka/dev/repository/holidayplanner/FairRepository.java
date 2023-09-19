package roamSrilanka.dev.repository.holidayplanner;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.Holidayplanner.Event;
import roamSrilanka.dev.model.Holidayplanner.Fair;

public interface FairRepository extends JpaRepository<Fair, Integer> {

}
