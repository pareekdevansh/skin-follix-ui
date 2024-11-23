import React, { useState } from "react";
import "./appointment.css";
import TimeSlotsModal from "./TimeSlotsModal";
import Button from "../../components/button/Button";


const SelectList = ({ selectId, optionsList }) => {
	return (
		<>
			<label htmlFor={selectId}>Choose a {selectId}:</label>
			<select
				id={selectId}
				name={selectId}
			>
				{optionsList?.map((department, index) => (
					<option
						key={index}
						value={department}
					>
						{department}
					</option>
				))}
			</select>
		</>
	);
};

function Appointment() {
	const departmentsList = ["Department 1", "Department 2", "Department 3"];
	const doctorsList = ["Doctor 1", "Doctor 2", "Doctor 3"];
	const [isTimeSlotsModalOpen, setIsTimeSlotsModalOpen] = useState(false);
	return (
		<div className="appointment-section">
			<div className="appointment-container card">
				<h1>Book An Appointment</h1>
				<h5>Fill The Following Details</h5>
				<div className="appointment-fields">
					<input
						type="text"
						placeholder="Name"
					/>
					<input
						type="email"
						placeholder="Email"
					/>
					<input
						type="tel"
						placeholder="Phone Number"
					/>

					<SelectList
						selectId="department"
						optionsList={departmentsList}
					/>
					<SelectList
						selectId="doctor"
						optionsList={doctorsList}
					/>

					<label for="datetime">Select Date :</label>
					<input
						type="date"
						id="date"
						name="date"
						min="2024-01-01"
						max="2024-02-29"
					></input>
				</div>
				<div className="appointment-buttons">
					<Button
						className="button"
						onClick={() => setIsTimeSlotsModalOpen(true)}
					>
						Select Time-Slot
					</Button>

					<Button
						className="button"
						type="submit"
					>
						Submit
					</Button>
				</div>
			</div>
			<span className="time-slots-modal">
				{isTimeSlotsModalOpen && (
					<TimeSlotsModal
						startTime="10:00"
						endTime="11:00"
						onClose={() => setIsTimeSlotsModalOpen(false)}
					/>
				)}
			</span>
		</div>
	);
}

export default Appointment;
