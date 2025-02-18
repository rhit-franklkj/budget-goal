import { collection, addDoc, setDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfig.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BudgetPage from "./BudgetPage.jsx";


//TODO: remove magic words. Preferably with user-specific tables.
// const collectionMovieQuotes = "MovieQuotes";
// const keyQuote = "quote";
// const keyMovie = "movie";
// const keyLastEdited = "lastEdited";
const user = getAuth.currentUser; 
const auth = getAuth()

class MoneyManager {
    
    constructor() {
        console.log("running constructor");
        this.incomeSnapshots = [];
        this.expenseSnapshots = [];
        this.incomeTable = "temp-income"; 
        this.expenseTable = "temp-expense"
        if(user){
            console.log("you are signed in");
            this._ref_income = collection(db, user.uid + "-income"); 
            this._ref_expense = collection(db, user.uid + "-expense")

        } else {
       
            this._ref_income = collection(db, this.incomeTable);
            this._ref_expense = collection(db, this.expenseTable);

        }
        
    }

    updateUser(uid) {
        console.log("signed in= changed refs.");
        this.incomeTable = uid + "-income"; 
        this._ref_income = collection(db, this.incomeTable); 
        BudgetPage.incomeSnapshots = []; 
        this.expenseTable = uid + "-expense"
        this._ref_expense = collection(db, this.expenseTable); 
        BudgetPage.expenseSnapshots = [];

    }


    beginListeningIncome(changeListener) {
        const q = query(this._ref_income, orderBy("lastEdited", "asc"));
        return onSnapshot(q, (querySnapshot) => {
            const movieQuotes = [];
            this.incomeSnapshots = querySnapshot.docs;
            changeListener();
        });
    }

    beginListeningExpense(changeListener) {
        const q = query(this._ref_expense, orderBy("lastEdited", "asc"));
        return onSnapshot(q, (querySnapshot) => {
            const movieQuotes = [];
            this.expenseSnapshots = querySnapshot.docs;
            changeListener();
        });
    }

    async add(method, description, amount) {
        if (method === "Income") {
            try {
                const docRef = await addDoc(this._ref_income, {
                    "description": description,
                    "amount": amount,
                    "lastEdited": serverTimestamp()
                });
                //console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        } else if (method === "Expense") {
            try {
                const docRef = await addDoc(this._ref_expense, {
                    "description": description,
                    "amount": amount,
                    "lastEdited": serverTimestamp()
                });
                //console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

    }

    async update(transaction, desc, amount){
        await setDoc(transaction, {
            "description": desc, 
            "amount": amount, 
            "lastEdited": serverTimestamp()
        })
    }

    async delete(transaction){
        await deleteDoc(transaction); 
    }
    
}


const instance = new MoneyManager();
export default instance;

onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
    
      instance.updateUser(uid); 
        
      // ...
    } else {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }
  });



