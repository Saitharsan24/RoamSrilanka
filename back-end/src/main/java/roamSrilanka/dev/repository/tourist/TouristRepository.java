package roamSrilanka.dev.repository.tourist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Tourist.Tourist;

import java.util.List;


@Repository
public interface TouristRepository extends JpaRepository<Tourist, Integer>{
    @Query("SELECT t,u FROM Tourist t JOIN t.user u")
    List<Object> findTouristsUsers();

}
