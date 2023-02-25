import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Carousel from "../components/caroussel";
import Presentation from "../components/presentation";
import HomeProducts from "../components/homeProducts";
import { useRouter } from "next/router";
import Contact from "../components/contact";

export default function Home() {
  let router = useRouter();
  return (
    <>
      <Header class="mainHeader"></Header>
    <div className="main_Body">
      <Carousel></Carousel>
      <Presentation></Presentation>
      <HomeProducts></HomeProducts>
      <Contact></Contact>
    </div>
    </>
  );
}
