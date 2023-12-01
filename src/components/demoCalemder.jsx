import React from 'react'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

function demoCalemder() {
  return (
    <div className=' prent flex flex-col gap-5 items-center justify-center mb-14'>
    <h1 className='font-semibold text-2xl text-gray-700 pb-5'>Pick a date</h1>
    <LocalizationProvider className="child" dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalendar']}>
            <DemoItem label=" ">
                <DateCalendar
                    minDate={dayjs()}
                    value={date}
                    onChange={handleDateChange}
                    shouldDisableDate={isDayDisabled}
                    sx={{
                        "& .Mui-selected, & .Mui-selected.Mui-focusVisible": {
                            backgroundColor: "#00c853 !important",
                            color: "white !important",
                        },
                    }}
                />
            </DemoItem>
        </DemoContainer>
    </LocalizationProvider>
</div>
  )
}

export default demoCalemder