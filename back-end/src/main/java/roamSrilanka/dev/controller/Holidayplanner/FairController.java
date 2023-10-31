package roamSrilanka.dev.controller.Holidayplanner;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import roamSrilanka.dev.model.Holidayplanner.Event;
import roamSrilanka.dev.model.Holidayplanner.Fair;
import roamSrilanka.dev.model.Holidayplanner.FairImage;
import roamSrilanka.dev.model.Hotel.HotelImage;
import roamSrilanka.dev.service.EventService;
import roamSrilanka.dev.service.holidayplanner.FairService;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
public class FairController {
    @Autowired
    private FairService fairService;

    @GetMapping("/getAllFairs")
    public List<Fair> getAllFairs() {
        return this.fairService.getAllFairs();
    }

    @GetMapping("/viewFairImages")
    public List<FairImage> getAllHotelsImages() {
        return fairService.getAllHotelsImages();
    }


    @PostMapping("/addFair")
    public ResponseEntity<Fair> createFair(@RequestBody Fair newFair) {
        Fair fair = fairService.createFair(newFair);
//        System.out.println("fair");
        return ResponseEntity.ok(fair);
    }

    @PostMapping("/addFairImage/{fairId}")
    public ResponseEntity<String> addFairImage(
            @PathVariable("fairId") Integer fairId,
            @RequestParam("imageFile") MultipartFile imageFile
    ) throws IOException, JSONException {
//        System.out.println(fairId);

        // Handle image upload
        String uploadedFileName = handleImageUpload(imageFile, fairId);
        FairImage fairImage = new FairImage();
        fairImage.setFairImage(uploadedFileName);
        fairImage.setFairId(fairId);
        fairService.addFairImage(fairImage);
//
        return ResponseEntity.ok(uploadedFileName);
    }

    private String handleImageUpload(MultipartFile imageFile, Integer fairId) {

        if (imageFile == null || imageFile.isEmpty()) {
            return null; // No image provided
        }

        Random random = new Random();
        int randomValue = random.nextInt(1000); // Change 1000 to the desired range
        String randomValueString = String.valueOf(randomValue);

// Concatenate the random value with the hotelId
        String fileName = fairId + "--" + randomValueString + ".jpg";


        String currentWorkingDirectory = System.getProperty("user.dir");

        // Construct the relative path to the parent folder
        String parentFolderRelativePath = ".." + File.separator;

// Combine with the current working directory to get the absolute path
        String parentFolderAbsolutePath = currentWorkingDirectory + File.separator + parentFolderRelativePath;

        System.out.println(parentFolderAbsolutePath);

        String filePath =parentFolderAbsolutePath +"src/assets/images/planner"+  File.separator  + fileName;

        try {
            // Create the directory structure if it doesn't exist
            File directory = new File(filePath).getParentFile();
            if (!directory.exists()) {
                directory.mkdirs();
            }

            File destFile = new File(filePath);
            imageFile.transferTo(destFile);

            return fileName; // Return the absolute path of the saved image
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/getParticularFair/{id}")
    public Optional<Fair> getFair (@PathVariable(value = "id") Integer identity ) {
        return this.fairService.getFair(identity);
    }

    @GetMapping("/fair/count")
    public Long countFairs() {
        return fairService.countFairs();
    }
    @DeleteMapping("/deleteFair/{id}")
    public String deleteFair (@PathVariable(value = "id") Integer identity) {
        return this.fairService.deleteFair(identity);
    }
}
