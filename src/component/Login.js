import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [postData, setPostData] = useState([]); // State to store posted data
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
      });

      // Add the posted data to the state
      setPostData([postData, response.data]);
      alert("Data submitted successfalertully!");

      // Fetch updated data
      handleGetData();
    } catch (error) {
      console.error(error);
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

  const handleDelete = async (id, index) => {
    try {
      // Send a DELETE request to the server
      await axios.delete(`http://localhost:5000/company/${id}`);

      // Remove the deleted data from the state
      const updatedData = [...getData];
      updatedData.splice(index, 1);
      setGetData(updatedData);

      alert("Data deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="mobileNo"
          placeholder="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          required
          />
          <br/>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Fetched Data:</h2>
        <ul>
          {getData.map((item, index) => (
            <li key={index}>
              {item.name}, {item.email},{item.password},{item.mo}
              <button onClick={() => handleDelete(item._id, index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
<a href="userdash">alarm</a>
<a href="camera">camera</a>
      <div>
        <h2>Posted Data:</h2>
      </div>
    </div>
  );
}

export default Login;
