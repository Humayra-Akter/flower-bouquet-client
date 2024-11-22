import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?.customer=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);

  return (
    <div>
      <h1>A {appointments.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Event</th>
              <th>Flower</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((index, a) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.customer}</td>
                <td>{a.date}</td>
                <td>{a.event}</td>
                <td>{a.flower}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
