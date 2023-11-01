package roamSrilanka.dev.controller.admin;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.admin.SystemSetting;
import roamSrilanka.dev.model.guide.Guide;
import roamSrilanka.dev.service.admin.SystemSettingService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SystemSettingController {

    @Autowired
    private SystemSettingService systemSettingService;

    @GetMapping("/viewSetting")
    public Iterable<SystemSetting> getAllGuides() {
        return systemSettingService.getAllSetting();
    }

    @PutMapping("/updateSetting")
    public SystemSetting updateSetting(@RequestBody SystemSetting systemSetting) {
        return systemSettingService.addSystemSetting(systemSetting);
    }
}
