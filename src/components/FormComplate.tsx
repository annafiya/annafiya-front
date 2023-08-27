import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import "../App.css";
import "./FormComplate.css";

export function FormComplate() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send the data to the API using the fetch function
    try {
      const response = await fetch(
        "https://sheet.best/api/sheets/fd4ef7a8-6d31-4f57-a1f0-3f8d6dba008d",
        {
          method: "POST", // Adjust the HTTP method as needed
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Ism: name,
            Telefon: phoneNumber,
            Sana: new Date().toString(),
          }),
        }
      );
      setName("");
      setPhoneNumber("");
      console.log(name, phoneNumber, "ok");

      if (response.ok) {
        toast.success("So'rovingiz muvaffaqiyatli qabul qilindi!");
      } else {
        toast.error("Iltimos qayta urinib ko'ring!");
      }
    } catch (error) {
      toast.error("Texnik nosozlik!");
    }
  };

  return (
    <div className="form-complate">
      <p className="form-complate-title">Биз сиз билан боғланамиз !</p>
      <Form onSubmit={handleSubmit} className="form-box">
        <Form.Group controlId="formName" className="name-box">
          <Form.Label className="name-label">Исмингиз :</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{
              padding: "8px 15px",
              borderColor: "rgb(239, 146, 7)",
              borderWidth: "2px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            className="name-input"
            required
          />
        </Form.Group>

        <Form.Group
          controlId="formPhoneNumber"
          className="phone-box"
          style={{ position: "relative" }}
        >
          <Form.Label className="phone-label">Телефон Рақамингиз :</Form.Label>
          <Form.Control
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
              const newValue = e.target.value;
              if (newValue.length > 9 || !/^\d*$/.test(newValue)) {
                return;
              }
              setPhoneNumber(e.target.value);
            }}
            required
            className="phone-input"
            style={{
              padding: "8px 8px 8px 70px",
              borderColor: "rgb(239, 146, 7)",
              borderWidth: "2px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            min="0"
            max="9999999"
          />
          <span className="phone-code">+998</span>
        </Form.Group>

        <button type="submit" className="submit-btn">
          Юбориш
        </button>
      </Form>
      {/* <div className="follow-us">
        <p className="follow-us-title">
          Bizni Ijtimoiy tarmoqlarda kuzatib boring !
        </p>
        <div className="follow-us-icon-box">
          <a
            href="https://instagram.com/medical_informeyshin"
            className="follow-us-icons"
          >
            <img  alt="img" src="./imgs/instagram.svg" className="follow-us-icon-img" />
          </a>
          <a href="https://t.me/AnNafiya" className="follow-us-icons">
            <img alt="img"  src="./imgs/telegram.svg" className="follow-us-icon-img" />
          </a>
        </div>
      </div> */}
      <ToastContainer />
    </div>
  );
}
