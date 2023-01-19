// by convention, composable function names start with "use"
import { useEventListener } from "./_event";
export function useMouse(_color) {
  const color = ref(_color);
  const x = ref(0);
  const y = ref(0);

  if (process.client) {
    useEventListener(window, "mousemove", (event) => {
      x.value = event.pageX;
      y.value = event.pageY;
    });
  }

  return { x, y, color };
}
