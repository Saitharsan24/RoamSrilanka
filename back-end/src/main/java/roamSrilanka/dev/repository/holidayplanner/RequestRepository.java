package roamSrilanka.dev.repository.holidayplanner;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.Holidayplanner.Request;

public interface RequestRepository extends JpaRepository<Request, Integer> {


}


