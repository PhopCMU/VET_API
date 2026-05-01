import { PrismaClient } from "../../generated/vetrun";

const prisma = new PrismaClient();

export const getNextBibNumber = async (prefix: string): Promise<string> => {
  const requestTime = new Date().toISOString();

  // Validate prefix format
  if (!prefix || !/^[A-Z0-9\-]{1,15}$/.test(prefix)) {
    console.warn(`[${requestTime}] Invalid prefix: ${prefix}`);
    throw new Error("Invalid bib prefix");
  }

  console.info(`[${requestTime}] Generating bib number for prefix: ${prefix}`);

  try {
    // Start a transaction to ensure atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Find or create the sequence for the prefix
      let sequence = await tx.bib_sequence.findUnique({
        where: { prefix },
      });

      if (!sequence) {
        // Create a new sequence starting at 1
        sequence = await tx.bib_sequence.create({
          data: {
            prefix,
            current_value: 1, // Start at 1
            max_value: 999,
          },
        });
      }

      if (sequence.current_value > sequence.max_value) {
        throw new Error(`No more bib numbers available for prefix: ${prefix}`);
      }

      // Format the bib number using current_value (e.g., VIP-001)
      const numberBib = `${prefix}${sequence.current_value
        .toString()
        .padStart(3, "0")}`;

      // Increment current_value for the next call
      await tx.bib_sequence.update({
        where: { prefix },
        data: { current_value: sequence.current_value + 1 },
      });

      return numberBib;
    });

    console.info(`[${requestTime}] Generated bib number: ${result}`);
    return result;
  } catch (error) {
    console.error(
      `[${requestTime}] Database error in getNextBibNumber:`,
      error
    );
    throw new Error("Failed to generate bib number");
  } finally {
    await prisma.$disconnect();
  }
};
