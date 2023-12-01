import React from 'react'

export default function inputFields() {
  return (
    <div>
      <input
                      type="text"
                      // value={subHeading}
                      // onChange={(e) => setSubHeading(e.target.value)}
                      id="title"
                      aria-describedby="helper-text-explanation"
                      className="w-full md:w-1/4 bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg outline-none block p-2.5"
                      placeholder="Add Subheadline"
                    />
    </div>
  )
}