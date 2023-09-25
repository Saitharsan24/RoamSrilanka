package roamSrilanka.dev.controller.Holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Holidayplanner.Packages;
import roamSrilanka.dev.service.holidayplanner.PackagesService;

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

    @DeleteMapping("/packages/{id}")
    public ResponseEntity<String> deletePackage(@PathVariable Integer id) {
        packagesService.deletePackage(id);
        return ResponseEntity.ok("Package deleted successfully");
    }

    @GetMapping("/packages/{id}")
    @ResponseBody
    public ResponseEntity<Packages> getPackage(@PathVariable Integer id) {
        return ResponseEntity.ok(packagesService.getPackage(id));
    }







}
