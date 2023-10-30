package roamSrilanka.dev.controller.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.Holidayplanner.Holidayplanner;
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

    @GetMapping("/viewGuide/{userId}")
    public Guide getGuideById(@PathVariable Integer userId){
        return  guideService.getGuideById(userId);
    }


//    @GetMapping("/viewHolidayplanner/{userId}")
//    public Holidayplanner getHolidayplannerById(@PathVariable Integer userId) {
//        return holidayplannerService.getHolidayplannerById(userId);
//    }

}
