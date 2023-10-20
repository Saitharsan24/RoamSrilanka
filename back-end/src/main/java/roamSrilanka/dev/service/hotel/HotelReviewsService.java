package roamSrilanka.dev.service.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Hotel.HotelReviews;
import roamSrilanka.dev.repository.hotel.HotelReviewsRepository;

import java.util.List;

@Service
public class HotelReviewsService {
    @Autowired
    private HotelReviewsRepository hotelReviewsRepository;

    public List<HotelReviews> getReviewByRoomId(Integer roomId) {
        return hotelReviewsRepository.findByRoomId(roomId);
    }
}
