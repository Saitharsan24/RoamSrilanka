package roamSrilanka.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.User;
import roamSrilanka.dev.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User authenticateUser(String userName, String password){
        User user = userRepository.findByUserName(userName);
        if(user != null){
            if(passwordEncoder.matches(password, user.getPassword())){
                return user;
            }
        }
        return null;
    }
}