package roamSrilanka.dev.service.impl;

import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.TripRequest;
import roamSrilanka.dev.repository.TripRequestRepository;
import roamSrilanka.dev.service.TripRequestService;

import java.util.List;

@Service
public class TripRequestServiceImpl implements TripRequestService {

    private final TripRequestRepository tripRequestRepository;

    public TripRequestServiceImpl(TripRequestRepository tripRequestRepository) {
        this.tripRequestRepository = tripRequestRepository;
    }

    @Override
    public List<TripRequest> findAllTrips() {
        return tripRequestRepository.findAll();
    }
}
