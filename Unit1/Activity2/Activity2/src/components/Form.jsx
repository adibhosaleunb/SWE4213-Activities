import InputField from "./InputField";
import MyButton from "./MyButton";
import { useState } from "react";
import Slider from '@mui/material/Slider';

export default function Form() {

   const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    sliderVal: 70,
});

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function onSubmit(e) {
    e.preventDefault();

    // Log all of the values to the console 
    console.log("Name:", form.name);
    console.log("Email:", form.email);
    console.log("Phone Number:", form.phoneNumber);

    // Reset the form after submitting it 
    setForm({
        name: "",
        email: "",
        phoneNumber: "",
    });
}

    return (
        <form>
            <InputField label="Name" placeholder="Enter your name" value={form.name} name="name" onChange={handleChange} />
            <InputField label="phoneNumber" placeholder="Enter your phoneNumber" value={form.phoneNumber} name="phoneNumber" onChange={handleChange} />
            <InputField label="Email" placeholder="Enter your email" value={form.email} name="email" onChange={handleChange} />
            <Slider size="large" value={form.sliderVal} min={0} max={100} valueLabelDisplay="auto" onChange={(e, newValue) => setForm((prev) => ({ ...prev, sliderVal: Number(newValue) }))} />
            
            {/* TODO 6: Add the MyButton component with the onSubmit function as its onClick */}
            <MyButton onClick={onSubmit} />
        </form>

       


);
}