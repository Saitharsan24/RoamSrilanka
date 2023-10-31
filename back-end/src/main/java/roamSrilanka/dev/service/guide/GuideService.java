package roamSrilanka.dev.service.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.guide.Guide;
import roamSrilanka.dev.repository.guide.GuideRepository;

@Service
public class GuideService {

    @Autowired
    private GuideRepository guideRepository;

    public Iterable<Guide> getAllGuides() {
        return guideRepository.findAll();
    }


    public Guide getGuideById(Integer userId) {
        return guideRepository.findById(userId).orElse(null);
    }


    public void addGuide(Guide existingGuide) {
        guideRepository.save(existingGuide);

    }
}
