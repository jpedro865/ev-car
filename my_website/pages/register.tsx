import Head from 'next/head';
import styles from '../styles/login.module.css';

export default function logIn() {
  return (
  <div className={styles.container}>
    <Head>
      <title>Registration</title>
      <meta name='Registration' content='eegistration page' />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <div className={styles.logForm}>
        <form action="">
          <h1 className={styles.title}>
            Registration
          </h1>
          <div className={styles.firstName}>
            <label htmlFor="userFirstName">First Name</label>
            <input type="text" className={styles.credentials} id='userEmail' placeholder='Joe' />
          </div>

          <div className={styles.lastname}>
            <label htmlFor="userLastName">Last Name</label>
            <input type="text" className={styles.credentials} id='userEmail' placeholder='Doe' />
          </div>

          <div className={styles.phoneNumber}>
            <label htmlFor="userNumber">Phone Number</label>
            <input type="tel" className={styles.credentials} id='userNumber' placeholder='ex: 06 99 99 99 99' />
          </div>
          
          <div className={styles.email}>
            <label htmlFor="userEmail">Email Address</label>
            <input type="email" className={styles.credentials} id='userEmail' placeholder='name@example.com' />       
          </div>

          <div className={styles.password}>
            <label htmlFor="userPassword">Password</label>
            <input type="password" className={styles.credentials} id='userPassword' placeholder='Enter your password'/>
          </div>

          <div className={styles.passwordVerif}>
            <label htmlFor="confPassword">Confirm Password</label>
            <input type="password" className={styles.credentials} id='confPassword' placeholder='Confirm password'/>
          </div>

          <div className={styles.btn}>
            <button type='submit'>Register</button>
          </div>
          
        </form>  
      </div>
      
    </main>
  </div>
  )
}
