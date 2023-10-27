package roamSrilanka.dev.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.Driver;

public interface DriverRepository extends JpaRepository<Driver, Long> {
}
