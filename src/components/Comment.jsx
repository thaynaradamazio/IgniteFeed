import styles from './Comment.module.css';
 
 import { ThumbsUp, Trash } from 'phosphor-react';
 
 export function Comment() {
   return (
     <div className={styles.comment}>
       <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
 
       <div className={styles.commentBox}>
         <div className={styles.commentContent}>
           <header>
             <div className={styles.authorAndTime}>
               <strong>Thaynara Damazio</strong>
               <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
             </div>
 
             <button title="Deletar comentário">
               <Trash size={24} />
             </button>
           </header>
 
           <p>Muito bom Devon, parabéns!! 👏👏</p>
         </div>
 
         <footer>
           <button>
             <ThumbsUp />
             Aplaudir <span>20</span>
           </button>
         </footer>
       </div>
     </div>
   )
 }