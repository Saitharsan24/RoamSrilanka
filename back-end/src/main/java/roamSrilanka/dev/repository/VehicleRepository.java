package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.Vehicle;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {



    @Query(value = "SELECT COUNT(*) FROM vehicle", nativeQuery = true)
    Long getVehicleCount();

}
