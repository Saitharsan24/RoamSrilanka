package roamSrilanka.dev.controller.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Holidayplanner.Holidayplanner;
import roamSrilanka.dev.model.guide.Guide;
import roamSrilanka.dev.service.guide.GuideService;

import java.util.List;

@RestController
public class GuideController {
    @Autowired
    private GuideService guideService;

    @GetMapping("/viewGuides")
    public List<Guide> getAllGuides() {
        return guideService.getAllGuides();
    }

    //add the guide details in the database(guide table)
    @PostMapping("/addGuide")
    public Guide addGuide(@RequestBody Guide guide) {
        return guideService.addGuide(guide);
    }



    @GetMapping("/viewGuide/{userId}")
    public Guide getGuideById(@PathVariable Integer userId) {
        return guideService.getGuideById(userId);
    }


    @PutMapping("/guideAvailability/{id}")
    public ResponseEntity<Guide> guideAvailability(@PathVariable Integer id) {
        Guide existingGuide = guideService.getGuideById(id);

        if (existingGuide == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (existingGuide.getGuideAvailability() != 0) {
            existingGuide.setGuideAvailability(0);
        }

        guideService.addGuide(existingGuide);
        return ResponseEntity.ok(existingGuide);
    }

    @PutMapping("updateGuide/{userID}")
    public ResponseEntity<Guide> updateGuide(@PathVariable Integer userID, @RequestBody Guide guide) {
        Guide existingGuide = guideService.getGuideById(userID);

        if (existingGuide == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
      //Update the existing guide's information with the data from the request body
        existingGuide.setStatus(guide.getStatus());

        // Save the changes made to the existing guide
        guideService.addGuide(existingGuide);
        return ResponseEntity.ok(existingGuide);
    }

}
