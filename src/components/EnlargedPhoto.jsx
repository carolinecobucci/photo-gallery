const EnlargedPhoto = ({ photo, setEnlargedPhoto }) => {
  return (
    <div
      onClick={() => setEnlargedPhoto(null)}
      className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80"
    >
      <div className="flex justify-center items-center w-3/6 h-screen">
        <img className="w-96 rounded-lg" src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </div>
  );
};

export default EnlargedPhoto;
