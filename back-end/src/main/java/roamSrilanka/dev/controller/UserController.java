package roamSrilanka.dev.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.User;
import roamSrilanka.dev.service.UserService;

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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) throws JSONException {
       User user = userService.authenticateUser(loginRequest.getUserName(), loginRequest.getPassword());

         if(user != null) {

             JSONObject jsonResponse = new JSONObject();
             jsonResponse.put("userType", user.getUserType());
             return new ResponseEntity<>(jsonResponse.toString(), HttpStatus.OK);

         }else{
             return new ResponseEntity<>("Login Failed", HttpStatus.UNAUTHORIZED);
         }


    }

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


}
