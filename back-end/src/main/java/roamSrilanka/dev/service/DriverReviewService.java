package roamSrilanka.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.DriverReview;
import roamSrilanka.dev.model.Vehicle;
import roamSrilanka.dev.repository.DriverReviewRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DriverReviewService {

    @Autowired
    private DriverReviewRepository driverReviewRepository;

    public DriverReview addReview(DriverReview driverReview) {return driverReviewRepository.save(driverReview); }

    public List<DriverReview> findAllReview() {
        return driverReviewRepository.findAll();
    }

    public List<DriverReview> findReviewById(Long user_id) {
        return driverReviewRepository.findReviewByUserId(user_id);
    }
}
