import React from 'react'

const TodoList = () => {
    const todos = ["Learn React", "Practice Daily", "Build Projects"];
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-6 rounded-md shadow-sm w-64">
                <h2 className="text-lg font-semibold mb-4 text-slate-700">
                    Todo List
                </h2>

                <div className="space-y-2">{todos.map((todo, index) => (<h1 key={index}>{todo}</h1>))} </div>
            </div>
        </div>
    );
};


export default TodoList