package roamSrilanka.dev.service.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Hotel.HotelRequest;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.repository.hotel.HotelRepository;

import java.util.List;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;


    public Hotels addHotels(Hotels hotels){
        return hotelRepository.save(hotels);
    }

    public Hotels getHotelById(Integer id) {
        return hotelRepository.findById(id).orElse(null);
    }

    public List<Hotels> getAllHotels() {
        return hotelRepository.findAll();
    }

    public void saveHotel(Hotels existingHotel) {
        hotelRepository.save(existingHotel);
    }
}
