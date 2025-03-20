/**
 * This class represents a binary reader. It is similar to DataView but has an internal pointer to
 * automatically pop the bytes that have been already read.
 */
export default class BinaryReader {
  private bufferView : DataView;
  private pointer : number = 0;

  /**
   * @param buffer The buffer to read from
   */
  constructor(buffer : ArrayBufferLike) {
    this.bufferView = new DataView(buffer);
  }

  /**
   * This instance function reads `n` bytes and pushes the pointer accordingly.
   * 
   * @param readFunction The function that should be used for reading `n` bytes
   * @param bytes How many bytes to read
   * @returns The value read by `readFunction`.
   */
  private read<ReadFunction>(readFunction: () => ReadFunction, bytes: number): ReadFunction {
    const value = readFunction();
    this.pointer += bytes;
    return value;
  }

  /**
   * This getter returns the entire buffer.
   * 
   * @returns The entire buffer.
   */
  public get buffer() : ArrayBufferLike {
    return this.bufferView.buffer;
  }

  /**
   * This getter returns the buffer that is left to read.
   * 
   * @returns The buffer that is left.
   */
  public get bufferLeft() : ArrayBufferLike {
    return this.bufferView.buffer.slice(this.pointer);
  }

  /**
   * This instance function reads a `Int8`.
   * 
   * @returns The `Int8` read.
   */
  public readInt8(): number {
    return this.read(() => this.bufferView.getInt8(this.pointer), 1);
  }

  /**
   * This instance function reads a `Uint8`.
   * 
   * @returns The `Uint8` read.
   */
  public readUint8(): number {
    return this.read(() => this.bufferView.getUint8(this.pointer), 1);
  }

  /**
   * This instance function reads a `Int16` (2 bytes).
   * 
   * @returns The `Int16` read.
   */
  public readInt16(littleEndian: boolean = true): number {
    return this.read(() => this.bufferView.getInt16(this.pointer, littleEndian), 2);
  }

  /**
   * This instance function reads a `Uint16` (2 bytes).
   * 
   * @returns The `Uint16` read.
   */
  public readUint16(littleEndian: boolean = true): number {
    return this.read(() => this.bufferView.getUint16(this.pointer, littleEndian), 2);
  }

  /**
   * This instance function reads a `Int32` (4 bytes).
   * 
   * @returns The `Int32` read.
   */
  public readInt32(littleEndian: boolean = true): number {
    return this.read(() => this.bufferView.getInt32(this.pointer, littleEndian), 4);
  }

  /**
   * This instance function reads a `Uint32` (4 bytes).
   * 
   * @returns The `Uint32` read.
   */
  public readUint32(littleEndian: boolean = true): number {
    return this.read(() => this.bufferView.getUint32(this.pointer, littleEndian), 4);
  }

  /**
   * This instance function reads a `Int64` (8 bytes).
   * 
   * @returns The `Int64` read.
   */
  public readInt64(littleEndian: boolean = true): bigint {
    return this.read(() => this.bufferView.getBigInt64(this.pointer, littleEndian), 8);
  }

  /**
   * This instance function reads a `Uint64` (8 bytes).
   * 
   * @returns The `Uint64` read.
   */
  public readUint64(littleEndian: boolean = true): bigint {
    return this.read(() => this.bufferView.getBigUint64(this.pointer, littleEndian), 8);
  }

  /**
   * This instance function reads a `Float16` (2 bytes).
   * 
   * @returns The `Float16` read.
   */
  public readFloat16(littleEndian: boolean = true): number {
    return this.read(() => this.bufferView.getFloat16(this.pointer, littleEndian), 2);
  }

  /**
   * This instance function reads a `Float32` (4 bytes).
   * 
   * @returns The `Float32` read.
   */
  public readFloat32(littleEndian: boolean = true): number {
    return this.read(() => this.bufferView.getFloat32(this.pointer, littleEndian), 4);
  }

  /**
   * This instance function reads a `Float64` (8 bytes).
   * 
   * @returns The `Float54` read.
   */
  public readFloat64(littleEndian: boolean = true): number {
    return this.read(() => this.bufferView.getFloat64(this.pointer, littleEndian), 8);
  }
}
