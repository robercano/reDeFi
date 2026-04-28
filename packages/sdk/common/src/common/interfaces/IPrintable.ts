/**
 * IPrintable
 * Interface for printable objects.
 *
 * This enables more readable debug objects
 */
export interface IPrintable {
  /**
   * toString
   * Returns a string representation of the object
   * @returns string
   *
   * The string representation should have enough info to debug the object
   */
  toString(): string
}
