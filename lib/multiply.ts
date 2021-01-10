import { Add } from "./add";
import { Dec } from "./dec";

export type Multiply<A extends number, B extends number> = A extends 0 ? 0 : B extends 0 ? 0 : A extends 1 ? B : B extends 1 ? A : Add<A, Multiply<A, Dec<B>>;
