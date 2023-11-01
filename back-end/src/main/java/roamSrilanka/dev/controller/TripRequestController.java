package roamSrilanka.dev.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.TripRequest;
import roamSrilanka.dev.service.TripRequestService;

import java.util.List;
import java.util.Optional;

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

    @PutMapping("/updateStatus/{request_id}")
    public ResponseEntity<TripRequest> updateStatus(@PathVariable Long request_id, @RequestBody TripRequest updatedRequest) {

        Optional<TripRequest> existingTripRequestOptional = tripRequestService.getTripRequestById(request_id);

        if (existingTripRequestOptional == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        TripRequest existingTripRequest = existingTripRequestOptional.get();

        if (updatedRequest.getStatus() != null) {
            existingTripRequest.setStatus(updatedRequest.getStatus());
        }

        tripRequestService.saveRequest(existingTripRequest);

        return new ResponseEntity<>(existingTripRequest, HttpStatus.OK);
    }
}
