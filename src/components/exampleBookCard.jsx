import React from 'react'

function exampleBookCard() {
  return (
    <div className='p-4 md:px-10 flex py-5 flex-col gap-5 shadow-lg rounded-xl'>
                            <div className='flex gap-3 justify-start'>
                                <div className='w-16 h-16 rounded-full overflow-hidden'>
                                    <img src={coin} className='w-full -rotate-12' />
                                </div>
                                <button className='text-xl text-green-600 font-semibold rounded-full '>
                                    {catalog?.price?.currencyCode} {catalog?.price?.amount}
                                </button>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex gap-5 items-center'>
                                    <BsCameraVideoFill className='fill-green-600' size={35} />
                                    <button className=' text-xs font-semibold rounded-full '>Online</button>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <BsCameraVideoFill className='fill-green-600' size={35} />
                                    <button className=' text-xs font-semibold rounded-full '>
                                        {catalog?.duration === "Custom" ? catalog?.customDuration : catalog.duration} mins
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-5 items-center'>
                                    <BsFillCheckCircleFill className='fill-green-500' size={20} />
                                    <h3 className='text-xs'>Upto 10 Sessions per Month</h3>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <BsFillCheckCircleFill className='fill-green-500' size={20} />
                                    <h3 className='text-xs'>Unlimited Q&A via chat</h3>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <BsFillCheckCircleFill className='fill-green-500' size={20} />
                                    <h3 className='text-xs'>Flat fee, no hidden costs</h3>
                                </div>
                            </div>
                            <div
                                className='w-full md:w-[75%] mx-auto cursor-pointer p-2.5 bg-green-500 hover:bg-gray-500 flex gap-5 items-center justify-center relative font-bold text-white rounded-[10px]'
                                onClick={() => {
                                    const selectTimeDiv = document.getElementById('select-date');
                                    const selectTimeDivPosition = selectTimeDiv.offsetTop;
                                    window.scrollTo({ top: selectTimeDivPosition, behavior: 'smooth' });
                                    if (!date) {
                                        return toast.error("Choose a date to book appointment!");
                                    }
                                    if (!selectedTime) {
                                        return toast.error("Pick date/time to proceed!");
                                    }
                                    setOpenDetail(true);
                                }}
                            >
                                <button className='text-center font-bold text-white rounded-[10px]'>
                                    Book Session
                                </button>
                                <FaChevronCircleRight />
                            </div>
                        </div>
  )
}

export default exampleBookCard