import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";
import Head from "next/head";

export const metadata = {
	title: "PromptsBase - AI Prompts Hub",
	description:
		"PromptPedia is an open-source AI prompts tool for the modern world to discover, create, and share creative prompts",
};

const RootLayout = ({ children }) => (
	<>
		<head>
			<title>{metadata.title}</title>
			<meta name='description' content={metadata.description} />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='./public/favicon/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='./public/favicon/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='./public/favicon/favicon-16x16.png'
			/>
			<link rel='manifest' href='./public/favicon/site.webmanifest' />
			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
				integrity='sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=='
				crossOrigin='anonymous'
				referrerPolicy='no-referrer'
			/>
		</head>
		<html lang='en'>
			<body>
				<Provider>
					<div className='main'>
						<div className='gradient' />
					</div>

					<main className='app'>
						<Nav />
						{children}
						<Footer />
					</main>
				</Provider>
			</body>
		</html>
	</>
);

export default RootLayout;
