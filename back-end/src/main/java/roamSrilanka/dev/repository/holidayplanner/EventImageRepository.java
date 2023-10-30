package roamSrilanka.dev.repository.holidayplanner;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.Holidayplanner.EventImage;

public interface EventImageRepository extends JpaRepository<EventImage, Integer> {
}
