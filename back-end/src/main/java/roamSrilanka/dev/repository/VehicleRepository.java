package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

}
