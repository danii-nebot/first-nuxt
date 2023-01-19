export function useWindowEventListener(whichEvent: string, callback: any) {
  onMounted(() => {
    window.addEventListener(whichEvent, callback);
  });

  onUnmounted(() => {
    window.removeEventListener(whichEvent, callback);
  });
}
