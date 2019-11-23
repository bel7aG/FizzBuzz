import React, { useState, useEffect } from "react"
import Clock from "react-clock"
import { SFizzBuzz } from "./SFizzBuzz"

const FizzBuzz = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [fizzBuzzPlayer, setFizzBuzzPlayer] = useState(null)
  useEffect(() => {
    setInterval(() => setCurrentDate(new Date()), 1000)
  }, [])

  useEffect(() => {
    const currentSeconds = currentDate.getSeconds()
    const multipleOfThree = !(currentSeconds % 3)
    const multipleOfFive = !(currentSeconds % 5)

    const renderFizzBuzz =
      multipleOfThree && multipleOfFive
        ? "FizzBuzz"
        : multipleOfThree
        ? "Fizz"
        : multipleOfFive
        ? "Buzz"
        : ""

    setFizzBuzzPlayer(renderFizzBuzz)
  }, [currentDate.getSeconds()])

  return (
    <SFizzBuzz isFizzBuzz={fizzBuzzPlayer === "FizzBuzz"}>
      <Clock value={currentDate} />
      <div>
        <h1>
          {(!fizzBuzzPlayer && currentDate.getSeconds()) || fizzBuzzPlayer}
        </h1>
      </div>
    </SFizzBuzz>
  )
}

export default FizzBuzz
