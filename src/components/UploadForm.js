"use client";
import React, { useState } from "react";

function UploadForm() {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    price: "",
    description: "",
    group: "",
    quantityType: "tubber", // default option
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
    //  add logic for backend or API.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-96 lg:max-w-2xl mx-auto px-2 lg:px-20 py-5 border-primary border-2 flex flex-col "
    >
      <div className="mb-1">
        <label htmlFor="name">Product Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-secondary py-1 "
        />
      </div>

      <div className="mb-1">
        <label htmlFor="id">Product ID:</label>
        <br />
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-secondary py-1 "
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="price">Price (per unit):</label>
        <br />
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-secondary py-1 "
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="quantityType">Quantity Type:</label>
        <br />
        <select
          id="quantityType"
          name="quantityType"
          value={formData.quantityType}
          onChange={handleInputChange}
          className="w-full border-2 border-secondary py-1 "
        >
          <option value="rubber">Rubber</option>
          <option value="bag">Bag</option>
          <option value="litres">Litres</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows="4"
          required
          className="w-full border-2 border-secondary py-1 rounded-md"
        ></textarea>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="group">Group:</label>
        <br />
        <select
          type="text"
          id="group"
          name="group"
          value={formData.group}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-secondary py-1 " >
            <option value="1">Vegetable</option>
            <option value="2">Tubber</option>
            <option value="3">Grains</option>
            <option value="4">Fruites</option>
            <option value="5">Oil</option>
            <option value="7">Dairy</option>
          </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="image">Product Image:</label>
        <br />
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          required
        />
      </div>

      <button
        type="submit"
        className="py-2 px-5 mx-auto bg-primary text-white rounded-md"
      >
        Upload
      </button>
    </form>
  );
}

export default UploadForm;
