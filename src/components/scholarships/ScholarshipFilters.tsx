"use client";
import { DegreeLevel } from "@/types";

interface Props {
  onFilter: (filters: { country?: string; degreeLevel?: string }) => void;
}

const countries = ["Canada", "United States", "United Kingdom", "Germany", "China", "Australia"];
const degrees: DegreeLevel[] = ["HIGH_SCHOOL", "UNDERGRADUATE", "MASTERS", "PHD"];

export default function ScholarshipFilters({ onFilter }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <select onChange={(e) => onFilter({ country: e.target.value })} className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">All Countries</option>
        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <select onChange={(e) => onFilter({ degreeLevel: e.target.value })} className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">All Degrees</option>
        {degrees.map((d) => <option key={d} value={d}>{d}</option>)}
      </select>
    </div>
  );
}
