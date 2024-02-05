import "./App.css";
import { motion } from "framer-motion";
import { YesModal } from "./components/YesModal";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
	const [openModal, setOpenModal] = useState(false);

	const yesButtton = () => {
		setOpenModal(true);
	};

	const closeButton = (e) => {
		setOpenModal(false);
	};

	return (
		<>
			<Analytics />
			<div className="bg-gradient-to-r from-pink-500 to-rose-500 h-screen flex items-center justify-center relative overflow-hidden">
				{openModal ? (
					<div className="flex items-center justify-center z-50">
						<YesModal closeButton={(value) => closeButton(value)} />
					</div>
				) : (
					""
				)}
				<motion.img
					initial={{ y: -1000 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.9, delay: 1 }}
					src="/images/topHearts.png"
					alt=""
					className="w-full absolute top-0"
				/>
				<motion.div
					initial={{ y: 1000 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.9, delay: 1 }}>
					<motion.img
						initial={{ y: 20 }}
						animate={{ y: 5 }}
						transition={{
							duration: 0.9,
							delay: 1,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						src="/images/leftHeart.png"
						alt=""
						className="w-[700px] absolute -left-56 -bottom-20 overflow-x-hidden"
					/>
				</motion.div>
				<motion.div
					initial={{ y: 1000 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.9, delay: 1 }}
					className="flex items-start justify-center">
					<div
						className="text-center
          ">
						<motion.div
							initial={{ y: 20 }}
							animate={{ y: 5 }}
							transition={{
								duration: 0.9,
								delay: 1.5,
								repeat: Infinity,
								repeatType: "reverse",
							}}>
							<h1 className="font-mainFont text-8xl font-semibold text-white m-0">
								Hi Crush!!!
							</h1>
						</motion.div>
						<div className="w-[500px] pt-4 m-0">
							<h1 className="font-mainFont font-light text-2xl text-white">
								Would you like to become my valentine this coming February 14, 2024?
							</h1>
						</div>
						<div className="flex gap-2 items-center justify-center pt-3">
							<button
								onClick={yesButtton}
								className="w-[90px] h-[50px] text-lg flex items-center justify-center bg-white text-pink-500 font-semibold rounded font-mainFont transform transition-transform hover:scale-110 z-40">
								Yes
							</button>
							<button className="w-[90px] h-[50px] text-lg flex items-center justify-center bg-red-600 text-white font-semibold rounded font-mainFont hover:-translate-y-72 transform transition-transform ease-in-out duration-300 z-40">
								No
							</button>
						</div>
					</div>
					<motion.div
						initial={{ y: 1000 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.9, delay: 1 }}>
						<motion.img
							initial={{ y: 20 }}
							animate={{ y: 5 }}
							transition={{
								duration: 0.9,
								delay: 1,
								repeat: Infinity,
								repeatType: "reverse",
							}}
							src="/images/rightHeart.png"
							alt=""
							className="w-[700px] absolute -right-56 -bottom-20 overflow-x-hidden"
						/>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ y: 1000 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.9, delay: 1 }}
					className="absolute bottom-2 z-40">
					<a href="https://patrick-dionen.vercel.app/">
						<p className="text-xs text-white">Made with ❤️ by Patrick James Dionen</p>
					</a>
				</motion.div>
			</div>
		</>
	);
}

export default App;
