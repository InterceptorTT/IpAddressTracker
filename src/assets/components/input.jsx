
function Input({ onButtonClick, onInputChange, data }) {
  return (
    <div className="flex justify-center items-center flex-col bg-desktop">
      <h1 className="text-white font-bold text-3xl text-center desktop:text-4xl">IP address tracker</h1>
      <form className="">
        <input
          onChange={onInputChange}
          className="rounded h-8"
          type="text"
          name="input"
          id="input"
        />
        <button
          onClick={onButtonClick}
          type="submit"
          className="bg-black text-white h-8 rounded"
        >
        submit
        </button>
      </form>
      <div className="container w-4/6 rounded bg-white shadow-xl translate-y-12 z-50 desktop:h-16 desktop:translate-y-10 desktop:w-4/5">
        {data && data.location && (
          <div className="">
          <ul className=" flex flex-col justify-evenly items-center gap-1 desktop:flex-row desktop:gap-0
        text-slate-500 text-sm desktop:text-lg text-center">
            <li>
                <p>IP ADDRESS</p>
                <h2 className="text-black">{data.ip}</h2>
            </li>
            <li>
                <p >LOCATION</p>
                <h2 className="text-black">
                  {data.location.city}, {data.location.region},
                  {data.location.country}
                </h2>
            </li>
            <li>
                <p >TIMEZONE</p>
                <h2 className="text-black">{data.location.timezone}</h2>
            </li>
            <li>
                <p >ISP</p>
                <h2 className="text-black">{data.isp}</h2>
            </li>
          </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
