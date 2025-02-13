import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfig.js"


//TODO: remove magic words. Preferably with user-specific tables.
// const collectionMovieQuotes = "MovieQuotes";
// const keyQuote = "quote";
// const keyMovie = "movie";
// const keyLastEdited = "lastEdited";

class MoneyManager {
    constructor() {
        this.incomeSnapshots = []; 
        this._ref_income = collection(db, "temp-income"); 
        this.expenseSnapshots = []; 
        this._ref_expense = collection(db, "temp-expense"); 
    }

    
    beginListeningIncome(changeListener) {
        console.log("begin listening to the income collection");
 
        const q = query(this._ref_income, orderBy("lastEdited", "asc")); 
        return onSnapshot(q, (querySnapshot) => {
            const movieQuotes = [];
            this.incomeSnapshots = querySnapshot.docs; 
            changeListener(); 
        });
    }

    beginListeningExpense(changeListener) {
        console.log("begin listening to the expense collection");
 
        const q = query(this._ref_expense, orderBy("lastEdited", "asc")); 
        return onSnapshot(q, (querySnapshot) => {
            const movieQuotes = [];
            this.expenseSnapshots = querySnapshot.docs; 
            changeListener(); 
        });
    }

    async add(method, description, amount) {
                if(method === "Income"){
                    try {
                        const docRef = await addDoc(this._ref_income, {
                            "description": description,
                            "amount": amount,
                            "lastEdited": serverTimestamp()
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
                            "lastEdited": serverTimestamp()
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



