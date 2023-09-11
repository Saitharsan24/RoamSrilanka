package roamSrilanka.dev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roamSrilanka.dev.model.Packages;
import roamSrilanka.dev.repository.PackagesRepository;

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
}
