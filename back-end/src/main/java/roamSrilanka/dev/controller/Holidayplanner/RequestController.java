package roamSrilanka.dev.controller.Holidayplanner;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Holidayplanner.Request;
import roamSrilanka.dev.service.holidayplanner.RequestService;

@RestController
public class RequestController {
    @Autowired
    private RequestService requestService;

    @GetMapping("/request")
    @ResponseBody
    public Iterable<Request> getAllRequest(){
        return requestService.getAllRequest();
    }

    @PostMapping("/request")
    public ResponseEntity<String> addRequest(@RequestBody Request request){
        requestService.addRequest(request);


        return ResponseEntity.ok("Request added successfully");
    }

    @GetMapping("/request/{id}")
    @ResponseBody
    public ResponseEntity<Request> getRequest(@PathVariable Integer id) {
        return ResponseEntity.ok(requestService.getRequest(id));
    }

    @PutMapping("updateHpStatus/{id}")
    public ResponseEntity<Request> updateStatus(@PathVariable Integer id) {
        Request existingRequest = requestService.getRequest(id);

        if (existingRequest == null) {
            return ResponseEntity.notFound().build();
        }

        if (existingRequest.getStatus() == 0) {
            existingRequest.setStatus(1);
        }

        requestService.addRequest(existingRequest);
        return ResponseEntity.ok(existingRequest);
    }

    @GetMapping("/request/count")
    @ResponseBody
    public ResponseEntity<Long> countRequests() {
        return ResponseEntity.ok(requestService.countRequests());
    }
}
