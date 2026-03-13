import { cn } from "@/lib/utils";
import { ApplicationStatus } from "@/types";

const statusConfig: Record<ApplicationStatus, { label: string; className: string }> = {
  PENDING:    { label: "Pending",    className: "bg-yellow-100 text-yellow-700" },
  REVIEWING:  { label: "Reviewing",  className: "bg-blue-100 text-blue-700" },
  EXAM:       { label: "Exam",       className: "bg-purple-100 text-purple-700" },
  INTERVIEW:  { label: "Interview",  className: "bg-indigo-100 text-indigo-700" },
  ACCEPTED:   { label: "Accepted",   className: "bg-green-100 text-green-700" },
  REJECTED:   { label: "Rejected",   className: "bg-red-100 text-red-700" },
};

export default function ApplicationStatusBadge({ status }: { status: ApplicationStatus }) {
  const { label, className } = statusConfig[status];
  return <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold", className)}>{label}</span>;
}
