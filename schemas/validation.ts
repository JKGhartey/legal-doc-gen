"use client";

import { z } from "zod";

export const formSchema = z.object({
  entityName: z.string().min(1, "Entity name is required"),
  // Add other fields as needed
});
