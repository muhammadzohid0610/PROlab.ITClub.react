import React from "react";

const All: React.FC = () => {
  const topics = [
    {
      name: "HTML-CSS",
      img: "/images/html_css.png",
      level: "Beginner",
      probable: "Front-End",
      price: "Free",
    },
    {
      name: "Sass",
      img: "/images/sass.png",
      level: "Beginner",
      probable: "Front-End",
      price: "Free",
    },
    {
      name: "Tailwind css",
      img: "/images/tailwind.png",
      level: "Beginner",
      probable: "Front-End",
      price: "Free",
    },
    {
      name: "JavaScript",
      img: "/images/js_blog.png",
      level: "Medium",
      probable: "Front-End",
      price: "Free",
    },
    {
      name: "React",
      img: "/images/react.png",
      level: "Middle",
      probable: "Front-End",
      price: "Free",
    },
    {
      name: "Next",
      img: "/images/next.png",
      level: "Middle",
      probable: "Front-End",
      price: "Free",
    },
    {
      name: "TypeScript",
      img: "/images/typescript.png",
      level: "Middle",
      probable: "Front-End",
      price: "Free",
    },
    {
      name: "Python",
      img: "/images/pyyhon.png",
      level: "Middle",
      probable: "Back-End",
      price: "Free",
    },
  ];
  return (
    <div className="mt-[40px]">
      <div className="flex flex-col sm:flex-row flex-wrap gap-[15px] justify-center items-start">
        {topics.map((item) => (
          <div className="text-center w-[300px] border-b-2 border-b-[--black] mb-[20px] pb-[10px] xl:w-[380px] h-max cursor-pointer relative rounded-[15px] overflow-hidden">
            <img className="w-[100%]" src={item.img} alt="" />
            <p className="text-[22px] text-[--black] mt-[10px]">{item.name}</p>

            <div className="flex  text-start  absolute   top-[0] right-[3px]">
              <button className="hover:bg-[--succes2] text-[--black] font-[700] bg-[--succes] px-[10px] border-r-2 border-r-[--black]">
                {item.level}
              </button>
              <button className="hover:bg-[--succes] text-[--black] font-[700] bg-[--succes2] px-[10px] border-r-2 border-r-[--black]">
                {item.probable}
              </button>
              <button className="hover:bg-[--succes] hover:text-[--black] text-[--white] font-[700] bg-[--black]  px-[10px] ">
                {item.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
