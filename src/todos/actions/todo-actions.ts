'use server';

import prisma from "@/app/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const sleep = async(seconds:number = 0) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    })
}

export const toggleTodo = async( id: string, complete: boolean ): Promise<Todo> => {

    await sleep(3);

    const todo = await prisma.todo.findFirst({where: { id }});

    if( !todo ) {
        throw `TODO con id ${id} no encontrado`;
    }

    const updatedTodo = await prisma.todo.update({
        where: {id},
        data: {complete: complete}
    })

    revalidatePath('/dashboard/server-todo');
    
    return updatedTodo;
}

export const addTodo = async( description: string, userId: string ) => {
    try {
        const todo = await prisma.todo.create({ data: {description, userId: '...'}});
        revalidatePath('/dashboard/server-todo');

        return todo;
    } catch (error) {
        
        return {
            message: `Error creadno TODO`
        }
    }
}

export const deleteCompleted = async():Promise<void> => {

    await prisma.todo.deleteMany({ where: {complete:true}});
    revalidatePath('/dashboard/server-todo');

}