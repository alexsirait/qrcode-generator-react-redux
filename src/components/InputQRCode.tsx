import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../features/qrCodeSlice';

export default function InputQRCode() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const onsubmit = async (e: any) => {
		e.preventDefault();
		await dispatch(update({ text }));
	};
	return (
		<form onSubmit={onsubmit}>
			<div className="field">
				<input
					className="input is-primary is-light"
					type="text"
					placeholder="Enter text .."
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="field">
				<div className="columns is-centered mt-3 mb-6">
					<button className="button is-primary is-light ">Generate</button>
				</div>
			</div>
		</form>
	);
}
