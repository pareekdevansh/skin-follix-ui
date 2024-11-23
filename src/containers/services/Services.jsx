import React from "react";
import "./services.css";
import Button from "../../components/button/Button";
const services = [
	{
		name: "Acne Treatment",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"We offer a variety of treatments for acne, including topical and oral medications, as well as procedures like chemical peels or laser therapy.",
	},
	{
		name: "Skin Cancer Screening and Treatment",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Early detection and treatment of skin cancer is crucial. We offer screenings, excisions, and Mohs surgery for effective treatment.",
	},
	{
		name: "Cosmetic Dermatology",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Enhance your skin's appearance with our range of procedures like Botox injections, dermal fillers, laser resurfacing, and chemical peels.",
	},
	{
		name: "Eczema and Psoriasis Management",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Live comfortably with chronic skin conditions like eczema and psoriasis. We offer personalized treatment plans for optimal management.",
	},
	{
		name: "Hair Loss Treatment",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Address various causes of hair loss with our effective treatments, including medications and procedures like PRP therapy.",
	},
	{
		name: "Dermatologic Surgery",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Safe and precise removal of skin lesions, moles, and skin cancers with advanced techniques like Mohs surgery.",
	},
	{
		name: "Laser Hair Removal",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Enjoy long-term hair reduction with our laser technology. Achieve smooth, hair-free skin with professional treatments.",
	},
	{
		name: "Wart and Skin Tag Removal",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Say goodbye to unsightly warts and skin tags. We offer various methods like cryotherapy, laser therapy, and surgical excision for safe removal.",
	},
	{
		name: "Microdermabrasion and Chemical Peels",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Reveal smoother, brighter skin with these cosmetic procedures. Improve skin texture by removing dead cells and promoting collagen production.",
	},
	{
		name: "Pediatric Dermatology",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ioKv64SgnLPfqBd2CrZ9vFHJh_grZUr9A&usqp=CAU",
		description:
			"Providing specialized care for children's skin conditions. We treat eczema, acne, birthmarks, and genetic skin disorders with gentle and effective methods.",
	},
];
const navigateToService = (serviceName) => {
	// TODO: change nav address to `service/${serviceName}`
};
function Services() {
	return (
		<div className="services">
			{services.map((service) => (
				<div className="service-card card">
					<div className="service-image">
						<img
							src={service.image}
							alt={service.name}
						/>
					</div>
					<div className="service-content">
						<h3>{service.name}</h3>
						<p>{service.description}</p>
						<Button
							text="Show More"
							onClick={navigateToService(service.name)}
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default Services;
