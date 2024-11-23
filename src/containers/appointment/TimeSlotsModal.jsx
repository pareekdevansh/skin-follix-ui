import React from "react";
import "./time_slots_modal.css";
import { Ri24HoursLine, RiCloseLine } from "react-icons/ri";
const TimeSlotsModal = ({ startTime, endTime, onClose }) => {
	const rows = 2;
	const columns = 2;

	return (
		<div>
			<div className="time-slots-modal">
				<div className="time-slots-modal-close-icon">
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={onClose}
					/>
				</div>
				<div className="time-slots-grid">
					<Ri24HoursLine />
					<Ri24HoursLine />
					<Ri24HoursLine />
					<Ri24HoursLine />
					<Ri24HoursLine />
					<Ri24HoursLine />
					<Ri24HoursLine />
					<Ri24HoursLine />
					<Ri24HoursLine />
					<Ri24HoursLine />
					<Ri24HoursLine />
					{/* {Array(rows)
						.fill()
						.map((_, i) => (
							<div
								key={i}
								className="time-slot-row"
							>
								{Array(columns)
									.fill()
									.map((_, j) => (
										<div
											key={j}
											className="time-slot-cell"
										>
											{`${i} - ${j}`}
										</div>
									))}
							</div>
						))} */}
				</div>
			</div>
		</div>
	);
};

export default TimeSlotsModal;
