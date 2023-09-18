import React, { useState, useEffect } from "react";
import axios from "axios";
// import React, { useState, useEffect } from "react";
function Reg() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo: "",
    adharnumber: "",
  });
  console.log(formData, "formData");

  const [postData, setPostData] = useState([]); // State to store posted data
  console.log(postData, "postData");
  const [getData, setGetData] = useState([]); // State to store fetched data

  // Define the handleChange function to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the same data already exists in the fetched data
    const alreadyExists = getData.some(
      (item) => item.name === formData.name && item.email === formData.email
    );

    if (alreadyExists) {
      // Display an alert for duplicate data
      alert("Data already exists. Please enter different data.");
      return; // Exit the function to prevent submission
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/company",
        formData
      );

      // Clear the form fields after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
        mobileNo: "",
        adharnumber: "",
        panNumber: "",
        dob: " ", // Initialize with null for the date picker
        gender: "",
        address: "",
        designation: "",
        dateOfJoining: null, // Initialize with null for the date picker
        profile: "",
      });

      // Add the posted data to the state
      setPostData([postData, response.data]);
      alert("Data submitted successfully!");

      // Fetch updated data
      handleGetData();
    } catch (error) {
      console.error(error);
      alert("Data already exists. Please enter different data.");
    }
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/company");

      // Update the state with fetched data
      setGetData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-fl ex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Form
                      </p>

                      <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              name="name"
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              onChange={handleChange}
                            />
                            <label class="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              name="email"
                              type="text"
                              id="form3Example3c"
                              class="form-control"
                              onChange={handleChange}
                            />
                            <label class="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              name="password"
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              onChange={handleChange}
                            />
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              name="mobileNo"
                              type="number"
                              id="form3Example4cd"
                              class="form-control"
                              onChange={handleChange}
                            />
                            <label class="form-label" for="form3Example4cd">
                              mobileNo
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              name="adharnumber"
                              type="adharnumber"
                              id="form3Example4cd"
                              class="form-control"
                              onChange={handleChange}
                            />
                            <label class="form-label" for="form3Example4cd">
                              adharnumber
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              name="dob"
                              type="date"
                              id="form3Example4cd"
                              class="form-control"
                              onChange={handleChange}
                            />
                            <label class="form-label" for="form3Example4cd">
                              date
                            </label>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-primary btn-lg">
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reg;
