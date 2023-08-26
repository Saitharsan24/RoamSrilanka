package roamSrilanka.dev.service.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.guide.Trips;
import roamSrilanka.dev.repository.guide.TripsRepository;

@Service
public class TripsService {
    @Autowired
    private TripsRepository tripsRepository;

    public Iterable<Trips> getAllTrips(){return tripsRepository.findAll();}
}
