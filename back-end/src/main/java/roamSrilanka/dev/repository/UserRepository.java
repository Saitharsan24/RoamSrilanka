package roamSrilanka.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserName(String userName);
}
