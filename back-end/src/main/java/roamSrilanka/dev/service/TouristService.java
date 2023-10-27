package roamSrilanka.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Holidayplanner.Holidayplanner;
import roamSrilanka.dev.model.Tourist.Tourist;
import roamSrilanka.dev.model.User;
import roamSrilanka.dev.repository.UserRepository;
import roamSrilanka.dev.repository.tourist.TouristRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Service
public class TouristService {

    @Autowired
    private TouristRepository touristRepository;

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Tourist addTourist (Tourist tourist){
        return touristRepository.save(tourist);
    }


    public List<Tourist> getAllTourist() {
        return touristRepository.findAll();
    }

    public Tourist getTouristById(Integer userId){
        return touristRepository.findById(userId).orElse(null);
    }

    public Iterable<Object> getAllTourist() {
        List<Tourist> tourists = touristRepository.findAll(); // Replace with your repository method to fetch tourists
        List<User> users = userRepository.findAll(); // Replace with your repository method to fetch users

        // Assuming both Tourist and User have a common field, e.g., userId
        Map<Integer, User> userMap = users.stream()
                .collect(Collectors.toMap(User::getUserId, user -> user));

        List<Object> mergedData = new ArrayList<>();

        for (Tourist tourist : tourists) {
            int userId = tourist.getUserId(); // Assuming you have a field like userId in Tourist
            User user = userMap.get(userId);
            if (user != null) {
                // Merge the Tourist and User data into a single object
                Map<String, Object> mergedObject = new HashMap<>();
                mergedObject.put("userID", tourist.getUserId());
                mergedObject.put("name", user.getUserFullname());
                mergedData.add(mergedObject);
            }
        }

        return mergedData;
    }

    public Tourist getTouristById(Integer id) {
        return touristRepository.findById(id).get();
    }
}

