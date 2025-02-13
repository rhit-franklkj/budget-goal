import { collection, addDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig.js"

// const collectionMovieQuotes = "MovieQuotes";
// const keyQuote = "quote";
// const keyMovie = "movie";
// const keyLastEdited = "lastEdited";


class MoneyManager {
    constructor() {
        this.documentSnapshots = []; 
        this._ref_income = collection(db, "temp-income"); 
        this._ref_expense = collection(db, "temp-expense"); 
    }

    
    beginListeningIncome(changeListener) {
        console.log("begin listening to the income collection");
 
        //const q = query(this._ref, orderBy(keyLastEdited, "desc")); 
        return onSnapshot(this._ref_income, (querySnapshot) => {
            const movieQuotes = [];
            this.documentSnapshots = querySnapshot.docs; 
            changeListener(); 
        });
    }

    beginListeningExpense(changeListener) {
        console.log("begin listening to the expense collection");
 
        //const q = query(this._ref, orderBy(keyLastEdited, "desc")); 
        return onSnapshot(this._ref_expense, (querySnapshot) => {
            const movieQuotes = [];
            this.documentSnapshots = querySnapshot.docs; 
            changeListener(); 
        });
    }

    async add(method, description, amount) {
                console.log("write");
                if(method === "Income"){
                    try {
                        const docRef = await addDoc(this._ref_income, {
                            "description": description,
                            "amount": amount,
                        });
                        console.log("Document written with ID: ", docRef.id);
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                } else if(method === "Expense"){
                    try {
                        const docRef = await addDoc(this._ref_expense, {
                            "description": description,
                            "amount": amount,
                        });
                        console.log("Document written with ID: ", docRef.id);
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                }
                
            }
}
const instance = new MoneyManager();
export default instance; 
// class QuotesManager {

//     constructor() {

//         this.documentSnapshots = [];
//         this._ref = collection(db, collectionMovieQuotes);


//     }

//     beginListening(changeListener) {
//         console.log("begin listening to the moviequotes collection");
 
//         const q = query(this._ref, orderBy(keyLastEdited, "desc")); 
//         return onSnapshot(q, (querySnapshot) => {
//             const movieQuotes = [];
//             this.documentSnapshots = querySnapshot.docs; 
//             changeListener(); 
//         });
//     }

//     async add(quote, movie) {
//         console.log("write");
//         try {
//             const docRef = await addDoc(this._ref, {
//                 [keyQuote]: quote,
//                 [keyMovie]: movie,
//                 [keyLastEdited]: serverTimestamp()
//             });
//             console.log("Document written with ID: ", docRef.id);
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }
//     }
// }


