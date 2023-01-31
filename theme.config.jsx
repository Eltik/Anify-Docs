export default {
    gitTimestamp: false,
    useNextSeoProps: () => {
        return { titleTemplate: `%s - Anify` };
    },
    faviconGlyph: "🚧",
    banner: {
        text: "🚧 The Anify documentation is undergoing reconstruction. Please be patient for all providers to be fully-documented. 🚧",
    },
    logo: <span>Anify Documentation</span>,
    project: {
        link: "https://github.com/Eltik/Anify-API",
    },
    chat: {
        link: "https://anify.tv/discord",
    },
    docsRepositoryBase: "https://github.com/Eltik/Anify-Docs",
    footer: {
        text: "Copyright (c) Anify | 2023-present",
    },
    primaryHue: 344,
    head: function useHead() {
        const description =
        "Documentation and routes for Anify API.";
        return (
        <>
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" content={description} />
            <meta name="og:description" content={description} />
        </>
        );
    },
}