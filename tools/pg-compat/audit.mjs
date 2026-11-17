import { legacyGate } from './native-layout.mjs';
legacyGate();
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { snapshotGame } from './lib.mjs';

const root = fileURLToPath(new URL('../..', import.meta.url));
const targets = new Set(JSON.parse(fs.readFileSync(path.join(root, 'tools/pg-compat/targets.json'))).games.map(x => x.id));
const records = [], failures = [];
for (const id of fs.readdirSync(root).filter(x => /^\d+$/.test(x) && !targets.has(x)).sort((a,b) => Number(a)-Number(b))) {
  for (const family of ['modern','legacy']) {
    const folder = family === 'modern' ? '984721902a' : '3c4695a542';
    if (!fs.existsSync(path.join(root, id, 'shared', folder, 'index.json'))) continue;
    try {
      const snapshot = snapshotGame(root, { id, family });
      const sequence = ['ee48aa52876a3295120e5ecf218e8f70b013157475b6ffe9558e6980a2980a0f','abeb5dba8ece44530ba1d84ab2c52cb6276e192169c655f0a3965d2616cb9ba8'].includes(snapshot.files.utility.sha256);
      const deadline = ['ac96abf3247f50538a2fdadebb3840f4ff3fbc7849c31cf41854cabe025c94c9','987256ff5caa463250587ed32c1b7a926e8b3d1307aad2226bb2b9d437c57c9b'].includes(snapshot.files.engine.sha256);
      if (sequence || deadline) records.push({ id, family, knownSequenceIssue: sequence, knownMissingDeadline: deadline, files: snapshot.files });
    } catch (error) { failures.push({ id, family, reason: error.message }); }
  }
}
console.log(JSON.stringify({ schemaVersion:1, scope:'read-only local manifest candidates outside approved 11 games; runtime selection unverified', affectedDirectories: new Set(records.map(x => x.id)).size, candidates:records, failures },null,2));
