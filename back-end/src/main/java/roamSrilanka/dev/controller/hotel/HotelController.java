package roamSrilanka.dev.controller.hotel;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import roamSrilanka.dev.model.Hotel.HotelImage;
import roamSrilanka.dev.model.Hotel.HotelRooms;
import roamSrilanka.dev.model.Hotel.Hotels;
import roamSrilanka.dev.service.hotel.HotelService;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Random;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class HotelController {

    @Autowired
     private HotelService hotelService;


    //Storing hotel details to the database when adding new hotels
    @PostMapping("/addHotel")
    public ResponseEntity<Hotels> addHotel(@RequestBody Hotels hotels){

        Hotels hotel = hotelService.addHotel(hotels);
        System.out.println(hotel);
        return ResponseEntity.ok(hotel);
    }

    @PostMapping("/addHotelImage/{hotelId}")
    public ResponseEntity<String> addHotelImage(
            @PathVariable("hotelId") Integer hotelId,
            @RequestParam("imageFile") MultipartFile imageFile
    ) throws IOException, JSONException {
        System.out.println(hotelId);

        // Handle image upload
        String uploadedFileName = handleImageUpload(imageFile, hotelId);
        HotelImage hotelImage = new HotelImage();
        hotelImage.setHotelImage(uploadedFileName);
        hotelImage.setHotelId(hotelId);
        hotelService.addHotelImage(hotelImage);
//
        return ResponseEntity.ok(uploadedFileName);
    }

    //Viewing all hotel details from the database
    @GetMapping("/viewHotels")
    public List<Hotels> getAllHotels() {
        return hotelService.getAllHotels();
    }

    @GetMapping("/viewHotelsImages")
    public List<HotelImage> getAllHotelsImages() {
        return hotelService.getAllHotelsImages();
    }

    //Getting a particulat hotel datails with the id
    @GetMapping("/viewHotel/{id}")
    public ResponseEntity<Hotels> getHotelById(@PathVariable Integer id) {
        Hotels viewHotel = hotelService.getHotelById(id);
        if(viewHotel != null) {
            return ResponseEntity.ok(viewHotel);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/viewHotelImage/{id}")
    public ResponseEntity<HotelImage> getHotelImageById(@PathVariable Integer id) {
        HotelImage viewHotelImage = hotelService.getHotelImageById(id);
        if(viewHotelImage != null) {
            return ResponseEntity.ok(viewHotelImage);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/updateHotel/{hotelId}")
    public ResponseEntity<Hotels> updateHotel(@PathVariable Integer hotelId, @RequestBody Hotels updatedHotel) {
        Hotels existingHotel = hotelService.getHotelById(hotelId);

        if (existingHotel == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


        // Update only the non-null fields from updatedHotel
        if (updatedHotel.getHotelName() != null && !updatedHotel.getHotelName().isEmpty()) {
            existingHotel.setHotelName(updatedHotel.getHotelName());
        }
        if (updatedHotel.getStarRating() != null && updatedHotel.getStarRating() > 0) {
            existingHotel.setStarRating(updatedHotel.getStarRating());
        }
        if (updatedHotel.getUserRating() != null && updatedHotel.getUserRating() >= 0) {
            existingHotel.setUserRating(updatedHotel.getUserRating());
        }
        if (updatedHotel.getDescription() != null && !updatedHotel.getDescription().isEmpty()) {
            existingHotel.setDescription(updatedHotel.getDescription());
        }
        if (updatedHotel.getHotelType() != null && !updatedHotel.getHotelType().isEmpty()) {
            existingHotel.setHotelType(updatedHotel.getHotelType());
        }
        if (updatedHotel.getAddress() != null && !updatedHotel.getAddress().isEmpty()) {
            existingHotel.setAddress(updatedHotel.getAddress());
        }
        if (updatedHotel.getCity() != null && !updatedHotel.getCity().isEmpty()) {
            existingHotel.setCity(updatedHotel.getCity());
        }
      
        // Save the updated hotel
        hotelService.saveHotel(existingHotel);

        return new ResponseEntity<>(existingHotel, HttpStatus.OK);
    }

    private String handleImageUpload(MultipartFile imageFile, Integer hotelId) {

        if (imageFile == null || imageFile.isEmpty()) {
            return null; // No image provided
        }

        Random random = new Random();
        int randomValue = random.nextInt(1000); // Change 1000 to the desired range
        String randomValueString = String.valueOf(randomValue);

// Concatenate the random value with the hotelId
        String fileName = hotelId + "-" + randomValueString + ".jpg";


        String currentWorkingDirectory = System.getProperty("user.dir");

        // Construct the relative path to the parent folder
        String parentFolderRelativePath = ".." + File.separator;

// Combine with the current working directory to get the absolute path
        String parentFolderAbsolutePath = currentWorkingDirectory + File.separator + parentFolderRelativePath;

        System.out.println(parentFolderAbsolutePath);

        String filePath =parentFolderAbsolutePath +"src/assets/images/hotel"+  File.separator  + fileName;

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

    @PutMapping("/hotelAvailability/{id}")
    public ResponseEntity<Hotels> hotelAvailability(@PathVariable Integer id) {
        Hotels existingHotel = hotelService.getHotelById(id);

        if (existingHotel == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (existingHotel.getHotelAvailability() != null) {
            existingHotel.setHotelAvailability(false);
        }

        hotelService.saveHotel(existingHotel);
        return ResponseEntity.ok(existingHotel);
    }
}
