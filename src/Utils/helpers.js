export const convertToCelcius = (kelvins) => {
  return (kelvins - 273.15).toFixed(2);
};

export const traducir = (string) => {
  switch (string) {
    case "clear sky":
      return "Cielo despejado";
      break;
    case "scattered clouds":
      return "Nubes dispersas";
      break;
    case "broken clouds":
      return "Parcialmente nublado";
      break;
    case "overcast clouds":
      return "Totalmente nublado";
      break;
    case "Clouds":
      return "Nublado 🌥️";
      break;
    case "Clear":
      return "Despejado 🌞";
      break;
    default:
      return "Sin definir";
  }
};
