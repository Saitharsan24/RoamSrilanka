package roamSrilanka.dev.controller.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Hotel.HotelRequest;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.service.hotel.HotelRequestService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HotelRequestController {

    @Autowired
    private HotelRequestService hotelRequestService;

    @PostMapping("/addRequest")
    public ResponseEntity<HotelRequest> createRequest(@RequestBody HotelRequest hotelRequest){
        HotelRequest saveRequest = hotelRequestService.addRequest(hotelRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping ("/viewRequest")
    public List<HotelRequest> getAllRequests() {
        return hotelRequestService.getAllRequests();
    }

    @GetMapping("/viewRequest/{requestId}")
    public ResponseEntity<HotelRequest> getRequestById(@PathVariable Integer requestId){
        HotelRequest hotelRequest = hotelRequestService.getRequestById(requestId);
        return new ResponseEntity<>(hotelRequest, HttpStatus.OK);
    }

    @PutMapping("/addStatus/{requestId}")
    public ResponseEntity<HotelRequest> addStatus(@PathVariable Integer requestId, @RequestBody HotelRequest updatedRequest) {
        HotelRequest existingHotelRequest = hotelRequestService.getRequestById(requestId);

        if (existingHotelRequest == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (updatedRequest.getStatus() != null && !updatedRequest.getStatus().isEmpty()) {
            existingHotelRequest.setStatus(updatedRequest.getStatus());
        }

        hotelRequestService.saveRequest(existingHotelRequest);

        return new ResponseEntity<>(existingHotelRequest, HttpStatus.OK);
    }

}
