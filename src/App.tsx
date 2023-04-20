import 'bulma/css/bulma.min.css';
import InputQRCode from './components/InputQRCode';
import { QRCodeSVG } from 'qrcode.react';
import { useSelector } from 'react-redux';
export default function App() {
	const { text } = useSelector((state: any) => state.qrcode);
	return (
		<section className="section ">
			<div className="container">
				<div className="columns is-centered">
					<div className="column is-half">
						<InputQRCode />
						<div className="columns is-centered mt-5">
							<QRCodeSVG value={text} size={500} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
