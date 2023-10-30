package roamSrilanka.dev.controller.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
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

    @PutMapping("/guideAvailability/{id}")
    public ResponseEntity<Guide> guideAvailability(@PathVariable Integer id) {
        Guide existingGuide = guideService.getGuideById(id);

        if (existingGuide == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (existingGuide.getGuideAvailability() != null) {
            existingGuide.setGuideAvailability(false);
        }

        guideService.addGuide(existingGuide);
        return ResponseEntity.ok(existingGuide);
    }

}
