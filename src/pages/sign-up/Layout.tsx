import { ReactNode } from "react";
import IconStar from "../../assets/star.svg";

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => (
  <main
    className="p-7 pt-[20vh] min-h-svh flex flex-col items-center bg-gradient-to-b from-light-blue to-pastel-blue sm:justify-center sm:pt-7">
    {children}
    <img
      src={IconStar}
      className="size-4 absolute top-[5vh] left-[80vw] transform -translate-x-1/2 -translate-y-1/2"
      alt="star"
    />
    <img
      src={IconStar}
      className="size-4 absolute top-[20vh] left-[40vw] transform -translate-x-1/2 -translate-y-1/2"
      alt="star"
    />
    <img
      src={IconStar}
      className="absolute top-[25vh] left-[30vw] transform -translate-x-1/2 -translate-y-1/2"
      alt="star"
    />
    <img
      src={IconStar}
      className="absolute top-[70vh] left-[33vw] transform -translate-x-1/2 -translate-y-1/2"
      alt="star"
    />
    <img
      src={IconStar}
      className="size-5 absolute top-[73vh] left-[75vw] transform -translate-x-1/2 -translate-y-1/2"
      alt="star"
    />
    <img
      src={IconStar}
      className="size-4 absolute top-[90vh] left-[15vw] transform -translate-x-1/2 -translate-y-1/2"
      alt="star"
    />
  </main>
);

export default Layout;