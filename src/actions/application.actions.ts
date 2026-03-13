"use server";
import { db } from "@/lib/db";
import { ApplicationStatus } from "@/types";

export async function applyToScholarship(studentId: string, scholarshipId: string) {
  return db.application.create({ data: { studentId, scholarshipId, status: "PENDING" } });
}

export async function updateApplicationStatus(id: string, status: ApplicationStatus, notes?: string) {
  return db.application.update({ where: { id }, data: { status, notes } });
}

export async function getStudentApplications(studentId: string) {
  return db.application.findMany({
    where: { studentId },
    include: { scholarship: { include: { university: true } } },
    orderBy: { createdAt: "desc" },
  });
}
