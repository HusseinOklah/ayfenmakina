import Image from "next/image";
import React from "react";

export default function Footer() {
	return <footer className="bg-primary-800 text-primary-200 border-t-4 py-2 px-2 border-secondry-600 ">
		<div className="container grid grid-cols-3 my-8 mx-auto ">
			<div className="flex flex-col space-y-6">
				<Image src='/logo.jpg' alt="logo" width={400} height={400} />
				<ul className="flex flex-col space-y-3">
					<li>Ayfen Makina San. and Tic. Ltd. Ltd. || Sanliurfa</li>
					<li>Kamberiye Mah. Harran Üniversitesi Cad. 24/B-19 Haliliye/Şanlıurfa</li>
					<li>0543 229 11 31 santral</li>
					<li>ayfenmakina@hotmail.com</li>
					<li></li>
				</ul>
			</div>
			<div className="grid grid-cols-3 col-span-2">
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</div>
		</div>
	</footer>;
}
