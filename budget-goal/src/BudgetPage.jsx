import Background from "./components/background";
import InputMoney from "./components/input";
import Navbar from "./components/navbar";
import Tables from "./components/tables";
import { useEffect, useState } from "react";
import moneyManager from "./MoneyManager.js"


export default function BudgetPage(){

    const [documentSnapshots, setDocumentSnapshots] = useState([]); 

    useEffect(() => {
        //begin listening 
        const  unsubscribeIncome = moneyManager.beginListeningIncome(() => {
            setDocumentSnapshots(moneyManager.documentSnapshots); 
        })
        const  unsubscribeEspense = moneyManager.beginListeningExpense(() => {
            setDocumentSnapshots(moneyManager.documentSnapshots); 
        })

        return () => {
            //stop listening
            unsubscribeIncome(); 
        }
    }, []); 


    return (
        <>
            <Navbar /> 
            <Background /> 
            <InputMoney manager={moneyManager}/> 
            <Tables /> 
        </> 
    )
}