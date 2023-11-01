package roamSrilanka.dev.service;

import roamSrilanka.dev.model.TripRequest;

import java.util.List;
import java.util.Optional;

public interface TripRequestService {

    List<TripRequest> findAllTrips();

    TripRequest saveRequest(TripRequest tripRequest);


    Optional<TripRequest> getTripRequestById(Long request_id);


}
