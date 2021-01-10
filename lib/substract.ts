import { Dec } from './dec';

export type Substract<A extends number, B extends number> = B extends 0 ? A : Substract<Dec<A>, Dec<B>>;
