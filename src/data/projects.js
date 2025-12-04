export const techConfig = {
    html: { icon: 'fab fa-html5', class: 'html' },
    css: { icon: 'fab fa-css3-alt', class: 'css' },
    js: { icon: 'fab fa-js-square', class: 'js' },
    csharp: { icon: 'fas fa-code', class: 'csharp' },
    aspnet: { icon: 'fas fa-server', class: 'aspnet' },
    react: { icon: 'fab fa-react', class: 'react' }
}

export const projects = [
    {
        className: "joshuaenlyke",
        title: "Lyke & Joshua",
        description: "Wedding website",
        url: "https://joshuaenlyke.info/",
        tech: [
            techConfig.html,
            techConfig.css,
            techConfig.js
        ],
        backgroundUrl: "src/assets/joshuaenlyke.png"
    },
    {
        className: "codepen",
        title: "CSS Loading Animations",
        description: "Collection of modern CSS loading animations and spinners",
        url: "https://codepen.io/Jordi-Dijkstra/full/LEPRrEq",
        tech: [
            techConfig.html,
            techConfig.css
        ],
        backgroundUrl: "src/assets/cssLoadingAnimations.png"
    },
    {
        className: "rideready",
        title: "RideReady",
        description: "Work in progress - Website that gives cycling clothing advice based on the weather",
        url: "https://github.com/jordidijkstra/RideReady",
        tech: [
            techConfig.html,
            techConfig.css,
            techConfig.csharp,
            techConfig.aspnet
        ],
        backgroundUrl: "src/assets/RideReady.png"
    }
]