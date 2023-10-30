package roamSrilanka.dev.repository.guide;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import roamSrilanka.dev.model.guide.Guide;

@Repository
public interface GuideRepository extends JpaRepository<Guide, Integer> {
}
