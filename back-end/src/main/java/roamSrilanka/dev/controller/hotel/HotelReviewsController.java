package roamSrilanka.dev.controller.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.Hotel.HotelReviews;
import roamSrilanka.dev.service.hotel.HotelReviewsService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class HotelReviewsController {

    @Autowired
    private HotelReviewsService hotelReviewsService;

    @GetMapping("/viewReview/{roomId}")
    public ResponseEntity<List<HotelReviews>> viewReviewWithRoomId(@PathVariable Integer roomId) {
        List<HotelReviews> hotelReviews = hotelReviewsService.getReviewByRoomId(roomId);

        if (!hotelReviews.isEmpty()) {
            return new ResponseEntity<>(hotelReviews, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
