/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Background() {
  const [color, setColor] = useState("black");

  function CardButton({ name, textcolor }) {
    return (
      <button
        className="outline-none p-1 text-white w-20 rounded-2xl flex justify-center items-center"
        style={{ backgroundColor: name, color: textcolor }}
        onClick={()=>setColor(name)}
      >
        {name}
      </button>
    );
  }

  return (
    <div
      className="w-screen h-screen flex justify-center items-end bg-slate-400"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="h-20 w-auto px-4 bg-slate-300 shadow-lg gap-3 my-5 rounded-2xl flex justify-center items-center">
        <CardButton name={"Red"} textcolor={"white"} color={"red"} />
        <CardButton name={"Green"} textcolor={"white"} color={"green"} />
        <CardButton name={"Blue"} textcolor={"white"} color={"Blue"} />
        <CardButton name={"Olive"} textcolor={"white"} color={"Olive"} />
        <CardButton name={"Gray"} textcolor={"white"} color={"Gray"} />
        <CardButton name={"Yellow"} textcolor={"white"} color={"Yellow"} />
        <CardButton name={"Pink"} textcolor={"white"} color={"Pink"} />
        <CardButton name={"Purple"} textcolor={"white"} color={"Purple"} />
        <CardButton name={"lavender"} textcolor={"black"} color={"lavender"} />
        <CardButton name={"White"} textcolor={"black"} color={"White"} />
        <CardButton name={"Black"} textcolor={"white"} color={"Black"} />
      </div>
    </div>
  );
}
