package roamSrilanka.dev.service.holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import roamSrilanka.dev.model.Holidayplanner.Event;
import roamSrilanka.dev.model.Holidayplanner.Fair;
import roamSrilanka.dev.model.Holidayplanner.FairImage;
import roamSrilanka.dev.model.Hotel.HotelImage;
import roamSrilanka.dev.repository.EventRepository;
import roamSrilanka.dev.repository.holidayplanner.FairImageRepository;
import roamSrilanka.dev.repository.holidayplanner.FairRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FairService {
    @Autowired
    private FairRepository fairRepository;
    @Autowired
    private FairImageRepository fairImageRepository;

    public List<Fair> getAllFairs() {
        return this.fairRepository.findAll();
    }

    public Fair createFair (Fair newFair) {
        return this.fairRepository.save(newFair);
    }

    public Optional<Fair> getFair(Integer id) {
        return this.fairRepository.findById(id);
    }

    public String deleteFair (Integer id) {
        this.fairRepository.deleteById(id);
        return "Successfully Deleted";
    }

    public Long countFairs() {
        return fairRepository.count();
    }

    @Transactional
    public void addFairImage(FairImage fairImage) {
        fairImageRepository.save(fairImage);
    }
}
