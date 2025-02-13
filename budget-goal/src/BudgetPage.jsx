import Background from "./components/background";
import InputMoney from "./components/input";
import Navbar from "./components/navbar";
import Tables from "./components/tables";
import { useEffect, useState } from "react";
import moneyManager from "./MoneyManager.js"


export default function BudgetPage(){

    const [incomeSnapshots, setIncomeSnapshots] = useState([]); 

    const [expenseSnapshots, setExpenseSnapshots] = useState([]); 

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
            <Tables incomeSnapshots = {moneyManager.incomeSnapshots} expenseSnapshots = { moneyManager.expenseSnapshots } /> 
        </> 
    )
}