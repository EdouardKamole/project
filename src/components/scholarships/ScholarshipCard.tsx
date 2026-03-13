import Link from "next/link";
import { formatCurrency, formatDate } from "@/lib/utils";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

interface Props {
  id: string;
  title: string;
  universityName: string;
  country: string;
  degreeLevel: string;
  amount?: number | null;
  currency?: string | null;
  deadline: Date | string;
}

export default function ScholarshipCard({ id, title, universityName, country, degreeLevel, amount, currency, deadline }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-semibold text-gray-900 text-base leading-snug">{title}</h3>
        {amount && (
          <span className="text-blue-700 font-bold text-sm whitespace-nowrap">
            {formatCurrency(amount, currency ?? "USD")}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-4">{universityName}</p>
      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{country}</span>
        <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />{degreeLevel}</span>
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Deadline: {formatDate(deadline)}</span>
      </div>
      <Link href={`/scholarships/${id}`} className="block w-full text-center bg-blue-700 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-800 transition-colors">
        Apply Now
      </Link>
    </div>
  );
}
