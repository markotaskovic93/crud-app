export const handleAsyncOperation = async (
  operation: () => Promise<void>,
  successMessage: string,
  errorMessage: string
): Promise<void> => {

  try {
    await operation();
    alert(successMessage);
  } catch (error: any) {
    throw new Error(errorMessage);
  }
};
