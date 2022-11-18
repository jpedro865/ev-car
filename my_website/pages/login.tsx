import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/login.module.css';
import{useState, useEffect} from 'react'; 
import axios from 'axios';


export default function Login() {
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

const send = async() => {
  const res = await axios.post('http://localhost:5000/')
}

  return (
  <div className={styles.container}>
    <Head>
      <title>login</title>
      <meta name='login' content='login page' />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <div className={styles.logForm}>
        <form action="">
          <h1 className={styles.title}>
            Please log in
          </h1>

          <div className={styles.email}>
            <label htmlFor="userEmail">Email address</label>
            <input type="email" className={styles.credentials} id='userEmail' placeholder='name@example.com'onChange={(event) => setEmail(event.target.value)} />       
          </div>
          <div className={styles.password}>
            <label htmlFor="userPassword">Password</label>
            <input type="password" className={styles.credentials} id='userPassword' placeholder='Password' onChange={(event) => setPassword(event.target.value)}/>
          </div>

          <div className={styles.btn}>
            <button onClick={send}>Log in</button>
          </div>

          <div className={styles.regist}>
            <h5>No account? <Link href='/register'>Create one!</Link></h5>
          </div>
          
        </form>  
      </div>
      
    </main>
  </div>
  )
}
