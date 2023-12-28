const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius:"),
  };

  const Kelvin = measurement.value + 273;
  return Kelvin;
};

console.log(measureKelvin());
