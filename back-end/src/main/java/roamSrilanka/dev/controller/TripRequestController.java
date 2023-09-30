package roamSrilanka.dev.controller;

import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.TripRequest;
import roamSrilanka.dev.service.TripRequestService;

import java.util.List;

@RestController
@RequestMapping
public class TripRequestController {

    private final TripRequestService tripRequestService;

    public TripRequestController(TripRequestService tripRequestService) {
        this.tripRequestService = tripRequestService;
    }

    @PostMapping("/addTripRequest")
    public TripRequest saveRequest(@RequestBody TripRequest tripRequest) {
        return this.tripRequestService.saveRequest(tripRequest);
    }

    @GetMapping("/allTripRequests")
    public List<TripRequest> findAllTrips() {
        return this.tripRequestService.findAllTrips();
    }
}
