"use client";

import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  dataMap,
  firstSelectOptions,
  secondSelectOptionsMap,
} from "@/components/data/dataMap";
import { IBeamIcon } from "@/components/Ilogo";

export default function Page({ params }: { params: { slug: string } }) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const rowColor = "#84cc16";

  const [firstSelectValue, setFirstSelectValue] = useState<string | null>(null);
  const [secondSelectValue, setSecondSelectValue] = useState<string | null>(
    null
  );

  const handleMouseEnter = (rowIndex: number, colIndex: number) => {
    setHoveredRow(rowIndex);
    setHoveredCol(colIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
    setHoveredCol(null);
  };

  const secondSelectOptions = firstSelectValue
    ? secondSelectOptionsMap[firstSelectValue]
    : [];

  const selectedData = secondSelectValue ? dataMap[secondSelectValue] : {};

  return (
    <main className="flex flex-1 flex-col gap-4 p-4">
      <div className="rounded-lg border border-dashed shadow-sm p-4">
        <div className="flex gap-4 mb-8">
          <Select onValueChange={(value) => setFirstSelectValue(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {firstSelectOptions.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            disabled={!firstSelectValue}
            onValueChange={(value) => setSecondSelectValue(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                {secondSelectOptions.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex gap-8">
            <IBeamIcon
              size="100%"
              height="auto"
              width="100%"
              className="min-w-[350px] max-w-[600px] h-auto"
            />
            <div className="w-max">
              <table className="w-full border-collapse border border-dashed">
                <tbody>
                  {Object.entries(selectedData)
                    .reduce((rows, [key, value], index) => {
                      if (index % 2 === 0) rows.push([]);
                      rows[rows.length - 1].push([key, value]);
                      return rows;
                    }, [] as [string, string][][])
                    .map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map(([key, value], colIndex) => (
                          <td
                            key={colIndex}
                            className="border border-dashed px-4 py-2 text-left"
                            onMouseEnter={() =>
                              handleMouseEnter(rowIndex, colIndex)
                            }
                            onMouseLeave={handleMouseLeave}
                            style={{
                              backgroundColor:
                                hoveredRow === rowIndex &&
                                hoveredCol === colIndex
                                  ? rowColor
                                  : "transparent",
                            }}
                          >
                            {key} = {value}
                          </td>
                        ))}
                        {row.length < 2 &&
                          Array.from({ length: 2 - row.length }).map(
                            (_, colIndex) => (
                              <td
                                key={colIndex}
                                className="border border-dashed px-4 py-2 text-center"
                              ></td>
                            )
                          )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </main>
  );
}
