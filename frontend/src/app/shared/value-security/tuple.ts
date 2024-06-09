type TupleBuilder<
  T,
  Length extends number,
  Tail extends T[],
> = Tail['length'] extends Length
  ? Tail
  : TupleBuilder<T, Length, [T, ...Tail]>;

export type Tuple<T, Length extends number> = TupleBuilder<T, Length, []>;
