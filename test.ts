import test from "ava";
import { request } from "undici";
import { generateHash } from '.';

const exampleContent = "https://repository-images.githubusercontent.com/621263862/1d5d832d-c98e-49b3-9a6a-9a64acd904de";
const contentRequest = async () => {
  return new Uint8Array(await (await request(exampleContent)).body.arrayBuffer());
};

test("Hash generated", async (t) => {
  // @ts-expect-error
	t.pass(await generateHash(await contentRequest()));
});