"use client"

import addTransaction from "@/app/actions/addTransaction";
import { toast } from 'react-toastify'
import { useRef } from "react";

export default function AddTransaction () {
    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData) => {
        const {data, error} = await addTransaction(formData);
        if(error) {
            toast.error(error);
        }
        else {
            toast.success('transation added');
            formRef.current?.reset();
        }
    };
    return (
        <>
        <h3>Add Transaction</h3>
        <form ref={formRef} action={clientAction}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" name="text" placeholder="enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br /> (negative - expense, position - income)</label>
                <input type="number" name="amount" id="amount" placeholder="enter amount..." step='0.01'/>
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </>
    )
}