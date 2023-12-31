package roamSrilanka.dev.service.holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Holidayplanner.Request;
import roamSrilanka.dev.repository.holidayplanner.RequestRepository;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    public void addRequest(Request request) {
        requestRepository.save(request);
    }

    public Iterable<Request> getAllRequest() {
        return requestRepository.findAll();

    }

    public Request getRequest(Integer id) {
        return requestRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid request Id:" + id));
    }

    public Long countRequests() {
        return requestRepository.count();
    }
}
