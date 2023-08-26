package roamSrilanka.dev.model;


import jakarta.persistence.*;

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

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Tourist tourist;

    public User() {
    }

    public User(int userId, String userType, String userName, String password) {
        this.userId = userId;
        this.userType = userType;
        this.userName = userName;
        this.password = password;
    }

    public User(String userType, String userName, String password) {
        this.userType = userType;
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

    //setters

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

}
