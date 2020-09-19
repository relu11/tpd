import dotenv from "dotenv";

dotenv.config();

export const DATABASE_URL = process.env.DATABASE_URL;
export const TPD_ROLE = 1;
export const MANAGER_ROLE = 2;
export const EMPLOYEE_ROLE = 3;
