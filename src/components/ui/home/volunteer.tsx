const Volunteer = () => {
  return (
    <div className="h-[400px] bg-black my-10 flex justify-center items-center relative">
      <div className="border-8 border-white w-[40%] h-[280px] flex justify-center items-center">
        <div className="absolute w-[60%] bg-yellow-400 h-[45%] rounded-md px-10 py-5">
          <h4 className="uppercase font-bold text-[24px] text-center text-gray-500">
            Do you want to work. for the underpriviledged communities and change
            their lives?
          </h4>
          <div className="flex justify-center items-center mt-5">
            <div className="py-2 px-5 font-semibold outline hover:text-white hover:bg-soft-red hover:outline-soft-red transition-all ease-in cursor-pointer rounded-sm">Become a Donar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
