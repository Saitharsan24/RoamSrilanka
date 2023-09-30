package roamSrilanka.dev.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.service.TripRequestService;

@RestController
@RequestMapping
public class TripRequestController {

    private final TripRequestService tripRequestService;

    public TripRequestController(TripRequestService tripRequestService) {
        this.tripRequestService = tripRequestService;
    }
    
}
