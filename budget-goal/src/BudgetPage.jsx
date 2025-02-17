import Background from "./components/background";
import InputMoney from "./components/input";
import Navbar from "./components/navbar";
import Tables from "./components/tables";
import { useEffect, useState } from "react";
import moneyManager from "./MoneyManager.js"
import TransactionDialog from "./components/editTransactionDialog.jsx";
import {doc} from "firebase/firestore"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfig.js"



export default function BudgetPage(){

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [incomeSnapshots, setIncomeSnapshots] = useState([]); 
    const [expenseSnapshots, setExpenseSnapshots] = useState([]); 
    const [transaction, setTransaction] = useState({}); 

    useEffect(() => {
        //begin listening 
        const  unsubscribeIncome = moneyManager.beginListeningIncome(() => {
            setIncomeSnapshots(moneyManager.incomeSnapshots); 
        })
        const  unsubscribeExpense = moneyManager.beginListeningExpense(() => {
            setExpenseSnapshots(moneyManager.expenseSnapshots); 
        })

        return () => {
            //stop listening
            unsubscribeIncome(); 
            unsubscribeExpense(); 
        }
    }, []); 


    return (
        <>
            <Navbar /> 
            <Background incomeSnapshots = {moneyManager.incomeSnapshots} expenseSnapshots = { moneyManager.expenseSnapshots }/> 
            <InputMoney manager={moneyManager}/> 
            <Tables incomeSnapshots = {moneyManager.incomeSnapshots} expenseSnapshots = { moneyManager.expenseSnapshots } onClick={(id, table) => {
                //TODO: CHANGE THIS
                //let dbName = "temp-" + table; 
                setIsDialogOpen(true);
                if(table === "income"){
                    setTransaction(doc(db, moneyManager.incomeTable, id)); 
                } else if (table === "expense"){
                    setTransaction(doc(db, moneyManager.expenseTable, id)); 
                }

                
                
            }}/> 
            <TransactionDialog isOpen={isDialogOpen} 
            edit={(description, amount) => {
                moneyManager.update(transaction, description, amount); 
                setIsDialogOpen(false); 
            }} 
            
            delete={() => {
                moneyManager.delete(transaction); 
                setIsDialogOpen(false); 

            }}
            
            hide={() => {
                setIsDialogOpen(false);

            }}/> 

            
        </> 
    )
}
