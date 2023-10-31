package roamSrilanka.dev.service.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.guide.GuideTrip;
import roamSrilanka.dev.repository.guide.TripsRepository;

@Service
public class TripsService {
    @Autowired
    private TripsRepository tripsRepository;

    public Iterable<GuideTrip> getAllTrips(){return tripsRepository.findAll();}

    public GuideTrip getTripById(Integer id) {
        return tripsRepository.findById(id).get();
    }

    public GuideTrip addTrip(GuideTrip guideTrip){
        return tripsRepository.save(guideTrip);
    }
}
