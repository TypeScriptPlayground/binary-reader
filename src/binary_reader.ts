import DataReader from "./data_reader.ts";

/**
 * This class represents a binary reader.
 * 
 * @example
 * ```
 * const dataToRead = new Uint8Array([1,2,3,4]);
 * 
 * const reader = new BinaryReader(dataToRead.buffer);
 * 
 * console.log(reader.read(2)); // ArrayBuffer { [Uint8Contents]: <01 02>, byteLength: 2 }
 * console.log(reader.bufferLeft.byteLength) // 2
 * ```
 * 
 * @extends DataReader
 */
export default class BinaryReader extends DataReader {
  private readonly bufferView : DataViewConstructor;

  /**
   * @param buffer The buffer to read from
   */
  constructor(buffer : ArrayBuffer) {
    super(buffer);
    this.bufferView = DataView
  }

  /**
   * This instance function reads a `Int8`.
   * 
   * @returns The `Int8` read.
   */
  public readInt8(): number {
    return new this.bufferView(this.read(1)).getInt8(0)
  }

  /**
   * This instance function reads a `Uint8`.
   * 
   * @returns The `Uint8` read.
   */
  public readUint8() : number {
    return new this.bufferView(this.read(1)).getUint8(0)
  }

  /**
   * This instance function reads a `Int16` (2 bytes).
   * 
   * @returns The `Int16` read.
   */
  public readInt16(littleEndian? : boolean) : number {
    return new this.bufferView(this.read(2)).getInt16(0, littleEndian)
  }

  /**
   * This instance function reads a `Uint16` (2 bytes).
   * 
   * @returns The `Uint16` read.
   */
  public readUint16(littleEndian? : boolean) : number {
    return new this.bufferView(this.read(2)).getUint16(0, littleEndian);
  }

  /**
   * This instance function reads a `Int32` (4 bytes).
   * 
   * @returns The `Int32` read.
   */
  public readInt32(littleEndian? : boolean): number {
    return new this.bufferView(this.read(4)).getInt32(0, littleEndian);
  }

  /**
   * This instance function reads a `Uint32` (4 bytes).
   * 
   * @returns The `Uint32` read.
   */
  public readUint32(littleEndian? : boolean): number {
    return new this.bufferView(this.read(4)).getUint32(0, littleEndian);
  }

  /**
   * This instance function reads a `Int64` (8 bytes).
   * 
   * @returns The `Int64` read.
   */
  public readInt64(littleEndian? : boolean) : bigint {
    return new this.bufferView(this.read(8)).getBigInt64(0, littleEndian);
  }

  /**
   * This instance function reads a `Uint64` (8 bytes).
   * 
   * @returns The `Uint64` read.
   */
  public readUint64(littleEndian? : boolean) : bigint {
    return new this.bufferView(this.read(8)).getBigUint64(0, littleEndian);
  }

  /**
   * This instance function reads a `Float16` (2 bytes).
   * 
   * @returns The `Float16` read.
   */
  public readFloat16(littleEndian? : boolean) : number {
    return new this.bufferView(this.read(2)).getFloat16(0, littleEndian);
  }

  /**
   * This instance function reads a `Float32` (4 bytes).
   * 
   * @returns The `Float32` read.
   */
  public readFloat32(littleEndian? : boolean) : number {
    return new this.bufferView(this.read(4)).getFloat32(0, littleEndian);
  }

  /**
   * This instance function reads a `Float64` (8 bytes).
   * 
   * @returns The `Float64` read.
   */
  public readFloat64(littleEndian? : boolean): number {
    return new this.bufferView(this.read(8)).getFloat64(0, littleEndian);
  }
}
