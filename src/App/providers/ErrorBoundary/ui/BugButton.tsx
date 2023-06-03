import { Button } from "shared/ui/button/Button";
import { useEffect, useState } from "react";

interface BugButtonProps {
  className?: string;
}

//Test button to simulate an error for ErrorBoundery

export const BugButton: React.FC<BugButtonProps> = () => {

  const [error, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow}>
      throw error
    </Button>
  );
};
