import { afterAll, it, describe } from "vitest";
import { RuleTester } from "@typescript-eslint/rule-tester";

RuleTester.afterAll = afterAll;

RuleTester.it = it;
RuleTester.inOnly = it.only;
RuleTester.describe = describe;