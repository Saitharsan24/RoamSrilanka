package roamSrilanka.dev.controller.Holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import roamSrilanka.dev.model.Holidayplanner.Packages;
import roamSrilanka.dev.model.Vehicle;
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

    @GetMapping("/packages/count")
    @ResponseBody
    public ResponseEntity<Long> countPackages() {
        return ResponseEntity.ok(packagesService.countPackages());
    }


    @PutMapping("/updatePackage/{id}")
    @ResponseBody
    public ResponseEntity updatePackage(@PathVariable("id") Integer id,@RequestBody Packages packages){
        Packages exitingPackage = packagesService.findbyId(id);

        if (exitingPackage==null){
            return null;
        }else {
            exitingPackage.setStatus(packages.getStatus());

            //save the changes made to the existing package
            packagesService.savestatus(exitingPackage);

            return null;

        }
    }


    //     get the specific package by packageID and add feedback
   @PutMapping("/packageFeedback/{packageID}")
    public ResponseEntity<Packages> saveFeedback(@PathVariable("packageID") Integer packageID, @RequestBody Packages updatedPackage) {
        Packages exitingPackage = packagesService.findbyId(packageID);

        if (exitingPackage == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else {

            exitingPackage.setFeedback(updatedPackage.getFeedback());
            packagesService.savePackage(exitingPackage);
            return new ResponseEntity<>(exitingPackage, HttpStatus.OK);

        }
    }

//    @PutMapping("/vehicleFeedback/{vehicleID}")
//    public ResponseEntity<Vehicle> saveFeedback(@PathVariable("vehicleID") Long vehicleID, @RequestBody Vehicle updatedVehicle) {
//        Vehicle exitingVehicle = vehicleService.findbyId(vehicleID).orElse(null);
//
//        if (exitingVehicle == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        else {
//
//            exitingVehicle.setFeedback(updatedVehicle.getFeedback());
//            vehicleService.saveVehicle(exitingVehicle);
//            return new ResponseEntity<>(exitingVehicle, HttpStatus.OK);
//
//        }
//    }
//
//



}
