package roamSrilanka.dev.controller;
import org.springframework.web.bind.annotation.*;

import roamSrilanka.dev.model.Vehicle;
import roamSrilanka.dev.service.VehicleService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class VehicleController {

    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    // working in insomnia
    @GetMapping("/vehicle")
     public List<Vehicle> findAllVehicle() {
        return vehicleService.findAllVehicle();
     }

    // working in insomnia
     @GetMapping("vehicle/{vehicleID}")
     public Optional<Vehicle> findVehicleById(@PathVariable("vehicleID") Long vehicleID) {
        return vehicleService.findbyId(vehicleID);
     }

     //add working in insomnia
//     @PostMapping("/addVehicle")
//     public String saveVehicle(@ModelAttribute(name="Vehicle") Vehicle vehicle,
//                               RedirectAttributes ra,
//                               @RequestParam("image1")MultipartFile multipartImage1File) throws IOException {
//
//        String Image1Name = StringUtils.cleanPath(Objects.requireNonNull(multipartImage1File.getOriginalFilename()));
//        vehicle.setImage1(Image1Name);
//
////        String Image2Name = StringUtils.cleanPath(multipartImage2File.getOriginalFilename());
////        vehicle.setImage1(Image2Name);
////
////        String Image3Name = StringUtils.cleanPath(multipartImage3File.getOriginalFilename());
////        vehicle.setImage1(Image3Name);
////
////        String Image4Name = StringUtils.cleanPath(multipartImage4File.getOriginalFilename());
////        vehicle.setImage1(Image4Name);
//
//        Vehicle savedVehicle =  vehicleService.saveVehicle(vehicle);
//
//        String uploadDir = "./vehicle-images/" + savedVehicle.getVehicleID();
//
////        uploading in vehicle-images
//        Path uploadPath = Paths.get(uploadDir);
//
//        if (!Files.exists(uploadPath)) {
//            Files.createDirectories(uploadPath);
//        }
//
//        try (InputStream inputStream = multipartImage1File.getInputStream()){
//            Path filePath = uploadPath.resolve((Path) multipartImage1File);
//            System.out.println(filePath.toFile().getAbsolutePath());
//
//            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
//        } catch (IOException e) {
//            throw new IOException("Couldn't save the file " + multipartImage1File);
//        }
//
//        ra.addFlashAttribute("message", "added");
//
//        return "redirect:/driver/driverVehicle";
//     }

     @PostMapping("/addVehicle")
     public Vehicle saveVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.saveVehicle(vehicle);
     }

    @PutMapping
    public Vehicle updateVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.updateVehicle(vehicle);
    }

    @DeleteMapping("/{vehicleID}")
    public void deleteVehicle(@PathVariable("vehicleID") Long vehicleID) {
        vehicleService.deleteVehicle(vehicleID);
    }
}
