import styles from '../../styles/Burger.module.css';
import Image from 'next/image';

export const getStaticPaths = async () => {
   const res = await fetch('http://localhost:5000/items');
   const data = await res.json();

   const paths = data.map(chesburgers => {
      return {
         params: {id: chesburgers.id}
      }
   })

   return {
      paths,
      fallback: false
   }
}

export const getStaticProps = async (context) => {
   const id = context.params.id;

   const res = await fetch(`http://localhost:5000/items/${id}`);
   const data = await res.json();

   return {
      props: { chesburgers : data}
   }
}

const Details = ({ chesburgers }) => {
   return (
      <div className={styles.singleBurger}>
         <h1>{chesburgers.name}</h1>
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
         <p> {chesburgers.desc} </p>
         </div>
      </div>
      
   )
}

export default Details;