package roamSrilanka.dev.repository.holidayplanner;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Holidayplanner.Holidayplanner;

@Repository
public interface HolidayplannerRepository extends JpaRepository<Holidayplanner,Integer> {

}
