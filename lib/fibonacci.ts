import { Add } from './add';
import { Dec } from './dec';

export type Fibonacci<N extends number> = N extends 0 | 1 ? N : Add<Fibonacci<Dec<N>>, Fibonacci<Dec<Dec<N>>>>;
