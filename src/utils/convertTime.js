export const convertTimestampToDate = (timestamp) => {
    const seconds = timestamp.seconds * 1000;
    const milliseconds = timestamp.nanoseconds / 1000000;
    const millisecondsTotal = seconds + milliseconds;
    return new Date(millisecondsTotal);
  };

