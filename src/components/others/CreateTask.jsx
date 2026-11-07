import React from 'react'

const CreateTask = () => {
  return (
                    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                    <form className='flex flex-wrap w-full items-start justify-between'>

                        {/* Left Side */}
                        <div className='w-1/2 space-y-4'>

                            <div>
                                <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
                                <input
                                    className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-500'
                                    type='text'
                                    placeholder='Make a UI design'
                                />
                            </div>

                            <div>
                                <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
                                <input
                                    className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-500'
                                    type='date'
                                />
                            </div>

                            <div>
                                <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
                                <input
                                    className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-500'
                                    type='text'
                                    placeholder='employee name'
                                />
                            </div>

                            <div>
                                <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
                                <input
                                    className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-500'
                                    type='text'
                                    placeholder='design, dev, etc'
                                />
                            </div>

                        </div>

                        {/* Right Side */}
                        <div className='w-1/2 flex flex-col'>

                            <h3 className='text-sm text-gray-300 mb-1'>
                                Description
                            </h3>

                            <textarea
                                className='w-full h-44 text-sm py-2 px-2 rounded outline-none bg-transparent border border-gray-500 resize-none'
                                rows='6'
                            ></textarea>

                            <button
                                type='submit'
                                className='bg-emerald-500 py-2 px-5 rounded mt-3 text-sm font-medium'
                            >
                                Create Task
                            </button>

                        </div>

                    </form>
                </div>
  )
}

export default CreateTask