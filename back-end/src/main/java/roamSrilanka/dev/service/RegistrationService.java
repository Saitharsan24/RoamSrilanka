package roamSrilanka.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Tourist.Tourist;
import roamSrilanka.dev.model.User;
import roamSrilanka.dev.repository.tourist.TouristRepository;
import roamSrilanka.dev.repository.UserRepository;


@Service
public class RegistrationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TouristRepository touristRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerTourist(Tourist tourist, User user) {
        // Encode the password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Set userType to "tourist"
        user.setUserType("tourist");

        // Save the User entity
        User savedUser = userRepository.save(user);

        // Associate the saved user with the tourist and vice versa
//        savedUser.setTourist(tourist);
//        tourist.setUser(savedUser);


        // Save the Tourist entity
        touristRepository.save(tourist);

        return savedUser;

    }
}
