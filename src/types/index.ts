export type Role = "STUDENT" | "UNIVERSITY_ADMIN" | "ADMIN";
export type ApplicationStatus = "PENDING" | "REVIEWING" | "EXAM" | "INTERVIEW" | "ACCEPTED" | "REJECTED";
export type DegreeLevel = "HIGH_SCHOOL" | "UNDERGRADUATE" | "MASTERS" | "PHD";
export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED";

export interface ScholarshipFilters {
  country?: string;
  degreeLevel?: DegreeLevel;
  fieldOfStudy?: string;
  universityId?: string;
}

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: Role;
}
