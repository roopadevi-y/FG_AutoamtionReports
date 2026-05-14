# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ViewStatus\specs\viewstatus-management.spec.ts >> VS_TC_005 - No data for invalid complaint number
- Location: ViewStatus\specs\viewstatus-management.spec.ts:81:5

# Error details

```
Error: Expected no data for invalid complaint number, but found data or no "No data" message.
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - banner [ref=e5]:
    - link "main_logo" [ref=e7] [cursor=pointer]:
      - /url: /
      - img "main_logo" [ref=e8]
    - generic [ref=e12]:
      - img "search" [ref=e14] [cursor=pointer]:
        - img [ref=e15]
      - textbox "Global search input" [ref=e17]:
        - /placeholder: "Search menus or type cn: / ph: / an: / sc:"
      - generic [ref=e19]:
        - generic [ref=e20]: Ctrl+Shift+X
        - img "info-circle" [ref=e21] [cursor=pointer]:
          - img [ref=e22]
    - generic [ref=e25]:
      - img "question-circle" [ref=e28] [cursor=pointer]:
        - img [ref=e29]
      - img "bell" [ref=e35] [cursor=pointer]:
        - img [ref=e36]
      - img "moon" [ref=e39] [cursor=pointer]:
        - img [ref=e40]
      - generic [ref=e43]:
        - img "user" [ref=e46] [cursor=pointer]:
          - img [ref=e47]
        - generic [ref=e50] [cursor=pointer]:
          - generic [ref=e51]: Admin
          - generic [ref=e52]: user
  - generic [ref=e53]:
    - generic:
      - img "main_logo"
      - img "main_logo"
      - img "main_logo"
    - complementary [ref=e54]:
      - generic [ref=e55]:
        - img "left" [ref=e57] [cursor=pointer]:
          - img [ref=e58]
        - menu [ref=e61]:
          - menuitem "user CSC" [expanded] [ref=e62] [cursor=pointer]:
            - img "user" [ref=e63]:
              - img [ref=e64]
            - generic [ref=e66]: CSC
          - menu [ref=e67]:
            - menuitem "dashboard Activity Center star" [ref=e68] [cursor=pointer]:
              - img "dashboard" [ref=e69]:
                - img [ref=e70]
              - generic [ref=e73]:
                - generic [ref=e74]: Activity Center
                - img "star" [ref=e76]:
                  - img [ref=e77]
            - menuitem "setting Configuration" [ref=e79] [cursor=pointer]:
              - img "setting" [ref=e80]:
                - img [ref=e81]
              - generic [ref=e83]: Configuration
            - menuitem "form Registration star" [ref=e84] [cursor=pointer]:
              - img "form" [ref=e85]:
                - img [ref=e86]
              - generic [ref=e90]:
                - generic [ref=e91]: Registration
                - img "star" [ref=e93]:
                  - img [ref=e94]
            - menuitem "eye View Status star" [ref=e96] [cursor=pointer]:
              - img "eye" [ref=e97]:
                - img [ref=e98]
              - generic [ref=e101]:
                - generic [ref=e102]: View Status
                - img "star" [ref=e104]:
                  - img [ref=e105]
            - menuitem "bar-chart Reports star" [ref=e107] [cursor=pointer]:
              - img "bar-chart" [ref=e108]:
                - img [ref=e109]
              - generic [ref=e112]:
                - generic [ref=e113]: Reports
                - img "star" [ref=e115]:
                  - img [ref=e116]
            - menuitem "pie-chart Analytics star" [ref=e118] [cursor=pointer]:
              - img "pie-chart" [ref=e119]:
                - img [ref=e120]
              - generic [ref=e123]:
                - generic [ref=e124]: Analytics
                - img "star" [ref=e126]:
                  - img [ref=e127]
            - menuitem "appstore Others" [ref=e129] [cursor=pointer]:
              - img "appstore" [ref=e130]:
                - img [ref=e131]
              - generic [ref=e133]: Others
            - menuitem "bar-chart Advanced Analytics" [ref=e134] [cursor=pointer]:
              - img "bar-chart" [ref=e135]:
                - img [ref=e136]
              - generic [ref=e138]: Advanced Analytics
          - menuitem "form Billing star" [ref=e139] [cursor=pointer]:
            - img "form" [ref=e140]:
              - img [ref=e141]
            - generic [ref=e145]:
              - generic [ref=e146]: Billing
              - img "star" [ref=e148]:
                - img [ref=e149]
          - menuitem "dollar Collections star" [ref=e151] [cursor=pointer]:
            - img "dollar" [ref=e152]:
              - img [ref=e153]
            - generic [ref=e156]:
              - generic [ref=e157]: Collections
              - img "star" [ref=e159]:
                - img [ref=e160]
          - menuitem "disconnect Disconnection star" [ref=e162] [cursor=pointer]:
            - img "disconnect" [ref=e163]:
              - img [ref=e164]
            - generic [ref=e167]:
              - generic [ref=e168]: Disconnection
              - img "star" [ref=e170]:
                - img [ref=e171]
          - menuitem "dashboard Metering star" [ref=e173] [cursor=pointer]:
            - img "dashboard" [ref=e174]:
              - img [ref=e175]
            - generic [ref=e178]:
              - generic [ref=e179]: Metering
              - img "star" [ref=e181]:
                - img [ref=e182]
    - main [ref=e184]:
      - navigation [ref=e185]:
        - list [ref=e186]:
          - listitem [ref=e187]:
            - generic [ref=e189] [cursor=pointer]: Home
          - listitem [ref=e190]: /
          - listitem [ref=e191]: View Status
      - heading "View Status" [level=2] [ref=e192]
      - generic [ref=e193]:
        - generic [ref=e194]:
          - heading "Search By Complaint Number" [level=2] [ref=e195]
          - generic [ref=e199]:
            - generic "Request/Complaint No" [ref=e201]: Request/Complaint No *
            - generic [ref=e205]:
              - generic [ref=e207]:
                - textbox "Please Enter" [active] [ref=e208]: "99999999999"
                - img "search" [ref=e210] [cursor=pointer]:
                  - img [ref=e211]
              - button "Show" [ref=e214] [cursor=pointer]:
                - generic [ref=e215]: Show
        - generic [ref=e216]:
          - heading "Search By SC Number" [level=2] [ref=e217]
          - generic [ref=e221]:
            - generic "SC Number" [ref=e223]: SC Number *
            - generic [ref=e227]:
              - generic [ref=e229]:
                - textbox "Please Enter" [ref=e230]
                - img "search" [ref=e232] [cursor=pointer]:
                  - img [ref=e233]
              - button "Show" [ref=e236] [cursor=pointer]:
                - generic [ref=e237]: Show
        - generic [ref=e238]:
          - heading "Search By Unique SCNO" [level=2] [ref=e239]
          - generic [ref=e243]:
            - generic "Unique SCNO" [ref=e245]: Unique SCNO *
            - generic [ref=e249]:
              - generic [ref=e251]:
                - textbox "Please Enter" [ref=e252]
                - img "search" [ref=e254] [cursor=pointer]:
                  - img [ref=e255]
              - button "Show" [ref=e258] [cursor=pointer]:
                - generic [ref=e259]: Show
        - generic [ref=e260]:
          - heading "Search By Consumer Phone Number" [level=2] [ref=e261]
          - generic [ref=e265]:
            - generic "Phone Number" [ref=e267]: Phone Number *
            - generic [ref=e271]:
              - generic [ref=e273]:
                - textbox "Please Enter" [ref=e274]
                - img "search" [ref=e276] [cursor=pointer]:
                  - img [ref=e277]
              - button "Show" [ref=e280] [cursor=pointer]:
                - generic [ref=e281]: Show
    - contentinfo [ref=e282]: © 2026 Fluentgrid Limited — All Rights Reserved
```

# Test source

```ts
  1   | import { test, type BrowserContext, type Page } from '@playwright/test';
  2   | import { mkdir } from 'node:fs/promises';
  3   | import path from 'node:path';
  4   | 
  5   | const STATUS_REGEX = /\b(PENDING|IN\s?PROGRESS|APPROVED|REJECTED|COMPLETED|HOLD|CLOSED)\b/i;
  6   | 
  7   | type SearchSection = 'compno' | 'consnum' | 'accNo' | 'phoneNo';
  8   | type StatusRecord = { complaintRequestNo: string; status: string };
  9   | type TestCaseInput = { id: string; title: string; key: string; section: SearchSection; value: string };
  10  | 
  11  | const TEST_CASES: TestCaseInput[] = [
  12  |   { id: 'VS_TC_001', title: 'Complaint Number Search', key: 'complaint', section: 'compno', value: '26050900060' },
  13  |   { id: 'VS_TC_002', title: 'SC Number Search', key: 'scno', section: 'consnum', value: '113356G233000784' },
  14  |   { id: 'VS_TC_003', title: 'Unique SCNO Search', key: 'unsc', section: 'accNo', value: '25947369' },
  15  |   { id: 'VS_TC_004', title: 'Phone Number Search', key: 'phno', section: 'phoneNo', value: '7416879744' },
  16  |   { id: 'VS_TC_005', title: 'No data for invalid complaint number', key: 'complaint', section: 'compno', value: '99999999999' },
  17  |   { id: 'VS_TC_006', title: 'Phone number must start with 9/8/7/6 only', key: 'phno', section: 'phoneNo', value: '5123456789' },
  18  |   { id: 'VS_TC_007', title: 'Phone number should start only with 9/8/7/6', key: 'phno', section: 'phoneNo', value: '1123456789' },
  19  |   { id: 'VS_TC_008', title: 'Phone number should accept numeric digits only', key: 'phno', section: 'phoneNo', value: '98AB12#789' },
  20  |   { id: 'VS_TC_009', title: 'Empty input submit validation', key: 'phno', section: 'phoneNo', value: '' },
  21  |   { id: 'VS_TC_010', title: 'Invalid SC Number format handling', key: 'scno', section: 'consnum', value: 'ABC123' }
  22  | ];
  23  | 
  24  | let context: BrowserContext;
  25  | let page: Page;
  26  | 
  27  | test.beforeAll(async ({ browser }) => {
  28  |   context = await browser.newContext();
  29  |   page = await context.newPage();
  30  |   await loginAndOpenViewStatus(page);
  31  | });
  32  | 
  33  | test.beforeEach(async () => {
  34  |   await ensureViewStatusLanding(page);
  35  | });
  36  | 
  37  | test.afterEach(async ({}, testInfo) => {
  38  |   const evidenceDir = path.join(process.cwd(), 'tests', 'utils', 'Test-Evidence');
  39  |   await mkdir(evidenceDir, { recursive: true });
  40  |   const outcome = testInfo.status === 'passed' ? 'passed' : 'failed';
  41  |   const fileName = `${sanitizeFilePart(testInfo.title)}-${outcome}-${formatDayHourMinute(new Date())}.png`;
  42  |   const filePath = path.join(evidenceDir, fileName);
  43  |   await page.screenshot({ path: filePath, fullPage: true }).catch(() => {});
  44  |   await testInfo.attach(`${outcome}-fullpage`, { path: filePath, contentType: 'image/png' }).catch(() => {});
  45  |   console.log(`${outcome.toUpperCase()} evidence saved: ${filePath}`);
  46  | });
  47  | 
  48  | test.afterAll(async () => {
  49  |   await context.close();
  50  | });
  51  | 
  52  | 
  53  | // TC-001 to TC-004: Standard positive/functional/negative logic (already handled above)
  54  | for (const tc of TEST_CASES.slice(0, 4)) {
  55  |   test(`${tc.id} - ${tc.title}`, async () => {
  56  |     const records = await searchAndCaptureStatus(page, tc.section, tc.value);
  57  |     const isAcceptedResultPage = await isComplaintHistoryOrDetailsPage(page);
  58  | 
  59  |     if (tc.id === 'VS_TC_003') {
  60  |       // Unique SCNO: fail if empty datatable or no valid record
  61  |       if (!isAcceptedResultPage || !records.length) {
  62  |         throw new Error('Unique SCNO did not return valid details or data row. Evidence attached.');
  63  |       }
  64  |       printStatusTable(tc, records);
  65  |       return;
  66  |     }
  67  | 
  68  |     if (isAcceptedResultPage) {
  69  |       if (records.length) {
  70  |         printStatusTable(tc, records);
  71  |       }
  72  |       return;
  73  |     }
  74  | 
  75  |     await assertNotNoDataScreen(page, tc);
  76  |     throw new Error(`Neither Complaint History nor View Status Details page found for ${tc.key}=${tc.value}`);
  77  |   });
  78  | }
  79  | 
  80  | // TC-005: No data handling for invalid input (negative)
  81  | test('VS_TC_005 - No data for invalid complaint number', async () => {
  82  |   const tc = TEST_CASES[4];
  83  |   const records = await searchAndCaptureStatus(page, tc.section, tc.value);
  84  |   const noDataVisible = await page.getByText('No data', { exact: true }).isVisible().catch(() => false);
  85  |   if (records.length > 0 || !noDataVisible) {
> 86  |     throw new Error('Expected no data for invalid complaint number, but found data or no "No data" message.');
      |           ^ Error: Expected no data for invalid complaint number, but found data or no "No data" message.
  87  |   }
  88  | });
  89  | 
  90  | // TC-006: Phone number must start with 9/8/7/6 only (negative)
  91  | test('VS_TC_006 - Phone number must start with 9/8/7/6 only', async () => {
  92  |   const tc = TEST_CASES[5];
  93  |   await searchAndCaptureStatus(page, tc.section, tc.value);
  94  |   const noDataVisible = await page.getByText('No data', { exact: true }).isVisible().catch(() => false);
  95  |   const validationMsg = await page.locator('.ant-form-item-explain-error').first().innerText().catch(() => '');
  96  |   if (!noDataVisible && !validationMsg) {
  97  |     throw new Error('Expected validation or no data for invalid phone number prefix, but neither was found.');
  98  |   }
  99  | });
  100 | 
  101 | // TC-007: Phone number should start only with 9/8/7/6 (negative, similar to TC-006)
  102 | test('VS_TC_007 - Phone number should start only with 9/8/7/6', async () => {
  103 |   const tc = TEST_CASES[6];
  104 |   await searchAndCaptureStatus(page, tc.section, tc.value);
  105 |   const noDataVisible = await page.getByText('No data', { exact: true }).isVisible().catch(() => false);
  106 |   const validationMsg = await page.locator('.ant-form-item-explain-error').first().innerText().catch(() => '');
  107 |   if (!noDataVisible && !validationMsg) {
  108 |     throw new Error('Expected validation or no data for invalid phone number prefix, but neither was found.');
  109 |   }
  110 | });
  111 | 
  112 | // TC-008: Phone number should accept numeric digits only (negative)
  113 | test('VS_TC_008 - Phone number should accept numeric digits only', async () => {
  114 |   const tc = TEST_CASES[7];
  115 |   await searchAndCaptureStatus(page, tc.section, tc.value);
  116 |   const noDataVisible = await page.getByText('No data', { exact: true }).isVisible().catch(() => false);
  117 |   const validationMsg = await page.locator('.ant-form-item-explain-error').first().innerText().catch(() => '');
  118 |   if (!noDataVisible && !validationMsg) {
  119 |     throw new Error('Expected validation or no data for non-numeric phone input, but neither was found.');
  120 |   }
  121 | });
  122 | 
  123 | // TC-009: Empty input submit validation (negative)
  124 | test('VS_TC_009 - Empty input submit validation', async () => {
  125 |   const tc = TEST_CASES[8];
  126 |   await ensureViewStatusLanding(page);
  127 |   const section = page.locator(`#${tc.section}`);
  128 |   const input = section.getByRole('textbox', { name: 'Please Enter' });
  129 |   await input.fill(tc.value); // blank
  130 |   await section.getByRole('button', { name: 'Show' }).click();
  131 |   const validationMsg = await page.locator('.ant-form-item-explain-error').first().innerText().catch(() => '');
  132 |   const noDataVisible = await page.getByText('No data', { exact: true }).isVisible().catch(() => false);
  133 |   if (!validationMsg && !noDataVisible) {
  134 |     throw new Error('Expected validation or no data for empty input, but neither was found.');
  135 |   }
  136 | });
  137 | 
  138 | // TC-010: Invalid SC Number format handling (negative)
  139 | test('VS_TC_010 - Invalid SC Number format handling', async () => {
  140 |   const tc = TEST_CASES[9];
  141 |   await searchAndCaptureStatus(page, tc.section, tc.value);
  142 |   const noDataVisible = await page.getByText('No data', { exact: true }).isVisible().catch(() => false);
  143 |   const validationMsg = await page.locator('.ant-form-item-explain-error').first().innerText().catch(() => '');
  144 |   if (!noDataVisible && !validationMsg) {
  145 |     throw new Error('Expected validation or no data for invalid SC number format, but neither was found.');
  146 |   }
  147 | });
  148 | 
  149 | async function loginAndOpenViewStatus(page: Page): Promise<void> {
  150 |   await page.goto('https://cisprod.mpower.in/auth/realms/SSO/protocol/openid-connect/auth?client_id=react-app&redirect_uri=https%3A%2F%2Fstage.mpower.in%2F&state=f9efcf6f-a618-4bdc-b22a-c089fc728eba&response_mode=fragment&response_type=code&scope=openid&nonce=a2cf18f6-d41a-4a8a-9999-c00ca743d5c5&code_challenge=6IYOH4FWclvMDVhFWh3RPEbEYms-xSxdfxEoFaxE0lU&code_challenge_method=S256');
  151 |   await page.getByRole('textbox', { name: 'Username' }).fill('test');
  152 |   await page.getByRole('textbox', { name: 'Password' }).fill('Product@321#');
  153 |   await page.getByRole('button', { name: 'Sign In' }).click();
  154 | 
  155 |   await page.getByRole('button', { name: 'View module right' }).nth(1).click();
  156 |   await page.getByText('View Status').click();
  157 | }
  158 | 
  159 | async function ensureViewStatusLanding(page: Page): Promise<void> {
  160 |   await dismissAlertIfPresent(page);
  161 | 
  162 |   if (await isAnySearchBoxVisible(page)) {
  163 |     return;
  164 |   }
  165 | 
  166 |   await tryBackToSearch(page);
  167 |   if (await isAnySearchBoxVisible(page)) {
  168 |     return;
  169 |   }
  170 | 
  171 |   await page.goto('https://stage.mpower.in/cscui/viewstatus');
  172 |   await page.waitForLoadState('domcontentloaded');
  173 | }
  174 | 
  175 | async function tryBackToSearch(page: Page): Promise<void> {
  176 |   for (let i = 0; i < 5; i++) {
  177 |     if (await isAnySearchBoxVisible(page)) return;
  178 |     const backButton = page.getByRole('button', { name: /Back/i }).first();
  179 |     if (!(await backButton.isVisible().catch(() => false))) return;
  180 |     await backButton.click();
  181 |     await dismissAlertIfPresent(page);
  182 |   }
  183 | }
  184 | 
  185 | async function isAnySearchBoxVisible(page: Page): Promise<boolean> {
  186 |   for (const sectionId of ['compno', 'consnum', 'accNo', 'phoneNo'] as const) {
```