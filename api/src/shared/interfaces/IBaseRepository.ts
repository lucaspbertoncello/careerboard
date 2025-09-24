export interface IBaseRepository<T> {
  create(data: T): Promise<T>;
  findById(id: string): Promise<T | null>;
  update(data: T): Promise<T>;
  delete(id: string): Promise<void>;
}
