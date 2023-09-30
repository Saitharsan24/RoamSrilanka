package roamSrilanka.dev.service;

import roamSrilanka.dev.model.TripRequest;

import java.util.List;

public interface TripRequestService {

    List<TripRequest> findAllTrips();
}
