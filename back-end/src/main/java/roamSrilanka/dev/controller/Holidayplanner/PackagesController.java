package roamSrilanka.dev.controller.Holidayplanner;

import org.springframework.beans.factory.annotation.Autowired;
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




//            @PutMapping("/updateVehicle/{vehicleID}")
//    public Repository updateVehicle(@PathVariable("vehicleID") Long vehicleID, @RequestBody Vehicle vehicle) {
//        Vehicle exitingVehicle = vehicleService.findbyId(vehicleID).orElse(null);
//
//        if (exitingVehicle==null) {
//            return null;
//        }
//        else {
//            exitingVehicle.setVehicle_number(vehicle.getVehicle_number());
//            exitingVehicle.setColor(vehicle.getColor());
//            exitingVehicle.setModel(vehicle.getModel());
//            exitingVehicle.setStatus(vehicle.getStatus());
//
//            //save the changes made to the existing vehicle
//            vehicleService.saveVehicle(exitingVehicle);
//            return null;
//
//        }
//    }


}
