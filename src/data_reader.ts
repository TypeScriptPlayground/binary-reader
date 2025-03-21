export default class DataReader {
  public readonly buffer : ArrayBuffer;
  public pointer : number = 0;

  /**
   * @param buffer The buffer to read from
   */
  constructor(buffer : ArrayBuffer) {
    this.buffer = buffer;
  }

  /**
   * This getter returns the buffer that is left to read.
   * 
   * @returns The buffer that is left.
   */
  public get bufferLeft() : ArrayBuffer {
    return this.buffer.slice(this.pointer);
  }

  /**
   * This instance function reads `n` bytes and pushes the pointer accordingly.
   * 
   * @param bytes How many bytes to read
   * @returns The value read by `readFunction`.
   */
  public read(bytes : number = 1) : ArrayBuffer {
    const value = this.buffer.slice(this.pointer, this.pointer + bytes)
    this.pointer += bytes;
    return value;
  }
}
