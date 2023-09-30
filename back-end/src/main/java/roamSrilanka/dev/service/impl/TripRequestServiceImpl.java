package roamSrilanka.dev.service.impl;

import roamSrilanka.dev.repository.TripRequestRepository;
import roamSrilanka.dev.service.TripRequestService;

public class TripRequestServiceImpl implements TripRequestService {

    private final TripRequestRepository tripRequestRepository;

    public TripRequestServiceImpl(TripRequestRepository tripRequestRepository) {
        this.tripRequestRepository = tripRequestRepository;
    }

    
}
