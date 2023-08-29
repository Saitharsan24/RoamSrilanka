package roamSrilanka.dev.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Hotel;
import roamSrilanka.dev.service.HotelService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HotelController {
    @Autowired
    private HotelService hotelService;

    @PostMapping("/hotels")
    public ResponseEntity<String> addHotel(@RequestBody Hotel hotel) throws JSONException {
        hotelService.addHotel(hotel);

        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("name", hotel.getHotelName());
        return new ResponseEntity<>(jsonResponse.toString(), HttpStatus.OK);
//        return "Hotel Added Successfully";
    }

}
