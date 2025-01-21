import React, { useState } from "react";
import jsPDF from "jspdf";
import "./style/RegistrationPage.css";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    registrationNumber: "",
    birthDate: "",
    registrationDate: "",
    municipalBranch: "",
    votingCenter: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("REPUBLIQUE DU CAMEROUN", 20, 20);
    doc.text("RECEPISSE D'inscription - REGISTER RECEIP", 20, 30);
    
    // Add form data
    doc.text(`Noms et prénoms: ${formData.fullName}`, 20, 50);
    doc.text(`N° d'inscription: ${formData.registrationNumber}`, 20, 60);
    doc.text(`Date de naissance: ${formData.birthDate}`, 20, 70);
    doc.text(`Date d'inscription: ${formData.registrationDate}`, 20, 80);
    doc.text(`Antenne communale: ${formData.municipalBranch}`, 20, 90);
    doc.text(`Centre de vote: ${formData.votingCenter}`, 20, 100);

    // Add the photo if it exists
    if (formData.photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgData = reader.result;
        doc.addImage(imgData, "JPEG", 20, 110, 50, 50); // Position and size of the image
        doc.save("registration_form.pdf");
      };
      reader.readAsDataURL(formData.photo);
    } else {
      doc.save("registration_form.pdf");
    }
  };

  return (
    <div className="registration-container">
      <div className="photo-box">
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ display: "none" }}
          id="photo-upload"
        />
        <label htmlFor="photo-upload" className="photo-placeholder">
          {formData.photo ? (
            <img src={URL.createObjectURL(formData.photo)} alt="Profile" />
          ) : (
            "Photo HERE"
          )}
        </label>
      </div>
      <div className="form-container">
        <header>
          <h1>REPUBLIQUE DU CAMEROUN</h1>
          <h2>REPUBLIC OF CAMEROON</h2>
          <h3>RECEPISSE D'inscription - REGISTER RECEIP</h3>
        </header>
        <form>
          <div className="form-row">
            <div className="input-group">
              <label>Noms et prénoms</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>N° d'inscription</label>
              <input
                type="text"
                name="registrationNumber"
                placeholder="Registration number"
                value={formData.registrationNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Date de naissance</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Date d'inscription</label>
              <input
                type="date"
                name="registrationDate"
                value={formData.registrationDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Antenne communale</label>
              <select
                name="municipalBranch"
                value={formData.municipalBranch}
                onChange={handleChange}
                className="input" // Appliquer la même classe pour le style
              >
                <option value="">-- Sélectionner une antenne --</option>
                <option value="antenne1">Antenne 1</option>
                <option value="antenne2">Antenne 2</option>
                <option value="antenne3">Antenne 3</option>
                {/* Ajoutez d'autres options selon vos besoins */}
              </select>
            </div>
            <div className="input-group">
              <label>Centre de vote</label>
              <select
                name="votingCenter"
                value={formData.votingCenter}
                onChange={handleChange}
                className="input" // Appliquer la même classe pour le style
              >
                <option value="">-- Sélectionner un centre --</option>
                <option value="centre1">Centre 1</option>
                <option value="centre2">Centre 2</option>
                <option value="centre3">Centre 3</option>
                {/* Ajoutez d'autres options selon vos besoins */}
              </select>
            </div>
          </div>

          <div className="form-row">
            {/* Action Buttons */}
            <div className="button-group">
              <button type="button" className="btn download" onClick={downloadPDF}>
                <span className="icon">⬇</span> Télécharger en PDF
              </button>
              <button type="submit" className="btn save">
                <span className="icon">💾</span> Enregistrer
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;