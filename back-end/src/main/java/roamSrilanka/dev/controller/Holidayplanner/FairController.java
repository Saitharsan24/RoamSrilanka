package roamSrilanka.dev.controller.Holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Holidayplanner.Event;
import roamSrilanka.dev.model.Holidayplanner.Fair;
import roamSrilanka.dev.service.EventService;
import roamSrilanka.dev.service.holidayplanner.FairService;

import java.util.List;
import java.util.Optional;

@RestController
public class FairController {
    @Autowired
    private FairService fairService;

    @GetMapping("/getAllFairs")
    public List<Fair> getAllFairs() {
        return this.fairService.getAllFairs();
    }

    @PostMapping("/addFair")
    public Fair createFair(@RequestBody Fair newFair) {
        return this.fairService.createFair(newFair);
    }

    @GetMapping("/getParticularFair/{id}")
    public Optional<Fair> getEvent (@PathVariable(value = "id") Integer identity ) {
        return this.fairService.getFair(identity);
    }

    @GetMapping("/fair/count")
    public Long countFairs() {
        return fairService.countFairs();
    }
    @DeleteMapping("/deleteFair/{id}")
    public String deleteFair (@PathVariable(value = "id") Integer identity) {
        return this.fairService.deleteFair(identity);
    }
}
