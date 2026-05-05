import { useState } from "react";
import { Label } from "./label.tsx";
import { Field } from "./field";
import { Input } from "./input";
import { Button } from "./button.tsx";

export function TechAdder() {
  const [techs, setTechs] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState<string>("");

  function addTech(tech: string) {
    setTechs([...techs, tech]);
  }

  function removeTech(tech: string) {
    const filterArr = techs.filter((val) => val !== tech);
    setTechs(filterArr);
  }

  return (
    <Field>
      <Label htmlFor="techs-inp">Techs</Label>
      <div className="flex flex-row flex-wrap p-1 gap-1">
        {techs.map((val) => (
          <span className="text-[12px] bg-[#00bba770] w-fit rounded-md flex items-center gap-3 p-2">
            <p>{val}</p>
            <Button
              className="bg-transparent p-0 w-fit h-fit text-[10px]"
              onClick={() => {
                removeTech(val);
              }}
            >
              X
            </Button>
          </span>
        ))}
      </div>
      <Input
        id="techs-inp"
        name="techs-inp"
        placeholder="react, docker, js"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        required
      />
      <Button
        variant="secondary"
        onClick={() => {
          addTech(inputVal);
          setInputVal("");
        }}
      >
        Add
      </Button>
    </Field>
  );
}
