import Layout from "../components/Layout";
import styles from '../styles/home.module.scss'

const Home = () =>(
  <>
    <Layout>
      <div className={styles.wrapper}>

        <div className={styles.main}>
          Here is body 
        </div>

      </div>
    </Layout>
  </>
);

export default Home;