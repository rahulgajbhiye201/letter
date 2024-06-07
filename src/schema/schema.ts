import { z } from "zod";

const mySchema = z.object({
  name: z.string().min(1),
  letter: z.string().min(1),
  background: z.string().min(1),
});

export default mySchema;
