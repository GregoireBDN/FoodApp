"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();
  const pickImageHandler = () => {
    imageInputRef.current.click();
  };
  const imageChangeHandler = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected</p>}
          {pickedImage && <Image src={pickedImage} alt="Uploaded image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={imageChangeHandler}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={pickImageHandler}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
