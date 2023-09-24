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
}
