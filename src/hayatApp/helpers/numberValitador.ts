export function validarNumero(cadena: string): boolean {
  const numeroLimpio = cadena.trim();

  if (!isNaN(+numeroLimpio)) {
  if (numeroLimpio.length === 9) {
    return true; 
  } else {
    return false;
  }
  } else {
    return false;
  }
}