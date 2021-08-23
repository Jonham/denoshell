import * as path from 'https://deno.land/std@0.105.0/path/mod.ts'

export function GetCwd(meta: ImportMeta) {
  return {
    resolve(str: string) {
      const dir = path.fromFileUrl(path.dirname(meta.url))
      return path.join(dir, str)
    },
  }
}
