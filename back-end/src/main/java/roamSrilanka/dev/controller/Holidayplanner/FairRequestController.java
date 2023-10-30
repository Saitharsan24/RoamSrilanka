package roamSrilanka.dev.controller.Holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Holidayplanner.FairRequest;
import roamSrilanka.dev.service.holidayplanner.FairRequestService;
import roamSrilanka.dev.service.holidayplanner.FairService;

@RestController
public class FairRequestController {
    @Autowired
    private FairRequestService fairrequestService;

    @GetMapping("/getAllFairrequest")
    @ResponseBody
    public Iterable<FairRequest> getAllFairrequest() {
        return fairrequestService.getAllFairrequest();
    }

    @PostMapping("/addFairrequest")
    public ResponseEntity<String> addFairrequest(@RequestBody FairRequest fairrequest) {
        fairrequestService.addFairrequest(fairrequest);
        return ResponseEntity.ok("Fairrequest added successfully");
    }
}
