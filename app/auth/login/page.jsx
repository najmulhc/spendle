"use client";
import { useForm } from "react-hook-form";
import styles from "../auth.module.css";
export default function LoginPage() {
 const { register, handleSubmit, reset } = useForm();
 const onSubmit = (value) => {
   console.log(value);
   reset();
 };
 return (
   <main className={styles.main}>
     <h1 className={styles.heading}>Login</h1>
     <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
       <label htmlFor="email-address" className={styles.label}>
         <p>Your Email Address</p>
         <input
           className={styles.formInput}
           type="email"
           id="email-address"
           placeholder="John Doe"
           {...register("email", { required: true })}
         />
       </label>
       <label htmlFor="password" className={styles.label}>
         <p>Your Password</p>
         <input
           className={styles.formInput}
           type="password"
           id="password"
           placeholder="********"
           {...register("password", { required: true })}
         />
       </label>
       <button className={styles.authButton}>Log in</button>
     </form>
   </main>
 );
}
