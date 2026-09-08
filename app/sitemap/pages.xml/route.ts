const URL = process.env.NEXT_PUBLIC_APP_URL || ''
const lastMod = new Date().toISOString()

function generateSiteMap(): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${URL}</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/about-us</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/services</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/services/service-details</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/project</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/project/project-details</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/blog</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/blog/blog-two</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/blog/blog-details</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/contact</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/faqs</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/privacy-policy</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/cookie-policy</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/terms-conditions</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/not-found</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    </urlset>`
}

export function GET(): Response {
    const body = generateSiteMap()

    return new Response(body, {
        status: 200,
        headers: {
            'content-type': 'application/xml',
        },
    })
}
