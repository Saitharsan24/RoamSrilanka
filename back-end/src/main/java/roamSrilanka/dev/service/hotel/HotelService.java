package roamSrilanka.dev.service.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import roamSrilanka.dev.model.Hotel.HotelImage;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.repository.hotel.HotelImageRepository;
import roamSrilanka.dev.repository.hotel.HotelRepository;

import java.util.List;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private HotelImageRepository hotelImageRepository;

    public Hotels getHotelById(Integer id) {
        return hotelRepository.findById(id).orElse(null);
    }

    public List<Hotels> getAllHotels() {
        return hotelRepository.findAll();
    }

    public void saveHotel(Hotels existingHotel) {
        hotelRepository.save(existingHotel);
    }

    public Hotels addHotel(Hotels hotels) {
        return hotelRepository.save(hotels);
    }

    @Transactional
    public void addHotelImage(HotelImage hotelImage) {
        hotelImageRepository.save(hotelImage);
    }

    public List<HotelImage> getAllHotelsImages() {
        return hotelImageRepository.findAll();
    }

    public HotelImage getHotelImageById(Integer id) {
        return hotelImageRepository.findById(id).orElse(null);
    }
}
