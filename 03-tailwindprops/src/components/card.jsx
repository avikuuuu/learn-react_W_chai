/* eslint-disable react/prop-types */


function Card({name,play}) {
  return (
    <h1 className="text-8xl font-semibold bg-slate-200">
      Hello {name} world!{play}
    </h1>
  )
}

export default Card;
