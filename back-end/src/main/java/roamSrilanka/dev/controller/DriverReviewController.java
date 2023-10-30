package roamSrilanka.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.DriverReview;
import roamSrilanka.dev.model.TripRequest;
import roamSrilanka.dev.model.Vehicle;
import roamSrilanka.dev.service.DriverReviewService;

import java.util.List;

@RestController
public class DriverReviewController {

    @Autowired
    private DriverReviewService driverReviewService;

    @PostMapping("/addDriverReview")
    public DriverReview addReview(@RequestBody DriverReview driverReview) {
        return this.driverReviewService.addReview(driverReview);
    }

    @GetMapping("driverReview/{user_id}")
    public List<DriverReview> findReviewById(@PathVariable("user_id") Long user_id) {
        return driverReviewService.findReviewById(user_id);
    }

    @GetMapping("/driverReview")
    public List<DriverReview> findAllReview() { return driverReviewService.findAllReview(); }
}
