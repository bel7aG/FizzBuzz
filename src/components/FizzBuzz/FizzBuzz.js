import React, { useState, useEffect } from "react"
import Clock from "react-clock"
import { SFizzBuzz } from "./SFizzBuzz"

const FizzBuzz = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setCurrentDate(new Date()), 1000)
  }, [])

  return (
    <SFizzBuzz>
      <Clock value={currentDate} />
    </SFizzBuzz>
  )
}

export default FizzBuzz
