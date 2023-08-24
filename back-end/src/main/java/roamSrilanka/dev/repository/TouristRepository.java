package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.User;

public interface TouristRepository {
    @Repository
    public interface UserRepository extends JpaRepository<User, Integer> {

    }
}
