import React from "react";
import "./team.css";
const doctorsList = [
	{
		id: 1,
		name: "Dr. Ananya Sharma",
		gender: "female",
		specialty: "Cardiologist",
		degrees: "MBBS, MD (Cardiology)",
		experience: 12,
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDpt8CWare1NXGcK3PORQXjQh0oGSeLP5PU6M6uA0fWywkg-b2woITDiTYIc3uBXcIVI&usqp=CAU",
	},
	{
		id: 2,
		name: "Dr. Rajesh Kapoor",
		gender: "male",
		specialty: "Orthopedic Surgeon",
		degrees: "MBBS, MS (Ortho)",
		experience: 15,
		imageUrl:
			"https://images.assetsdelivery.com/compings_v2/indomercy/indomercy1501/indomercy150100019.jpg",
	},
	{
		id: 3,
		name: "Dr. Priya Singh",
		gender: "female",
		specialty: "Pediatrician",
		degrees: "MBBS, MD (Pediatrics)",
		experience: 10,
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDpt8CWare1NXGcK3PORQXjQh0oGSeLP5PU6M6uA0fWywkg-b2woITDiTYIc3uBXcIVI&usqp=CAU",
	},
	{
		id: 4,
		name: "Dr. Amit Verma",
		gender: "male",
		specialty: "Dermatologist",
		degrees: "MBBS, MD (Dermatology)",
		experience: 8,
		imageUrl:
			"https://images.assetsdelivery.com/compings_v2/indomercy/indomercy1501/indomercy150100019.jpg",
	},
	{
		id: 5,
		name: "Dr. Neha Gupta",
		gender: "female",
		specialty: "Gynecologist",
		degrees: "MBBS, MS (Gynae)",
		experience: 14,
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDpt8CWare1NXGcK3PORQXjQh0oGSeLP5PU6M6uA0fWywkg-b2woITDiTYIc3uBXcIVI&usqp=CAU",
	},
	{
		id: 6,
		name: "Dr. Sameer Joshi",
		gender: "male",
		specialty: "ENT Specialist",
		degrees: "MBBS, MS (ENT)",
		experience: 11,
		imageUrl:
			"https://images.assetsdelivery.com/compings_v2/indomercy/indomercy1501/indomercy150100019.jpg",
	},
	{
		id: 7,
		name: "Dr. Nisha Patel",
		gender: "female",
		specialty: "Ophthalmologist",
		degrees: "MBBS, MS (Ophth)",
		experience: 13,
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDpt8CWare1NXGcK3PORQXjQh0oGSeLP5PU6M6uA0fWywkg-b2woITDiTYIc3uBXcIVI&usqp=CAU",
	},
	{
		id: 8,
		name: "Dr. Rohit Malhotra",
		gender: "male",
		specialty: "Neurologist",
		degrees: "MBBS, DM (Neurology)",
		experience: 9,
		imageUrl:
			"https://images.assetsdelivery.com/compings_v2/indomercy/indomercy1501/indomercy150100019.jpg",
	},
	{
		id: 9,
		name: "Dr. Anjali Kapoor",
		gender: "female",
		specialty: "Psychiatrist",
		degrees: "MBBS, MD (Psychiatry)",
		experience: 7,
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDpt8CWare1NXGcK3PORQXjQh0oGSeLP5PU6M6uA0fWywkg-b2woITDiTYIc3uBXcIVI&usqp=CAU",
	},
	{
		id: 10,
		name: "Dr. Arjun Singh",
		gender: "male",
		specialty: "General Surgeon",
		degrees: "MBBS, MS (General Surgery)",
		experience: 16,
		imageUrl:
			"https://images.assetsdelivery.com/compings_v2/indomercy/indomercy1501/indomercy150100019.jpg",
	},
];
function Team() {
	return (
		<div className="team">
			<h1>Meet Our Team</h1>
			<div className="team-grid">
				{doctorsList.map((doctor) => (
					<div className="doctor-card card">
						<div className="doctor-image">
							<img
								key={doctor.id}
								src={doctor.imageUrl}
								alt={doctor.name}
							/>
						</div>
						<div className="doctor-content">
							<h3>{doctor.name}</h3>
							<p>{doctor.specialty}</p>
							<p>{doctor.degrees}</p>
							<p>{doctor.experience} years experience</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Team;
