package roamSrilanka.dev.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Tourist.Tourist;
import roamSrilanka.dev.model.User;
import roamSrilanka.dev.service.UserService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    @ResponseBody
    public Iterable<User> getAllUsers(){
        return userService.getAllUsers();
    }


    @GetMapping("/users/{id}")
    @ResponseBody
    public ResponseEntity<User> getUser(@PathVariable Integer id) {
        return ResponseEntity.ok(userService.getUser(id));
    }
    @GetMapping("/viewUser/{id}")
    @ResponseBody
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        User viewUser = userService.getUserById(id);
        if(viewUser != null) {
            return ResponseEntity.ok(viewUser);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) throws JSONException {

       User user = userService.authenticateUser(loginRequest.getUserName(), loginRequest.getPassword());

         if(user != null) {

             JSONObject jsonResponse = new JSONObject();
             jsonResponse.put("userType", user.getUserType());
             jsonResponse.put("userId", user.getUserId());
             jsonResponse.put("userName", user.getUserName());
             jsonResponse.put("userFullname", user.getUserFullname());
             return new ResponseEntity<>(jsonResponse.toString(), HttpStatus.OK);

         }else{
             return new ResponseEntity<>("Login Failed", HttpStatus.UNAUTHORIZED);
         }

    }

//    @GetMapping("/viewUser/{userId}")
//    public User getUserByID(@PathVariable Integer id){
//        return userService.getUserByID(id);
//    }

    private static class LoginRequest{
        private String userName;
        private String password;

        public LoginRequest() {
        }

        public LoginRequest(String userName, String password) {
            this.userName = userName;
            this.password = password;
        }

        public String getUserName() {
            return userName;
        }

        public String getPassword() {
            return password;
        }


    }


    @PutMapping("/updatePassword/{id}")
    public ResponseEntity<User> updatePassword(@PathVariable Integer id, @RequestBody UpdatePasswordRequest updatePasswordRequest) {
        User existingUser = userService.getUserById(id);

        final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (existingUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        System.out.println(updatePasswordRequest.getCurrentPassword());
        System.out.println(updatePasswordRequest.getNewPassword());

        if (!passwordEncoder.matches(updatePasswordRequest.getCurrentPassword(), existingUser.getPassword())) {
            System.out.println("Password not matched");
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } else {
            // Hash the new password before updating
            String hashedNewPassword = passwordEncoder.encode(updatePasswordRequest.getNewPassword());
            existingUser.setPassword(hashedNewPassword);
            userService.updateUser(existingUser);
            return ResponseEntity.ok(existingUser);
        }
    }

    private static class UpdatePasswordRequest {
        private String currentPassword;
        private String newPassword;

        public UpdatePasswordRequest() {
        }

        public UpdatePasswordRequest(String currentPassword, String newPassword) {
            this.currentPassword = currentPassword;
            this.newPassword = newPassword;
        }

        public String getCurrentPassword() {
            return currentPassword;
        }

        public String getNewPassword() {
            return newPassword;
        }
    }


    @PutMapping("/updateUser/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User updatedUser) {
        User existingUser = userService.getUserById(id);

        if (existingUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingUser.setUserFullname(updatedUser.getUserFullname());
        userService.updateUser(existingUser);
        return ResponseEntity.ok(existingUser);
    }

}


