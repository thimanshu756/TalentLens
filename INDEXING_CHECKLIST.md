# Google Search Console & SEO Indexing Checklist

> **Goal**: Get your website indexed quickly by Google and other search engines for maximum visibility.

---

## 📋 Pre-Deployment Checklist

Before submitting to Google Search Console, ensure these items are complete:

- [ ] **All SEO metadata configured** in `app/layout.tsx`
- [ ] **Page-specific metadata** added to all pages (Home, Services, About, Contact)
- [ ] **JSON-LD structured data** implemented (Organization, BreadcrumbList)
- [ ] **Sitemap.xml** generated at `/app/sitemap.ts`
- [ ] **Robots.txt** created in `/public/robots.txt`
- [ ] **next.config.ts** optimized with headers and compression
- [ ] **Website deployed** to production (Vercel/Netlify/Custom)
- [ ] **Custom domain** connected (if applicable)
- [ ] **HTTPS enabled** (required for indexing)

---

## 🚀 Step 1: Google Search Console Setup

### 1.1 Create Google Search Console Account

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Start now"** or **"Add Property"**
3. Choose verification method:
   - **Domain Property** (recommended): Verifies all subdomains and protocols
   - **URL Prefix**: Verifies specific URL only (e.g., https://rakriai.com)

### 1.2 Verify Site Ownership

Choose one of the following verification methods:

#### **Option A: HTML Meta Tag (Recommended for Next.js)**

1. Google will provide a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```

2. Add the verification code to `app/layout.tsx`:
   ```typescript
   verification: {
     google: "YOUR_VERIFICATION_CODE", // Replace REPLACE_ME_GOOGLE_VERIFICATION_CODE
   }
   ```

3. Deploy your changes to production
4. Return to Google Search Console and click **"Verify"**

#### **Option B: DNS Verification (For Domain Property)**

1. Google provides a TXT record like:
   ```
   google-site-verification=abcd1234efgh5678
   ```

2. Add this TXT record to your domain's DNS settings:
   - **Host/Name**: `@` or your domain name
   - **Type**: `TXT`
   - **Value**: The verification string from Google

3. Wait 24-48 hours for DNS propagation
4. Return to Google Search Console and click **"Verify"**

#### **Option C: HTML File Upload**

1. Download the verification HTML file from Google
2. Upload to `public/` folder in your Next.js project
3. Deploy to production
4. Verify the file is accessible: `https://yourdomain.com/google-verification-file.html`
5. Return to Google Search Console and click **"Verify"**

#### **Option D: Google Analytics (If Already Installed)**

1. If you have Google Analytics with the same Google account
2. Google Search Console can verify using your existing GA tracking code
3. Select this option and click **"Verify"**

**✅ Verification Status**: Once verified, you'll see "Ownership verified" message

---

## 📄 Step 2: Submit Sitemap.xml

### 2.1 Verify Sitemap is Accessible

1. Visit your sitemap URL: `https://yourdomain.com/sitemap.xml`
2. Ensure it displays XML with all your pages listed
3. Check for any errors (should see `<url>`, `<loc>`, `<lastmod>`, etc.)

### 2.2 Submit Sitemap to Google Search Console

1. In Google Search Console, navigate to **"Sitemaps"** in the left sidebar
2. Under **"Add a new sitemap"**, enter: `sitemap.xml`
3. Click **"Submit"**
4. Status should change to **"Success"** within a few minutes

**Expected Result**:
- Google will start crawling URLs from your sitemap
- You'll see discovered URLs in the "Coverage" report within 24-48 hours

### 2.3 Submit Sitemap to Other Search Engines

#### **Bing Webmaster Tools**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in with Microsoft account
3. Add your site and verify ownership (similar to Google)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

#### **Yandex Webmaster** (Optional - for Russian market)
1. Go to [Yandex Webmaster](https://webmaster.yandex.com/)
2. Add site and verify ownership
3. Submit sitemap

---

## 🔍 Step 3: URL Inspection Tool

The URL Inspection tool allows you to check individual pages and request indexing.

### 3.1 Inspect Your Homepage

1. In Google Search Console, click **"URL Inspection"** in the left sidebar
2. Enter your homepage URL: `https://yourdomain.com`
3. Wait for inspection to complete (10-30 seconds)

### 3.2 Understanding Inspection Results

#### **✅ "URL is on Google"**
- Your page is already indexed
- Check "Coverage", "Mobile Usability", and "Enhancements" tabs for issues

#### **❌ "URL is not on Google"**
- Page not indexed yet (normal for new sites)
- Check reasons: "Discovered - currently not indexed", "Crawled - not indexed", etc.
- Proceed to manual indexing (Step 4)

### 3.3 Test Live URL

1. Click **"Test live URL"** button
2. Google will fetch your page in real-time
3. Review results:
   - ✅ Page is indexable
   - ⚠️ Page has issues (review specific errors)
4. Check if all metadata and structured data are detected

---

## 📨 Step 4: Request Manual Indexing

For new websites or updated pages, manually request indexing to speed up the process.

### 4.1 Request Indexing for Priority Pages

1. Use URL Inspection tool for each important page:
   - Homepage: `https://yourdomain.com`
   - Services: `https://yourdomain.com/services`
   - About: `https://yourdomain.com/about`
   - Contact: `https://yourdomain.com/contact`

2. For each URL:
   - Click **"Request Indexing"** button
   - Wait for confirmation (may take 1-2 minutes)
   - You'll see: "Indexing requested"

### 4.2 Daily Indexing Limits

- Google limits manual indexing requests (typically 10-20 per day)
- Prioritize your most important pages first
- Once sitemap is crawled, Google will discover other pages automatically

---

## ⏱️ Step 5: Expected Timeline for Indexing

### Typical Indexing Timelines

| Action | Timeline | Notes |
|--------|----------|-------|
| **Sitemap submission** | Immediate | Sitemap processed within minutes |
| **First crawl** | 24-72 hours | Google discovers URLs from sitemap |
| **Homepage indexing** | 1-7 days | Priority page, usually fastest |
| **Secondary pages** | 1-4 weeks | Services, About, Contact pages |
| **Full site indexing** | 2-8 weeks | All pages, including blog posts |
| **Regular crawling** | Varies | Based on site authority and update frequency |

### Factors Affecting Indexing Speed

**✅ Faster Indexing**:
- New, high-quality content
- Frequent updates
- Strong backlinks
- Mobile-friendly design
- Fast page load times (Core Web Vitals)
- Proper schema markup

**⚠️ Slower Indexing**:
- Brand new domain (no history)
- Thin or duplicate content
- Technical SEO issues
- Slow server response times
- No backlinks or social signals

---

## 📊 Step 6: Monitor Indexing Progress

### 6.1 Check Coverage Report

1. In Google Search Console, go to **"Coverage"** (or "Pages" in new interface)
2. Review metrics:
   - **Valid**: Pages successfully indexed
   - **Valid with warnings**: Indexed but has issues
   - **Error**: Not indexed due to errors
   - **Excluded**: Intentionally not indexed (e.g., noindex tags)

### 6.2 Monitor Performance

1. Go to **"Performance"** tab
2. Track metrics:
   - **Total clicks**: Users clicking your site in search results
   - **Total impressions**: Times your site appeared in search results
   - **Average CTR**: Click-through rate
   - **Average position**: Your ranking in search results

**Note**: Performance data appears only after pages are indexed and receiving impressions (7-14 days minimum)

### 6.3 Check Mobile Usability

1. Go to **"Mobile Usability"** (under "Experience")
2. Fix any mobile issues:
   - Text too small to read
   - Clickable elements too close together
   - Content wider than screen
   - Viewport not set

### 6.4 Review Core Web Vitals

1. Go to **"Core Web Vitals"** (under "Experience")
2. Monitor key metrics:
   - **LCP** (Largest Contentful Paint): < 2.5s (Good)
   - **FID** (First Input Delay): < 100ms (Good)
   - **CLS** (Cumulative Layout Shift): < 0.1 (Good)
3. Fix any "Poor" URLs by optimizing images, code, and server response

---

## 🛠️ Step 7: Troubleshooting Common Issues

### Issue 1: "Discovered - currently not indexed"

**Reason**: Google found your page but hasn't crawled it yet.

**Solutions**:
- ✅ Request manual indexing via URL Inspection tool
- ✅ Improve page quality and content depth
- ✅ Add internal links from indexed pages
- ✅ Be patient (can take 1-4 weeks)

### Issue 2: "Crawled - currently not indexed"

**Reason**: Google crawled but chose not to index (low quality signal).

**Solutions**:
- ✅ Improve content quality and uniqueness
- ✅ Add more valuable information (aim for 500+ words)
- ✅ Optimize page metadata and structured data
- ✅ Build backlinks from reputable sites

### Issue 3: "Blocked by robots.txt"

**Reason**: Your robots.txt is blocking Googlebot.

**Solutions**:
- ✅ Check `/public/robots.txt` allows Googlebot
- ✅ Ensure `Disallow:` rules don't block important pages
- ✅ Test with Robots.txt Tester in Google Search Console

### Issue 4: "Noindex tag detected"

**Reason**: Page has `<meta name="robots" content="noindex">` or HTTP header.

**Solutions**:
- ✅ Check `app/layout.tsx` metadata
- ✅ Ensure `robots: { index: true }` is set
- ✅ Remove any noindex tags from page components

### Issue 5: "Soft 404"

**Reason**: Page returns 200 status but appears empty or error-like.

**Solutions**:
- ✅ Ensure page has substantial content
- ✅ Check for JavaScript errors preventing content rendering
- ✅ Verify server-side rendering is working

---

## 🔗 Step 8: Build Backlinks for Faster Indexing

While not strictly part of Google Search Console, backlinks significantly speed up indexing.

### Quick Wins for New Sites

1. **Submit to directories**:
   - [Google My Business](https://www.google.com/business/) (if local business)
   - Industry-specific directories
   - Startup directories (e.g., Product Hunt, BetaList)

2. **Social media profiles**:
   - Create company profiles on LinkedIn, Twitter, Facebook
   - Include website link in bio/about section

3. **Business listings**:
   - Crunchbase
   - AngelList
   - Local chamber of commerce

4. **Content marketing**:
   - Write guest posts on industry blogs
   - Create shareable content (infographics, guides)
   - Participate in relevant forums/communities

---

## ✅ Final Verification Checklist

Before considering setup complete, verify these items:

### Technical SEO
- [ ] All pages return 200 status codes (no 404s or 500s)
- [ ] HTTPS is enabled with valid SSL certificate
- [ ] Canonical URLs are set correctly
- [ ] XML sitemap is valid and accessible
- [ ] Robots.txt allows crawlers and references sitemap
- [ ] Mobile-responsive design (test on mobile devices)
- [ ] Page speed is optimized (use PageSpeed Insights)

### Metadata & Structured Data
- [ ] Title tags are unique for each page (50-60 characters)
- [ ] Meta descriptions are compelling (150-160 characters)
- [ ] OpenGraph metadata for social sharing
- [ ] Twitter Card metadata configured
- [ ] JSON-LD structured data validates without errors ([Schema Validator](https://validator.schema.org/))

### Google Search Console
- [ ] Property verified successfully
- [ ] Sitemap.xml submitted and processed
- [ ] Manual indexing requested for priority pages
- [ ] No critical errors in Coverage report
- [ ] No mobile usability issues
- [ ] Core Web Vitals are in "Good" range (or improving)

### Additional Search Engines
- [ ] Bing Webmaster Tools configured
- [ ] Sitemap submitted to Bing
- [ ] Consider Yandex (if targeting Russian market)

---

## 📚 Additional Resources

### Official Documentation
- [Google Search Central](https://developers.google.com/search) - SEO best practices
- [Search Console Help](https://support.google.com/webmasters) - Troubleshooting guides
- [Schema.org](https://schema.org/) - Structured data documentation
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo) - Next.js-specific SEO tips

### Testing Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results) - Validate structured data
- [PageSpeed Insights](https://pagespeed.web.dev/) - Core Web Vitals analysis
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Mobile usability
- [Schema Markup Validator](https://validator.schema.org/) - JSON-LD validation
- [OpenGraph Debugger](https://www.opengraph.xyz/) - Social sharing preview

### Monitoring & Analytics
- [Google Analytics 4](https://analytics.google.com/) - User behavior tracking
- [Google Tag Manager](https://tagmanager.google.com/) - Tag management
- [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) - Free SEO analysis
- [Bing Webmaster Tools](https://www.bing.com/webmasters) - Bing indexing

---

## 🎯 Quick Start Timeline

### Week 1: Setup & Submission
- [ ] Day 1: Verify Google Search Console
- [ ] Day 1: Submit sitemap.xml
- [ ] Day 1: Request indexing for homepage
- [ ] Day 2-3: Request indexing for key pages (Services, About, Contact)
- [ ] Day 5-7: Check for first pages appearing in Coverage report

### Week 2-4: Monitor & Optimize
- [ ] Week 2: Review Coverage report for errors
- [ ] Week 2: Fix any mobile usability issues
- [ ] Week 3: Monitor impressions in Performance report
- [ ] Week 3: Optimize pages with low CTR
- [ ] Week 4: Build initial backlinks (social profiles, directories)

### Month 2+: Growth & Maintenance
- [ ] Review Core Web Vitals monthly
- [ ] Update sitemap when adding new pages
- [ ] Monitor search queries and optimize for high-impression, low-CTR terms
- [ ] Create new content targeting valuable keywords
- [ ] Build quality backlinks through content marketing

---

## 💡 Pro Tips

1. **Be patient**: New domains can take 4-8 weeks for full indexing
2. **Quality over quantity**: One excellent page beats ten mediocre ones
3. **Update regularly**: Fresh content signals to Google your site is active
4. **Fix errors immediately**: Any error in Coverage report should be addressed ASAP
5. **Mobile-first**: Google indexes mobile version first, ensure it's perfect
6. **Schema markup**: Properly implemented structured data can lead to rich results
7. **Page speed matters**: Faster sites get crawled more frequently
8. **Internal linking**: Help Google discover pages through internal links
9. **Avoid duplicate content**: Each page should have unique, valuable content
10. **Track everything**: Use Google Analytics alongside Search Console

---

## 📝 Notes

- Save your verification code in a secure location (e.g., password manager)
- Set up email notifications in Google Search Console for critical issues
- Review Search Console weekly during first 2 months, then monthly
- Consider hiring an SEO expert if struggling to get indexed after 8 weeks

---

**Last Updated**: 2024
**Next Review**: After initial indexing (approximately 4-6 weeks)

---

## ❓ Need Help?

If you encounter persistent indexing issues:
1. Review [Google Search Central Help](https://support.google.com/webmasters)
2. Ask in [Google Search Central Community](https://support.google.com/webmasters/community)
3. Check your specific error in the Coverage report for detailed guidance
4. Consider professional SEO consultation for complex issues

**Good luck with your indexing! 🚀**
