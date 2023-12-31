import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import * as Icon from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import "./../../styles/hotel/our-hotel.css";
import ImageUpload from "../../components/imageUpload";
import axios from "axios";
import StarRating from "../../components/Rating";
import { set } from "lodash";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

const OurHotel = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [hotelsImages, setHotelsImages] = useState([]);
  const [hotelId, setHotelId] = useState("");
  const [selectedHotel, setSelectedHotel] = useState([]);

  const [placesInput, setPlacesInput] = useState("");
  const [places, setPlaceSuggestions] = useState([]);
  const fetchPlaceSuggestions = async (query) => {
    try {
      const response = await axiosInstance.get(
        `https://nominatim.openstreetmap.org/search?q=${query}&countrycodes=LK&format=json`
      );
      if (response.status === 200) {
        const suggestions = response.data.map((item) => ({
          name: item.display_name,
        }));
        setPlaceSuggestions(suggestions);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    console.log(
      "handleSuggestionClick called with suggestion:",
      suggestion.name
    );
    setPlacesInput(suggestion.name);
    hotelData.address = suggestion.name;
    setPlaceSuggestions([]);
  };

  const handlePlacesInputChange = (e) => {
    const inputvalue = e.target.value;
    setPlacesInput(inputvalue);
    if (inputvalue.length >= 3) {
      fetchPlaceSuggestions(inputvalue);
    } else {
      setPlaceSuggestions([]);
    }
  };

  const openModalAdd = () => {
    setIsAddModalOpen(true);
  };

  const closeModalAdd = () => {
    setIsAddModalOpen(false);
  };

  const openModalEdit = (hotelId) => {
    setIsEditModalOpen(true);
    setHotelId(hotelId);
    setSelectedHotel(hotels.find((hotel) => hotel.hotelId === hotelId));
    console.log(hotelId);
  };

  const closeModalEdit = () => {
    setIsEditModalOpen(false);
  };

  //GETTING THE FILE FROM UPLOAD COMPONENT
  const [selectedFile, setSelectedFile] = useState(null);

  //STORING IMAGE FILE FOR OOPERATIONS
  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setHotelData((prevData) => {
      if (checked) {
        // If the checkbox is checked, add the amenity to the hotelAmenities array
        return {
          ...prevData,
          hotelAmenities: [...prevData.hotelAmenities, name],
        };
      } else {
        // If the checkbox is unchecked, remove the amenity from the hotelAmenities array
        return {
          ...prevData,
          hotelAmenities: prevData.hotelAmenities.filter(
            (amenity) => amenity !== name
          ),
        };
      }
    });
    // console.log(hotelData);
  };

  const [hotelData, setHotelData] = useState({
    hotelName: "",
    description: "",
    hotelType: "",
    hotelRating: 0,
    city: "",
    address: "",
    hotelAmenities: [],
    hotelImage: null,
  });

  const inputHoteldata = (name, value) => {
    // console.log(name, value);
    setHotelData((prev) => ({ ...prev, [name]: value }));
    // console.log(hotelData);
  };

  const handleHotelRatingChange = (rating) => {
    setHotelData((prevData) => ({
      ...prevData,
      hotelRating: rating,
    }));
  };

  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  const handleImageChange = (e) => {
    const selectedFiles = e.target.files; // Get an array of selected image files
    const imageFiles = [];

    // Iterate through the selected files and add them to the imageFiles array
    for (let i = 0; i < selectedFiles.length; i++) {
      imageFiles.push(selectedFiles[i]);
    }

    inputHoteldata("hotelImage", imageFiles); // Update productDetails state with the selected images
    // console.log(imageFiles)
  };

  const handleAddHotel = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/addHotel", {
        hotelName: hotelData.hotelName,
        description: hotelData.description,
        hotelType: hotelData.hotelType,
        starRating: hotelData.hotelRating,
        city: hotelData.city,
        address: hotelData.address,
        city: hotelData.city,
        price: hotelData.price,
      });

      if (response.status === 200) {
        console.log(hotelData.hotelImage.length);
        try {
          for (let i = 0; i < hotelData.hotelImage.length; i++) {
            const formData = new FormData();
            formData.append("imageFile", hotelData.hotelImage[i]);
            const imageResponse = await axiosInstance.post(
              `/addHotelImage/${response.data.hotelId}`,
              formData,
              {
                headers: {
                  "Content-Type": `multipart/form-data`,
                },
              }
            );
            if (imageResponse.status === 200) {
              console.log("image uploaded");
            }
          }
          closeModalAdd();
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get("/viewHotels")
      .then((response) => {
        setHotels(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get("/viewHotelsImages")
      .then((response) => {
        setHotelsImages(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const mergedData = hotels.map((hotel) => {
    // Find the corresponding image for each hotel based on the hotelId
    const image = hotelsImages.find((image) => image.hotelId === hotel.hotelId);

    // Create a new object containing both hotel and image data
    return {
      ...hotel,
      image: image ? image.hotelImage : null,
    };
  });

  const handleEditHotel = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/updateHotel/${hotelId}`, {
        hotelType: hotelData.hotelType,
        description: hotelData.description,
        starRating: hotelData.hotelRating,
        address: hotelData.address,
        latitude: hotelData.latitude,
        longitude: hotelData.longitude,
        hotelName: hotelData.hotelName,
        city: hotelData.city,
      });

      if (response.status === 200) {
        // console.log();
        console.log("okkk");
        closeModalEdit();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditHotelId = (e) => {
    setHotelId(e.target.value);
  };

  return (
    <div className="d-flex flex-column gap-2 w-100 my-lg-2">
      <div className="d-flex flex-column flex-md-column flex-lg-row col-lg-12 col-md-12 col-12 gap-lg-5 justify-content-lg-between justify-content-md-between align-items-center">
        <div className="d-flex flex-row gap-4 col-lg-5 col-md-7 col-10">
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "30px",
              fontWeight: "600",
              letterSpacing: "-0.22px",
            }}
          >
            Add Hotel
          </p>
          <button onClick={openModalAdd} style={{ border: "none" }}>
            <Icon.PlusSquareFill
              className="my-2"
              size={25}
              style={{ color: "#023047;" }}
            />
          </button>
        </div>
        <div className="search d-none d-lg-flex d-md-flex flex-row col-lg-2 col-md-7 col-3 gap-2">
          <input placeholder="Search"></input>
          <Icon.SearchHeartFill
            size={22}
            style={{ color: "#aaa" }}
            class="fa fa-search my-1"
          />
        </div>
      </div>
      <div className="container">
        <Carousel>
          {mergedData.map(
            (hotel, index) =>
              index % 3 === 0 && (
                <Carousel.Item key={index}>
                  <div className="d-flex flex-row justify-content-evenly">
                    {mergedData.slice(index, index + 3).map((hotel) => (
                      <div
                        key={hotel.hotelId}
                        className="d-flex flex-column gap-3 mx-lg-0 mx-md-5 mx-1 col-lg-3 col-md-10 col-11 shadow-lg"
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#FFFFFF",
                        }}
                      >
                        {hotel && hotel.image ? (
                          <img
                            className="img-fluid"
                            style={{
                              borderRadius: "10px",
                            }}
                            src={require(`../../assets/images/hotel/${hotel.image}`)}
                            alt={hotel.image}
                          />
                        ) : (
                          <img
                            className="img-fluid"
                            style={{
                              borderRadius: "10px",
                            }}
                            src={require("./../../assets/images/room-image1.png")}
                            alt="Default Alt Text"
                          />
                        )}
                        <div className="d-flex flex-column justify-content-evenly">
                          <div className="d-flex flex-column">
                            <p
                              style={{
                                textAlign: "center",
                                fontFamily: "Poppins",
                                fontSize: "25px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0"
                            >
                              {hotel.hotelName}
                            </p>
                            <p
                              style={{
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                fontWeight: "400",
                              }}
                              className="m-0 mx-2"
                            >
                              <ReactStars
                                count={hotel.starRating}
                                // onChange={ratingChanged}
                                size={15}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={
                                  <i className="fa fa-star-half-alt"></i>
                                }
                                fullIcon={<i className="fa fa-star"></i>}
                                color="#ffd700"
                              />
                              {hotel.starRating}-star hotel
                            </p>
                            <p
                              style={{
                                fontFamily: "Poppins",
                              }}
                              className="m-0 mx-2"
                            >
                              <span
                                style={{ fontWeight: "600", fontSize: "16px" }}
                              >
                                {hotel.userRating}/10 Good
                              </span>
                              <br />
                            </p>
                          </div>
                          <div className="d-flex flex-column justify-content-between me-1">
                            <div className="d-flex flex-column my-2">
                              <p
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                }}
                                className="m-0 mx-2"
                              >
                                Popular amenities
                                <br />
                              </p>
                              <div className="d-flex flex-column mx-4">
                                <p className="m-0" style={{ fontSize: "13px" }}>
                                  <Icon.CupHotFill size={15} /> Breakfast
                                  available
                                </p>
                                <p className="m-0" style={{ fontSize: "13px" }}>
                                  <Icon.Wifi size={15} /> Free Wifi
                                </p>
                                <p className="m-0" style={{ fontSize: "13px" }}>
                                  <Icon.PSquareFill size={15} /> Parking
                                  included
                                </p>
                                <p className="m-0" style={{ fontSize: "13px" }}>
                                  <MdIcons.MdPool size={15} /> Pool
                                </p>
                                <p className="m-0" style={{ fontSize: "13px" }}>
                                  <BiIcons.BiSolidDrink size={15} /> Bar
                                </p>
                                <p className="m-0" style={{ fontSize: "13px" }}>
                                  <ImIcons.ImSpoonKnife size={15} /> Restaurants
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between my-1 mx-2">
                              <Link
                                to={`/hotel/aboutHotel?id=${hotel.hotelId}`}
                              >
                                see all <Icon.ChevronRight />
                              </Link>
                              <Link
                                onClick={() => openModalEdit(hotel.hotelId)}
                                style={{
                                  border: "none",
                                  color: "black",
                                  backgroundColor: "white",
                                }}
                              >
                                <Icon.PencilSquare size={25} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              )
          )}
        </Carousel>
      </div>

      <Modal show={isAddModalOpen} onHide={closeModalAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Hotel Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="d-flex flex-column mx-2" style={{}}>
              <div className="d-flex flex-column mx-3">
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Hotel Name
                      </p>
                      <input
                        type="text"
                        name="hotelName"
                        value={hotelData.hotelName}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        City
                      </p>
                      <input
                        type="text"
                        name="city"
                        value={hotelData.city}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>

                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Address
                      </p>
                      <input
                        className="p-2"
                        type="text"
                        placeholder="Places of the Package"
                        name="places"
                        value={placesInput}
                        onChange={handlePlacesInputChange}
                      ></input>
                    </label>
                    {places.length > 0 && (
                      <ul className="suggestions">
                        {places.map((suggestion, index) => (
                          <li
                            onClick={() => handleSuggestionClick(suggestion)}
                            key={index}
                          >
                            {suggestion.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="d-flex mt-3 mb-2 flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Hotel type
                      </p>
                      <input
                        type="text"
                        name="hotelType"
                        value={hotelData.hotelType}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Add star rating{" "}
                      </p>
                      <StarRating
                        selectedRating={hotelData.hotelRating}
                        onRatingChange={handleHotelRatingChange}
                      />
                    </label>
                  </div>

                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Description
                      </p>
                      <input
                        style={{ width: "26rem", height: "7rem" }}
                        type="text"
                        name="description"
                        value={hotelData.description}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>

                  <p
                    style={{
                      textAlign: "",
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      color: "",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    Hotel images
                  </p>
                  <div className="d-flex flex-row gap-2">
                    {/* <ImageUpload onImagesSelected={handleImagesSelected} /> */}
                    <input
                      type="file"
                      name="hotelImage"
                      multiple // Allow multiple file selection
                      onChange={(e) => handleImageChange(e)}
                    />
                  </div>
                </div>
                <p
                  style={{
                    textAlign: "",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    color: "",
                    fontWeight: "600",
                  }}
                  className="m-0 my-2"
                >
                  Hotel amenities
                </p>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row gap-2">
                    <div className="d-flex col-7">
                      <ui style={{ listStyle: "none" }}>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="pool" // This should match the amenity name
                              checked={selectedCheckboxes.includes("pool")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Pool
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="freeWifi" // This should match the amenity name
                              checked={selectedCheckboxes.includes("freeWifi")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Free WiFi
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="restaurent" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "restaurent"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Restaurant
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="parking" // This should match the amenity name
                              checked={selectedCheckboxes.includes("parking")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Parking included
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="breakfast" // This should match the amenity name
                              checked={selectedCheckboxes.includes("breakfast")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Breakfast available
                          </label>
                        </li>
                      </ui>
                    </div>
                    <div className="d-flex col-5">
                      <ui style={{ listStyle: "none" }}>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="houseKeeping" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "houseKeeping"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Housekeeping
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="business" // This should match the amenity name
                              checked={selectedCheckboxes.includes("business")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Business services
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="airConditioning" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "airConditioning"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Air conditioning
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="bar" // This should match the amenity name
                              checked={selectedCheckboxes.includes("bar")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Bar
                          </label>
                        </li>
                      </ui>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="d-flex flex-row gap-5 my-3 justify-content-center">
            <button
              onClick={closeModalAdd}
              className="p-2"
              style={{
                borderRadius: "5px",
                backgroundColor: "rgba(73, 151, 207, 0.78)",
                border: "#fff",
                color: "#fff",
              }}
            >
              Cancel
            </button>
            <button
              method="POST"
              onClick={handleAddHotel}
              type="submit"
              className="p-2"
              style={{
                borderRadius: "5px",
                backgroundColor: "rgba(73, 151, 207, 0.78)",
                border: "#fff",
                color: "#fff",
              }}
            >
              Submit
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={isEditModalOpen} onHide={closeModalEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Hotel Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {hotels.find((hotel) => hotel.hotelId === hotelId) ? (
            <div>
              <form>
                <input
                  type="hidden"
                  name="hotelId"
                  value={hotelId}
                  onChange={handleEditHotelId}
                />
                <div className="d-flex flex-column mx-2" style={{}}>
                  <div className="d-flex flex-column mx-3">
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-row gap-5">
                        <label>
                          <p
                            style={{
                              textAlign: "",
                              fontFamily: "Poppins",
                              fontSize: "18px",
                              color: "",
                              fontWeight: "600",
                              marginBottom: "0px",
                            }}
                          >
                            Hotel Name
                          </p>
                          <input
                            type="text"
                            name="hotelName"
                            placeholder={selectedHotel.hotelName}
                            value={hotelData.hotelName}
                            onChange={(e) => {
                              inputHoteldata(e.target.name, e.target.value);
                            }}
                          ></input>
                        </label>
                        <label>
                          <p
                            style={{
                              textAlign: "",
                              fontFamily: "Poppins",
                              fontSize: "18px",
                              color: "",
                              fontWeight: "600",
                              marginBottom: "0px",
                            }}
                          >
                            City
                          </p>
                          <input
                            type="text"
                            name="city"
                            placeholder={selectedHotel.city}
                            value={hotelData.city}
                            onChange={(e) => {
                              inputHoteldata(e.target.name, e.target.value);
                            }}
                          ></input>
                        </label>
                      </div>
                      <div className="d-flex flex-row gap-5">
                        <label>
                          <p
                            style={{
                              textAlign: "",
                              fontFamily: "Poppins",
                              fontSize: "18px",
                              color: "",
                              fontWeight: "600",
                              marginBottom: "0px",
                            }}
                          >
                            Address
                          </p>
                          <input
                            className="p-2"
                            type="text"
                            placeholder={selectedHotel.address}
                            name="places"
                            value={placesInput}
                            onChange={handlePlacesInputChange}
                          ></input>
                        </label>
                        {places.length > 0 && (
                          <ul className="suggestions">
                            {places.map((suggestion, index) => (
                              <li
                                onClick={() =>
                                  handleSuggestionClick(suggestion)
                                }
                                key={index}
                              >
                                {suggestion.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="d-flex mt-3 mb-2 flex-row gap-5">
                        <label>
                          <p
                            style={{
                              textAlign: "",
                              fontFamily: "Poppins",
                              fontSize: "18px",
                              color: "",
                              fontWeight: "600",
                              marginBottom: "0px",
                            }}
                          >
                            Hotel type
                          </p>
                          <input
                            type="text"
                            name="hotelType"
                            placeholder={selectedHotel.hotelType}
                            value={hotelData.hotelType}
                            onChange={(e) => {
                              inputHoteldata(e.target.name, e.target.value);
                            }}
                          ></input>
                        </label>
                        <label>
                          <p
                            style={{
                              textAlign: "",
                              fontFamily: "Poppins",
                              fontSize: "18px",
                              color: "",
                              fontWeight: "600",
                              marginBottom: "0px",
                            }}
                          >
                            Add star rating{" "}
                          </p>
                          <StarRating
                            selectedRating={hotelData.hotelRating}
                            onRatingChange={handleHotelRatingChange}
                          />
                        </label>
                      </div>
                      <div className="d-flex flex-row gap-5">
                        <label>
                          <p
                            style={{
                              textAlign: "",
                              fontFamily: "Poppins",
                              fontSize: "18px",
                              color: "",
                              fontWeight: "600",
                              marginBottom: "0px",
                            }}
                          >
                            Description
                          </p>
                          <input
                            style={{ width: "26rem", height: "7rem" }}
                            type="text"
                            name="description"
                            placeholder={selectedHotel.description}
                            value={hotelData.description}
                            onChange={(e) => {
                              inputHoteldata(e.target.name, e.target.value);
                            }}
                          ></input>
                        </label>
                      </div>
                    </div>
                    <p
                      style={{
                        textAlign: "",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        color: "",
                        fontWeight: "600",
                      }}
                      className="m-0 my-2"
                    >
                      Hotel amenities
                    </p>
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-row gap-2">
                        <div className="d-flex col-7">
                          <ui style={{ listStyle: "none" }}>
                            <li>
                              <label>
                                <input type="checkbox"></input> Pool
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Free WiFi
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Restaurant
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Parking included
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Breakfast
                                available
                              </label>
                            </li>
                          </ui>
                        </div>
                        <div className="d-flex col-5">
                          <ui style={{ listStyle: "none" }}>
                            <li>
                              <label>
                                <input type="checkbox"></input> Housekeeping
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Business
                                services
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Air conditioning
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Bar
                              </label>
                            </li>
                          </ui>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="d-flex flex-row gap-5 my-3 justify-content-center">
                <button
                  onClick={closeModalEdit}
                  className="p-2"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "rgba(73, 151, 207, 0.78)",
                    border: "#fff",
                    color: "#fff",
                  }}
                >
                  Cancel
                </button>
                <button
                  method="POST"
                  onClick={handleEditHotel}
                  className="p-2"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "rgba(73, 151, 207, 0.78)",
                    border: "#fff",
                    color: "#fff",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <p>No room found for roomId: {hotelId}</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OurHotel;
