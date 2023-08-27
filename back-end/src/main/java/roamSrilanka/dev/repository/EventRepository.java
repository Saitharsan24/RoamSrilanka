package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Event;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
    @Query("SELECT e.name, e.date, e.places, e.eventId FROM Event e")
    List<Object[]> findAllBy();
}
