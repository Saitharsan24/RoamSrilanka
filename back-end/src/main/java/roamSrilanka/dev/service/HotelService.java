package roamSrilanka.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.repository.hotel.HotelRepository;

@Service
public class HotelService {
    @Autowired
    private HotelRepository hotelRepository;


    public void addHotel(Hotels hotel) {
        hotelRepository.save(hotel);
    }
}
