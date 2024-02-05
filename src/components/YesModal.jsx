import { motion } from "framer-motion";

export const YesModal = ({ closeButton }) => {
	const closeButtonModal = () => {
		closeButton(false);
	};

	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className={`fixed z-40 md:top-0 left-0 w-full h-screen flex items-center backdrop-filter backdrop-blur-sm justify-center overflow-y-scroll`}>
				<div className="md:w-[800px] h-fit bg-white px-2 md:px-10 py-4 rounded overflow-y-scroll">
					<div className="absolute">
						<img src="/images/leftHeart.png" alt="" className="opacity-10" />
					</div>
					<h1 className="font-mainFont text-2xl pt-96 md:pt-0">My Dearest Crush,</h1>
					<p className="font-mainFont text-lg indent-5 pt-4 text-justify">
						As I sit down to pen this letter, my heart swells with the warmth your
						presence brings into my life. In every shared smile, stolen glance, and
						tender moment, I find a depth of connection that words often struggle to
						capture. Your love is a melody that plays in the background of my days, a
						constant source of joy and inspiration. It's the gentle whisper in the
						wind, the sunbeam breaking through the clouds, and the steady rhythm of my
						heartbeat. In your laughter, I discover the sweetest symphony, and in your
						embrace, I find the safest haven. Together, we've woven a tapestry of
						shared dreams, whispered promises, and countless memories. With each
						passing day, my affection for you grows stronger, deeper, and more
						profound. Your kindness, your quirks, and the unique way you see the world
						make my heart dance with gratitude for having you by my side. In this
						journey of love, I am grateful for the beautiful moments we've created and
						excited for the many more that await us. Your love is the anchor that
						grounds me, the compass that guides me, and the light that illuminates my
						path. This message is by GPT btw.
					</p>
					<h1 className="text-2xl font-mainFont pt-4">
						Forever yours, Trikk <span className="text-sm">💋</span>{" "}
					</h1>
					<div className="flex items-end justify-end">
						<button
							onClick={closeButtonModal}
							className="bg-gradient-to-r from-pink-500 to-rose-500 outline-none px-4 rounded h-10 text-white z-50">
							Back
						</button>
					</div>
				</div>
			</motion.div>
		</>
	);
};
