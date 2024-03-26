import CircularProgress from "../../next-ui/circularProgress";
import { Button } from "../../shadcn-ui/button";

export default function LoadingButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <CircularProgress />
    </Button>
  );
}
