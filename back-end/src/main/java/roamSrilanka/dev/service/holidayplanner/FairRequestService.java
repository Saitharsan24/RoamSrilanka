package roamSrilanka.dev.service.holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Holidayplanner.FairRequest;
import roamSrilanka.dev.repository.holidayplanner.FairRequestRepository;

@Service
public class FairRequestService {

    @Autowired
    private FairRequestRepository fairrequestRepository;

    public void addFairrequest(FairRequest fairrequest) {
        fairrequestRepository.save(fairrequest);
    }

    public Iterable<FairRequest> getAllFairrequest() {
        return fairrequestRepository.findAll();

    }

    public FairRequest getFairrequest(Integer id) {
        return fairrequestRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid fairrequest Id:" + id));
    }

    public Long countFRequests() {
        return fairrequestRepository.count();
    }

    public FairRequest findbyId(Integer id) {
        return fairrequestRepository.findById(id).orElse(null);
    }

    public void savestatus(FairRequest existingFairRequest) {
        fairrequestRepository.save(existingFairRequest);
    }
}
