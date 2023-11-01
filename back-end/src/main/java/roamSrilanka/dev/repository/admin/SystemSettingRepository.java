package roamSrilanka.dev.repository.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import roamSrilanka.dev.model.admin.SystemSetting;

public interface SystemSettingRepository extends JpaRepository<SystemSetting, Integer> {
}
