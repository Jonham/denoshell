import {
  assertEquals,
  assertExists,
} from 'https://deno.land/std@0.105.0/testing/asserts.ts'
import { GetCwd } from './get_cwd.ts'

Deno.test('Resolve Path', () => {
  const here = GetCwd(import.meta)
  const readmeFile = here.resolve('./test/rawText.txt')
  assertExists(readmeFile)

  const readmeContent = Deno.readTextFileSync(readmeFile)
  assertEquals(readmeContent, 'rawText.txt', "Content Don't Matched.")
})
