const helper = {
    openGraphData: {
        title: 'Cryzion',
        description:
            'Modern corporate template crafted for startups, IT componies, and tech innovators. Fast, responsive, and built with cutting-edge design principles.',
        siteName: 'Cryzion',
        type: 'website',
        images: [{ url: `${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png` }],
    },
    getOrganizationJsonString: () => {
        return `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cryzion",
            "url": "${process.env.NEXT_PUBLIC_APP_URL}",
            "logo": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png"
            }`
    },
}
export default helper
