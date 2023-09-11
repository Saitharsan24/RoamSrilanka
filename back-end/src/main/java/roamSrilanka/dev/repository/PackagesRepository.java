package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.Holidayplanner.Event;

public interface PackagesRepository extends JpaRepository <Event.Packages,Integer>{

}
