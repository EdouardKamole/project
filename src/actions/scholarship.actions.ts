"use server";
import { db } from "@/lib/db";
import { ScholarshipFilters } from "@/types";

export async function getScholarships(filters?: ScholarshipFilters) {
  return db.scholarship.findMany({
    where: {
      isActive: true,
      ...(filters?.country && { country: filters.country }),
      ...(filters?.degreeLevel && { degreeLevel: filters.degreeLevel }),
    },
    include: { university: true },
    orderBy: { deadline: "asc" },
  });
}

export async function getScholarshipById(id: string) {
  return db.scholarship.findUnique({ where: { id }, include: { university: true } });
}
