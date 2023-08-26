package roamSrilanka.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Tourist;
import roamSrilanka.dev.repository.TouristRepository;
import roamSrilanka.dev.repository.UserRepository;

@Service
public class TouristService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TouristRepository touristRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Tourist addTourist (Tourist tourist){
        return touristRepository.save(tourist);
    }
}
