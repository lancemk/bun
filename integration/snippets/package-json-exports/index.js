import * as InexactRoot from "inexact";
import * as InexactFile from "inexact/file";
import * as ExactFile from "inexact/foo";

export async function test() {
  console.assert(InexactRoot.target === "browser");
  console.assert(InexactFile.target === "browser");
  console.assert(ExactFile.target === "browser");

  console.assert(failed);
  return testDone(import.meta.url);
}
