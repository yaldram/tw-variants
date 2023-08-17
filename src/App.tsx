import { useState } from "react";
import { Button } from "./Button";

const themes = [
  {
    id: "red",
    bg: "bg-red-500 ring-red-500",
    containerClass: "red-theme",
  },
  {
    id: "blue",
    bg: "bg-blue-500 ring-blue-500",
    containerClass: "blue-theme",
  },
  {
    id: "green",
    bg: "bg-green-500 ring-green-500",
    containerClass: "green-theme",
  },
  {
    id: "orange",
    bg: "bg-orange-500 ring-orange-500",
    containerClass: "orange-theme",
  },
];

export function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  return (
    <div className={currentTheme.containerClass}>
      <div className="flex justify-center gap-md mt-md">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`p-[8px] ${theme.bg} rounded-full cursor-pointer  ${
              currentTheme.id === theme.id && "ring-2 ring-offset-2"
            }`}
            onClick={() => setCurrentTheme(theme)}
          />
        ))}
      </div>

      <div className="flex m-xl gap-xl">
        <div
          className={`${currentTheme.containerClass} flex flex-1 p-md gap-md`}
        >
          <Button>Click Me</Button>
          <Button varaint="outline">Click Me</Button>
        </div>

        <div
          className={`dark ${currentTheme.containerClass} flex flex-1 bg-black p-md gap-md`}
        >
          <Button>Click Me</Button>
          <Button varaint="outline">Click Me</Button>
        </div>
      </div>
    </div>
  );
}
