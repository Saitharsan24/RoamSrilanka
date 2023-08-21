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
}
