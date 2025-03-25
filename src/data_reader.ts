/**
 * This class represents a data reader. It is similar to DataView but has an internal pointer to
 * automatically pop the bytes that have been already read.
 */
export default class DataReader {
  private readonly bufferData : ArrayBuffer;
  private pointer : number = 0;

  /**
   * @param buffer The buffer to read from
   */
  constructor(buffer : ArrayBuffer) {
    this.bufferData = buffer;
  }

  /**
   * This getter returns the whole buffer.
   * 
   * @returns The whole buffer.
   */
  public get buffer() : ArrayBuffer {
    return this.bufferData;
  }

  /**
   * This getter returns the buffer that is left to read.
   * 
   * @returns The buffer that is left.
   */
  public get bufferLeft() : ArrayBuffer {
    return this.bufferData.slice(this.pointer);
  }

  /**
   * This instance function reads `n` bytes and pushes the pointer accordingly.
   * 
   * @param bytes How many bytes to read
   * @returns The value read by `readFunction`.
   */
  public read(bytes : number = 1) : ArrayBuffer {
    const value = this.bufferData.slice(this.pointer, this.pointer + bytes)
    this.pointer += bytes;
    return value;
  }
}
