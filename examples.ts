import { Add } from './lib/add';
import { Dec } from './lib/dec';
import { Fibonacci } from './lib/fibonacci';
import { Inc } from './lib/inc';
import { Multiply } from './lib/multiply';
import { Substract } from './lib/substract';

type FivePlusOne = Inc<5>; // 6

type SevenMinusOne = Dec<7>; // 6

type ElevenPlusNineteen = Add<11, 19>; // 30

type TwentyMinusFive = Substract<20, 5>; // 15

type SixTimesEight = Multiply<6, 8>; // 48

type FibonacciOfEleven = Fibonacci<11>; // 89
