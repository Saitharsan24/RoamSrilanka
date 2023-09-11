package roamSrilanka.dev.service.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Hotel.HotelRequest;
import roamSrilanka.dev.repository.hotel.HotelRequestRepository;

import java.util.List;

@Service
public class HotelRequestService {

    @Autowired
    private HotelRequestRepository hotelRequestRepository;

    public HotelRequest addRequest(HotelRequest hotelRequest) {
        return hotelRequestRepository.save(hotelRequest);
    }

    public List<HotelRequest> getAllRequests() {
        return hotelRequestRepository.findAll();
    }

    public HotelRequest getRequestById(Integer requestId) {
        return hotelRequestRepository.findById(requestId).orElse(null);
    }

    public void saveRequest(HotelRequest existingRequest) {
        hotelRequestRepository.save(existingRequest);
    }
}
