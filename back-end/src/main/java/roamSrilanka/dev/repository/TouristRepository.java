package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Tourist;


@Repository
public interface TouristRepository extends JpaRepository<Tourist, Integer>{

}
