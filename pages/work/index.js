const images = [
  { id: 1, title: "Image 1", src: "/contact.jpg" },
  { id: 2, title: "Image 2", src: "contact.jpg" },
  { id: 3, title: "Image 3", src: "contact.jpg" },
  { id: 4, title: "Image 4", src: "contact.jpg" },
  { id: 5, title: "Image 5", src: "contact.jpg" },
  { id: 6, title: "Image 6", src: "contact.jpg" },
];
const Work = () => {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-3 gap-4 h-[50vh]">
      {images.map((image) => (
        <div key={image.id} className="col-span-1">
          <div className="relative h-full">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 text-white font-bold">
              {image.title}
            </div>
            <div className="absolute bottom-2 left-2 text-white font-bold underline">
              {image.id}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
