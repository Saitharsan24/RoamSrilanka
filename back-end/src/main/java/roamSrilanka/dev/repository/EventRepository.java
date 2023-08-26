package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
}
