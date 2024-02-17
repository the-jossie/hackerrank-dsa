function timeConversion(s: string): string {
  let time = s.slice(0, -2);
  let format = s.slice(-2);
  let hour = s.slice(0, 2);

  if (format === "AM") {
    if (hour === "12") {
      time = "00" + time.slice(2);
    }
  } else if (format === "PM") {
    if (Number(hour) < Number("12")) {
      time = (Number(hour) + 12).toString() + time.slice(2);
      console.log({ time });
    }
  }

  return time;
}

timeConversion("12:00:00PM");
