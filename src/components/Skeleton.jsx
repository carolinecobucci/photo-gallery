const Skeleton = () => {
  return (
    <div className="flex flex-wrap justify-center m-auto gap-3 w-3/4 mb-20">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="cursor-pointer rounded-lg w-52 h-64 object-cover bg-gradient-to-tl from-stone-100 via-stone-200 to-neutral-300"
        ></div>
      ))}
    </div>
  );
};

export default Skeleton;
