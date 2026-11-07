# Resume Screener (LCA vs UI/UX)
1. Download the 47 resumes from the Zoho folder, put them in `resumes/` (pdf/docx/txt).
2. `node make-manifest.js`
3. Deploy: `npx vercel --prod` (or push to GitHub and import in Vercel). No build command needed.
4. Open app -> "Job profiles" tab -> paste the real JD1 / JD2 text and tune keyword weights -> Apply.
5. Review the Errors/warnings, fix by hand where extraction failed, and describe your cleanup in the submission form.
Parsing runs in the browser (pdf.js + mammoth), so uploads of new resumes work on free Vercel with no server.
