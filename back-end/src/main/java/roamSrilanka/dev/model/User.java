package roamSrilanka.dev.model;


import jakarta.persistence.*;
import roamSrilanka.dev.model.Tourist.Tourist;

@Table(name = "users")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;

    @Column(name = "user_type")
    private String userType;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "User_fullname")
    private String userFullname;

//    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
//    private Tourist tourist;

    public User() {
    }

    public User(int userId, String userType, String userName, String password, String userFullname) {
        this.userId = userId;
        this.userType = userType;
        this.userName = userName;
        this.password = password;
        this.userFullname = userFullname;
    }

    public User(String userName, String password, String userFullname) {
        this.userName = userName;
        this.password = password;
        this.userFullname = userFullname;
    }


    public User(String userType, String userName, String password, String userFullname) {
        this.userType = userType;
        this.userName = userName;
        this.password = password;
        this.userFullname = userFullname;
    }

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    //getters

    public int getUserId() {
        return userId;
    }

    public String getUserType() {
        return userType;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public String getUserFullname() {
        return userFullname;
    }

    //setters
    public void setUserFullname(String userFullname) {
        this.userFullname = userFullname;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public void setTourist(Tourist tourist) {
//        this.tourist = tourist;
//    }
}
