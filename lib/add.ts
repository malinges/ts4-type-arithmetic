import { Dec } from './dec';
import { Inc } from './inc';

export type Add<A extends number, B extends number> = B extends 0 ? A : Add<Inc<A>, Dec<B>>;
