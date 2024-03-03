import React, { useState } from 'react'
import { motion } from "framer-motion"

function Note({ text, id, onUpdate, onDelete }) {
    const [isEditing, setEditing] = useState(false)
    const [newText, setNewText] = useState(text)

    const handleEdit = () => {
        setEditing(true)
    }

    const handleSave = () => {
        onUpdate(id, newText)
        setEditing(false)
    }

    return (
        <> 
            {
                isEditing ? (
                    <div className='bg-yellow-100 p-3 rounded-md'>
                        <textarea className='bg-red-400' value={newText} onChange={(e) => setNewText(e.target.value)}></textarea>
                        <br />
                        <button className='text-white bg-black rounded-lg mt-6 py-1 px-3' onClick={handleSave}>Save</button>
                    </div>
                ) : (
                    <motion.div 
                        className="bg-yellow-100 p-4 rounded-md shadow-lg shadow-slate-300 m-6"
                        drag
                        dragConstraints={{
                            top: -125,
                            right: 125,
                            bottom: 125,
                            left: -125,
                        }}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                        dragElastic={0.5}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <p className='m-3'>{text}</p>
                        <div className='flex justify-end gap-2'>
                            <button className='text-white text-sm bg-gray-700 rounded-lg p-2' onClick={handleEdit}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </button>
                            <button className='text-white text-sm bg-rose-700 rounded-lg p-2' onClick={onDelete}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )
            }
        </>
    )
}

export default Note
