package roamSrilanka.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/packages")
    public ResponseEntity<String> addPackage(@RequestBody Packages newPackage) {
        packagesService.addPackage(newPackage);
        return ResponseEntity.ok("Package added successfully");
    }



}
