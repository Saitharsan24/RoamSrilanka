package roamSrilanka.dev.service.guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.guide.Guide;
import roamSrilanka.dev.repository.guide.GuideRepository;

import java.util.List;

@Service
public class GuideService {

    @Autowired
    private GuideRepository guideRepository;

    public List<Guide> getAllGuides() {
        return guideRepository.findAll();
    }


    public Guide getGuideById(Integer userId) {
        return guideRepository.findById(userId).orElse(null);
    }


    public Guide addGuide(Guide existingGuide) {
        guideRepository.save(existingGuide);
        return existingGuide;
    }
}
