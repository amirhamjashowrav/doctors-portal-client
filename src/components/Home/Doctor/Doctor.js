import React, { useEffect, useState } from "react";
import img from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("https://tranquil-basin-09507.herokuapp.com/doctors")
            .then((response) => response.json())
            .then((data) => setDoctors(data));
    }, []);
    console.log(doctors);

    return (
        <div className="col-md-4 text-center">
            {doctors.map((doctor) => (
                <div  key={doctor._id}>
                    <img style={{height: '200px'}} className="img-fluid mb-3" src={`data:image/png;base64,${doctor.image.img}`} alt="" />
                    <h4>{doctor.name}</h4>
                    <p> <FontAwesomeIcon style={{ color: '#1CC7C1' }} icon={faPhoneAlt} /> +880-188-934789</p>
                </div>
            ))}
        </div>
    );
};

export default Doctor;