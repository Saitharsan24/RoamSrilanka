package roamSrilanka.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import roamSrilanka.dev.model.Packages;
import roamSrilanka.dev.model.User;
import roamSrilanka.dev.repository.PackagesRepository;
import roamSrilanka.dev.service.PackagesService;

@RestController
public class PackagesController {
    @Autowired
    private PackagesService packagesService;

    @GetMapping("/packages")
    @ResponseBody
    public Iterable<Packages> getAllpackages(){
        return packagesService.getAllPackages();
    }



}
