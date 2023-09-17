package roamSrilanka.dev.service.holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Holidayplanner.Holidayplanner;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.repository.holidayplanner.HolidayplannerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class HolidayplannerService {

    @Autowired
    private HolidayplannerRepository holidayplannerRepository;


    public Holidayplanner addPlanner(Holidayplanner holidayplanner){
        return holidayplannerRepository.save(holidayplanner);
    }

    public List<Holidayplanner> getAllHolidayplanner() {
        return holidayplannerRepository.findAll();
    }

    public Holidayplanner getHolidayplannerById(Integer userId){
        return holidayplannerRepository.findById(userId).orElse(null);
    }


    //delete holidayplanner
    public void deleteHolidayplanner(Integer userId){
        holidayplannerRepository.deleteById(userId);
    }
}
