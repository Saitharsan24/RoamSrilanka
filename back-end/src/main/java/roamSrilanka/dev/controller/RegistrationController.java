package roamSrilanka.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.Tourist.Tourist;
import roamSrilanka.dev.model.User;
import roamSrilanka.dev.service.RegistrationService;

import java.util.Date;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;


    @PostMapping("/tourist")
    public ResponseEntity<User> registerTourist(@RequestBody RegistrationRequest request) {
        User user = new User( request.getUsername(), request.getPassword(), request.getFullName()); // userType will be set inside the service
        Tourist tourist = new Tourist(request.getDob(), request.getGender(), request.getPassportNumber(), request.getCountry());

        User savedUser = registrationService.registerTourist(tourist, user);
        return new ResponseEntity<>(savedUser, HttpStatus.OK);
    }

    // Create a DTO for the registration request
    public static class RegistrationRequest {
        private String fullName;
        private Date dob;
        private String gender;
        private String username; // email
        private String passportNumber;
        private String country;
        private String password;

        // Getters, setters, and constructors...

        public RegistrationRequest(String fullName, Date dob, String gender, String username, String passportNumber, String country, String password) {
            this.fullName = fullName;
            this.dob = dob;
            this.gender = gender;
            this.username = username;
            this.passportNumber = passportNumber;
            this.country = country;
            this.password = password;
        }

        public String getFullName() {
            return fullName;
        }

        public void setFullName(String fullName) {
            this.fullName = fullName;
        }

        public Date getDob() {
            return dob;
        }

        public void setDob(Date dob) {
            this.dob = dob;
        }

        public String getGender() {
            return gender;
        }

        public void setGender(String gender) {
            this.gender = gender;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassportNumber() {
            return passportNumber;
        }

        public void setPassportNumber(String passportNumber) {
            this.passportNumber = passportNumber;
        }

        public String getCountry() {
            return country;
        }

        public void setCountry(String country) {
            this.country = country;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
