// Returns a random number between the specified range.
export function getRandomInt(minimum: number, maximum: number): number {
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

// Converts a value from Degrees to Radians.
export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Converts a value from Radians to Degrees.
export function radiansToDegrees(radians: number): number {
  let theta = (radians * 180) / Math.PI;
  if (theta < 0) theta += 360;
  return theta;
}
