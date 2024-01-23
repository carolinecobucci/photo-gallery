import Photo from "./Photo";

const PhotoList = ({ photos, setEnlargedPhoto }) => {
  return (
    <div className="flex flex-wrap justify-center m-auto gap-3 w-3/4 mb-20">
      {photos.map((photo) => (
        <Photo key={photo.id} data={photo} setEnlargedPhoto={setEnlargedPhoto} />
      ))}
    </div>
  );
};

export default PhotoList;
