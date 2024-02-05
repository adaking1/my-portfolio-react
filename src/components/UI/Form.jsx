import { useState } from "react";
import validateEmail from "../../utils/emailValidate";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const contact = `mailto:kinga1215@yahoo.com?Portfolio Contact&body=${message}`
    const change = (inputName, value) => {
        switch (inputName) {
            case "name":
                setName(value);
                setError("");
                break;
            case "email":
                setEmail(value);
                setError("");
                break;
            default:
                setMessage(value);
                setError("");
        }
    };
    const blur = (inputName, value) => {
        if (!value) {
            setError(`Invalid ${inputName}`)
        }
        if (inputName === "email") {
            const valid = validateEmail(value)
            if (!valid) {
                setError('Invalid email');
            }
        }
    };
    return (
        <>
        <h2>Contact</h2>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" value={name} onChange={(e) => change("name", e.target.value)} onBlur={(e) => blur("name", e.target.value)} required/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" value={email} onChange={(e) => change("email", e.target.value)} onBlur={(e) => blur("email", e.target.value)} required/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => change("message", e.target.value)} onBlur={(e) => blur("message", e.target.value)} required></textarea>
            <p>{error}</p>
            <a href={contact}>Submit</a>
        </div>
        </>
    );
}