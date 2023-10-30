package roamSrilanka.dev.controller.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.guide.Guide;
import roamSrilanka.dev.service.guide.GuideService;

@RestController
public class GuideController {
    @Autowired
    private GuideService guideService;

    @GetMapping("/viewGuides")
    public Iterable<Guide> getAllGuides() {
        return guideService.getAllGuides();
    }

}
