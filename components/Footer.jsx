import React from "react";

const Footer = () => {
	return (
		<footer className=' bottom-0 w-full flex justify-between items-center border-t border-slate-300  p-2 px-3 hover:border-slate-400 transition mt-8'>
			<div className='flex justify-center items-center gap-1 text-stone-600'>
				<i className='fa-regular fa-copyright text-sm '></i>
				<p className='text-sm font-bold font-average tracking-wide'>
					Utkarsh Tiwari
				</p>
			</div>
			<div className='flex gap-3 text-stone-700 text-md  '>
				<a
					href='https://www.linkedin.com/in/utkarshweb/'
					target='_blank'
				>
					<i className='fa-brands fa-linkedin-in  hover:text-primary-orange hover:transform hover:scale-110 transition cursor-pointer'></i>
				</a>
				<a href='https://github.com/Utkarsh-Web-2023' target='_blank'>
					<i className='fa-brands fa-github hover:text-primary-orange hover:transform hover:scale-110 transition cursor-pointer'></i>
				</a>
				<a
					href='https://instagram.com/iam_utkarshtiwari'
					target='_blank'
				>
					<i className='fa-brands fa-instagram  hover:text-primary-orange hover:transform hover:scale-110 transition cursor-pointer'></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
