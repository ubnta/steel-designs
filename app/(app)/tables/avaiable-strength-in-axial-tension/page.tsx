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
import { IBeamIcon } from "@/components/Ilogo";
import {
  firstSelectOptions,
  secondSelectOptionsMap,
} from "@/components/data/dataMap"; // Veriler buradan geliyor

const thirdSelectMap: { [key: string]: { Fy: number; Fu: number } } = {
  "S 235": { Fy: 235, Fu: 360 },
  "S 275": { Fy: 275, Fu: 430 },
  "S 355": { Fy: 355, Fu: 510 },
  "S 420": { Fy: 420, Fu: 540 },
  "S 460": { Fy: 460, Fu: 550 },
};

export default function Page({ params }: { params: { slug: string } }) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const rowColor = "#84cc16";

  const [firstSelectValue, setFirstSelectValue] = useState<string | null>(null);
  const [secondSelectValue, setSecondSelectValue] = useState<string | null>(
    null
  );
  const [thirdSelectValue, setThirdSelectValue] = useState<string | null>(null);

  const Fy = thirdSelectValue ? thirdSelectMap[thirdSelectValue].Fy : 0;
  const Fu = thirdSelectValue ? thirdSelectMap[thirdSelectValue].Fu : 0;

  const selectedProfile = secondSelectValue
    ? {
        Ag: parseFloat(
          secondSelectOptionsMap[firstSelectValue!]
            .find((profile) => profile === secondSelectValue)!
            .split(" ")[3]
        ),
      }
    : { Ag: 0 };
  const Ag = selectedProfile.Ag; // Brüt kesit alanı (mm²)
  const Ae = Ag * 0.75; // Etkin kesit alanı Ae = Ag * 0.75

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

  const calculateYieldingLRFD = () => (0.9 * Fy * Ag) / 10;
  const calculateYieldingASD = () => (Ag * Fy) / (1.67 * 10);
  const calculateRuptureLRFD = () => (0.9 * Fu * Ae) / 10;
  const calculateRuptureASD = () => (Ae * Fu) / (1.67 * 10);

  const yieldingLRFD = calculateYieldingLRFD();
  const yieldingASD = calculateYieldingASD();
  const ruptureLRFD = calculateRuptureLRFD();
  const ruptureASD = calculateRuptureASD();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4">
      <div className="rounded-lg border border-dashed shadow-sm p-4">
        <div className="flex gap-4 mb-8">
          <Select onValueChange={(value) => setFirstSelectValue(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a profile" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Profiles</SelectLabel>
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
              <SelectValue placeholder="Select a shape" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Shapes</SelectLabel>
                {secondSelectOptions.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            disabled={!secondSelectValue}
            onValueChange={(value) => setThirdSelectValue(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Grades</SelectLabel>
                {Object.keys(thirdSelectMap).map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Hesaplamaları tablo şeklinde gösterme */}
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex gap-8">
            <IBeamIcon
              size="100%"
              height="auto"
              width="100%"
              className="min-w-[350px] max-w-[600px] h-auto"
            />
            {(yieldingLRFD > 0 ||
              yieldingASD > 0 ||
              ruptureLRFD > 0 ||
              ruptureASD > 0) && (
              <div className="w-max">
                <table className="w-full border-collapse border border-dashed">
                  <thead>
                    <tr>
                      <th
                        colSpan={2}
                        className="text-left px-4 py-2 border-dashed"
                      >
                        Area Values
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      onMouseEnter={() => handleMouseEnter(0, 0)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        backgroundColor:
                          hoveredRow === 0 && hoveredCol === 0
                            ? rowColor
                            : "transparent",
                      }}
                    >
                      <td className="border-dashed px-4 py-2">
                        Gross Area (Ag)
                      </td>
                      <td className="border-dashed px-4 py-2">
                        {Ag.toFixed(2)} mm²
                      </td>
                    </tr>
                    <tr
                      onMouseEnter={() => handleMouseEnter(1, 0)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        backgroundColor:
                          hoveredRow === 1 && hoveredCol === 0
                            ? rowColor
                            : "transparent",
                      }}
                    >
                      <td className="border-dashed px-4 py-2">
                        Effective Area (Ae)
                      </td>
                      <td className="border-dashed px-4 py-2">
                        {Ae.toFixed(2)} mm²
                      </td>
                    </tr>
                    <tr>
                      <th
                        colSpan={2}
                        className="text-left px-4 py-2 border-dashed"
                      >
                        Yielding
                      </th>
                    </tr>
                    <tr
                      onMouseEnter={() => handleMouseEnter(2, 0)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        backgroundColor:
                          hoveredRow === 2 && hoveredCol === 0
                            ? rowColor
                            : "transparent",
                      }}
                    >
                      <td className="border-dashed px-4 py-2">LRFD</td>
                      <td className="border-dashed px-4 py-2">
                        {yieldingLRFD.toFixed(2)} kN
                      </td>
                    </tr>
                    <tr
                      onMouseEnter={() => handleMouseEnter(3, 0)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        backgroundColor:
                          hoveredRow === 3 && hoveredCol === 0
                            ? rowColor
                            : "transparent",
                      }}
                    >
                      <td className="border-dashed px-4 py-2">ASD</td>
                      <td className="border-dashed px-4 py-2">
                        {yieldingASD.toFixed(2)} kN
                      </td>
                    </tr>

                    <tr>
                      <th
                        colSpan={2}
                        className="text-left px-4 py-2 border-dashed"
                      >
                        Rupture
                      </th>
                    </tr>
                    <tr
                      onMouseEnter={() => handleMouseEnter(4, 0)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        backgroundColor:
                          hoveredRow === 4 && hoveredCol === 0
                            ? rowColor
                            : "transparent",
                      }}
                    >
                      <td className="border-dashed px-4 py-2">LRFD</td>
                      <td className="border-dashed px-4 py-2">
                        {ruptureLRFD.toFixed(2)} kN
                      </td>
                    </tr>
                    <tr
                      onMouseEnter={() => handleMouseEnter(5, 0)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        backgroundColor:
                          hoveredRow === 5 && hoveredCol === 0
                            ? rowColor
                            : "transparent",
                      }}
                    >
                      <td className="border-dashed px-4 py-2">ASD</td>
                      <td className="border-dashed px-4 py-2">
                        {ruptureASD.toFixed(2)} kN
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </main>
  );
}
