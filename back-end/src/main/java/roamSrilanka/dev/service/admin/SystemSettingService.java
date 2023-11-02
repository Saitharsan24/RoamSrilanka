package roamSrilanka.dev.service.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.admin.SystemSetting;
import roamSrilanka.dev.repository.admin.SystemSettingRepository;

import java.util.List;


@Service
public class SystemSettingService {

    @Autowired
    private SystemSettingRepository systemSettingRepository;

    public List<SystemSetting> getAllSetting() {
        return systemSettingRepository.findAll();
    }

    public SystemSetting addSystemSetting(SystemSetting systemSetting){
        return systemSettingRepository.save(systemSetting);
    }

}
