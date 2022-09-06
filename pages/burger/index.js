import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Burger.module.css';


export const getStaticProps = async () => {
   const res = await fetch('http://localhost:5000/items');
   const data = await res.json();

   return {
      props: { chesburgers: data }
   }
}

const Chesburgers = ({ chesburgers }) => {
   return (
      <>
      <h1>Наши бургеры</h1>
      {chesburgers.map(chesburgers => {
         return (
            <Link href={`/burger/${chesburgers.id}`} key={chesburgers.id}>
               <a className={styles.burgerCard}>
                  <div className={styles.imageContainer}> 
                  <Image 
                     src={`${chesburgers.image}`}
                     alt={`${chesburgers.name}`}
                     width="100%"
                     height="100%"
                     layout="responsive"
                     objectFit="cover"
                  />
                  </div>
                  <div>
                     <h3> {chesburgers.name} </h3>
                     <p> {chesburgers.desc} </p>
                  </div>
               </a>
            </Link>
         )
      })}
      </>
   )
}


export default Chesburgers;