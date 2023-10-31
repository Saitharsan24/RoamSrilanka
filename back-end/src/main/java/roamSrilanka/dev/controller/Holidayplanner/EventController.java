package roamSrilanka.dev.controller.Holidayplanner;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import roamSrilanka.dev.model.Holidayplanner.Event;

import roamSrilanka.dev.service.holidayplanner.EventService;
import roamSrilanka.dev.model.Holidayplanner.EventImage;
import roamSrilanka.dev.model.Holidayplanner.FairImage;



import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping("/getAllEvents")
    public List<Event> getAllEvents() {
        return this.eventService.getAllEvents();
    }

    @GetMapping("/events")
    public List<Object[]> getEventsFields() {
        return eventService.getEventsFields();
    }

    @PostMapping("/addEvent")
    public Event createEvent(@RequestBody Event newEvent) {
        return this.eventService.createEvent(newEvent);
    }

    @PostMapping("/addEventImage/{eventId}")
    public ResponseEntity<String> addEventImage(
            @PathVariable("eventId") Integer eventId,
            @RequestParam("imageFile") MultipartFile imageFile
    ) throws IOException, JSONException {
//        System.out.println(eventId);

        // Handle image upload
        String uploadedFileName = handleImageUpload(imageFile, eventId);
        EventImage eventImage = new EventImage();
        eventImage.setEventImage(uploadedFileName);
        eventImage.setEventId(eventId);
        eventService.addEventImage(eventImage);
//
        return ResponseEntity.ok(uploadedFileName);
    }

    private String handleImageUpload(MultipartFile imageFile, Integer eventId) {

        if (imageFile == null || imageFile.isEmpty()) {
            return null; // No image provided
        }

        Random random = new Random();
        int randomValue = random.nextInt(1000); // Change 1000 to the desired range
        String randomValueString = String.valueOf(randomValue);

// Concatenate the random value with the hotelId
        String fileName = eventId + "---" + randomValueString + ".jpg";


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

    @GetMapping("/getParticularEvent/{id}")
    public Optional<Event> getEvent (@PathVariable(value = "id") Integer identity ) {
        return this.eventService.getEvent(identity);
    }

    @GetMapping("/event/count")
    public Long countEvents() {
        return eventService.countEvents();
    }

//    @PutMapping("/updateEvent/{id}")
//    public Event updateEvent(@PathVariable(value = "id") Integer identity, @RequestBody Event eventRequest) {
//        return this.eventService.updateEvent(identity, eventRequest);
//    }

    @DeleteMapping("/deleteEvent/{id}")
    public String deleteEvent (@PathVariable(value = "id") Integer identity) {
        return this.eventService.deleteEvent(identity);
    }
}
