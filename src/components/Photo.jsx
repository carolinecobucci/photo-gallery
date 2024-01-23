const Photo = ({ data, setEnlargedPhoto }) => {
  return (
    <div onClick={() => setEnlargedPhoto(data)}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className="cursor-pointer rounded-lg w-52 h-64 object-cover "
      />
    </div>
  );
};

export default Photo;
