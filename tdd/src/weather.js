// weather.js
export function getAdvice(service) {
  const temp = service.getTemperature();
  if (temp < 10) return "Wear a coat";
  if (temp > 30) return "Wear sunscreen";
  return "Enjoy your day";
}

