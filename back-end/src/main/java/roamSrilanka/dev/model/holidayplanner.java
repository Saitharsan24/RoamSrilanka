package roamSrilanka.dev.model;

public class holidayplanner {
    private int userId;
    private String NIC;
    private int contac_no;
    private String name;

    public holidayplanner(int userId, String NIC, int contac_no, String name) {
        this.userId = userId;
        this.NIC = NIC;
        this.contac_no = contac_no;
        this.name = name;
    }

    public holidayplanner(String NIC, int contac_no, String name) {
        this.NIC = NIC;
        this.contac_no = contac_no;
        this.name = name;
    }

}
