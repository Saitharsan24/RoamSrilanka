package roamSrilanka.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Hotel;
import roamSrilanka.dev.repository.HotelRepository;

@Service
public class HotelService {
    @Autowired
    private HotelRepository hotelRepository;


    public void addHotel(Hotel hotel) {
        hotelRepository.save(hotel);
    }
}
