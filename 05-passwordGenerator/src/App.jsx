import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"


function App() {

  const [length, Setlength] = useState(6);
  const [allowNumber, SetAllowNumbers] = useState(false)
  const [charAllow, SetCharAllow] = useState(false);
  const [password, SetPassword] = useState("")

  const passwordRef=useRef(null);

  const passwordGeneretor = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz"

    if (allowNumber) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()~`:<>,.?/|"

    for (let i = 1; i < length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    SetPassword(pass);

  }, [length, allowNumber, charAllow, SetPassword])


  const copyPasswordToClipboard=()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setseleect
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    passwordGeneretor()
  },[length, allowNumber, charAllow, passwordGeneretor]
  )

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
        <h1 className="text-3xl  text-center mb-3 text-white">
          Password Generator
        </h1>
        <div className="flex my-3  shadow overflow-hidden  ">
          <input
            type="text"
            value={password}
            className="w-full outline-none  py-1 px-3 rounded-l-md"
            // placeholder="Password..."
            ref={passwordRef}
            readOnly
          >
          </input>
          <button 
          onClick={copyPasswordToClipboard}
          className="bg-blue-400 px-2 py-2 text-xl text-center rounded-r-lg text-black">
            copy
          </button>

        </div>

        <div className="flex shadow text-sm  justify-evenly">
          <div>
            <input
              type="range"
              value={length}
              min={5}
              max={100}
              onChange={(e) => Setlength(e.target.value)}
              className="cursor-pointer"
            />


            <label className=" mx-2"> length:{length} </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="oku"
              onChange={() => SetAllowNumbers((allowNumber) => !allowNumber)}
            />
            <label className=" mx-2" >Number</label>
          </div>


          <div>

            <input
              type="checkbox"
              id="oku"
              onChange={() => SetCharAllow((charAllow) => !charAllow)}
            />
            <label className=" mx-2" >Character</label>
          </div>

        </div>



      </div>


    </>
  )
}

export default App
