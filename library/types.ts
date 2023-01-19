

type AlertBoxTypes = "error" | "warning" | "success" | "info";

interface BorderType {
  border: boolean;
  thickness: number;
}
export interface AlertBoxPropsType {
  type: AlertBoxTypes;
  border: boolean;
}
