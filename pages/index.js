import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Search from "./Search";

export default function Home() {
  return <div className={styles.container}>
    <h1>Searchbar like youtube tagselector</h1>
    <Search />
  </div>;
}
