'use server';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Transaction } from "@/types/Transaction";
async function getTransactions(): Promise<{
    transactions?: Transaction[];
    error?: string
}> {
    const { userId } = await auth();
    if(!userId){
        return {error: 'user not found'}
    }

    try {
        const transactions = await db.transaction.findMany({
            where: {userId},
            orderBy: {
                createdAt: 'desc'
            }
        });
       
        return {transactions};
    } catch (error) {
        return {error: 'database error'}
    }
}

export default getTransactions;

