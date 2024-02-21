import React from "react";
import Navbar from "../components/Navbar";
import { Flex, Layout } from "antd";

const { Content } = Layout;

const Home = () => {
	return (
		<Layout>
			<Navbar />
			<Content>home</Content>
		</Layout>
	);
};

export default Home;
