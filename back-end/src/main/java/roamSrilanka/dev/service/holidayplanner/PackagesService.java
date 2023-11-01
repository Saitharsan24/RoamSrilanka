package roamSrilanka.dev.service.holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Holidayplanner.Packages;
import roamSrilanka.dev.model.Vehicle;
import roamSrilanka.dev.repository.holidayplanner.PackagesRepository;

@Service
public class PackagesService {

    @Autowired
    private PackagesRepository packagesRepository;



    public  Iterable<Packages> getAllPackages(){ return packagesRepository.findAll();}

    public void addPackage(Packages newPackage) {
        // You can perform any necessary validation or business logic here before saving
        packagesRepository.save(newPackage);
    }

    public void deletePackage(Integer id) {
        // You can perform any necessary validation or business logic here before deleting
        packagesRepository.deleteById(id);
    }


    public Packages getPackage(Integer id) {
        return packagesRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid package Id:" + id));
    }

    public Long countPackages() {
        return packagesRepository.count();
    }

    public Packages findbyId(Integer id) {
        return packagesRepository.findById(id).orElse(null);
    }

    public void savestatus(Packages exitingPackage) {
        packagesRepository.save(exitingPackage);
    }

    public void savePackage(Packages exitingPackage) {
        packagesRepository.save(exitingPackage);

    }


}
