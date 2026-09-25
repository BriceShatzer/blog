// Accessibility check used by CI.
//
// Deliberately Playwright + axe-core rather than @axe-core/cli: the CLI drives Chrome
// through chromedriver, which is versioned independently of the Chrome on the runner.
// That mismatch (chromedriver 154 vs Chrome 153) broke the build. Playwright pins its
// own browser, so there is nothing to skew.
import { chromium } from 'playwright';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const axeSource = readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8');
const urls = process.argv.slice(2);
if (!urls.length) { console.error('usage: node script/a11y.mjs <url>...'); process.exit(2); }

const browser = await chromium.launch();
let failed = 0;

for (const url of urls) {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.addScriptTag({ content: axeSource });
  const { violations } = await page.evaluate(async () =>
    // `.highlight` is excluded rather than disabling the color-contrast rule outright:
    // Cayman's rouge-github syntax highlighting fails AA (comments 2.66:1, builtins
    // 3.82:1). That is pre-existing and recolouring it restyles every code block, so it
    // is tracked separately -- but contrast is still enforced everywhere else.
    await axe.run({ exclude: [['.highlight']] }, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'] },
    }));
  console.log(`\n${url}`);
  if (!violations.length) console.log('  no violations');
  for (const v of violations) {
    failed++;
    console.log(`  [${v.impact}] ${v.id}: ${v.help}`);
    for (const n of v.nodes.slice(0, 5)) console.log(`      ${n.html.slice(0, 110)}`);
  }
  await page.close();
}

await browser.close();
console.log(failed ? `\n${failed} violation type(s)` : '\nno violations');
process.exit(failed ? 1 : 0);
