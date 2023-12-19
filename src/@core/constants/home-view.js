import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'The One-Stop App for all Your Martial Arts Needs',
    subHeading: 'Looking for a facility, trainer and equipment suited to your style?',
    text: 'MartialMentor Hub is a one of a kind platform for people who practice martial arts. You will find everything from a place to train near you, to certified guidance in the palm of your hands. It does not matter what belt you don, or if you are thinking of beginning, the app has all the solutions for you.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'The First Platform that Fulfills All Your Martial Arts Needs. ',
    features: [
        {
            title: 'Browse Directory',
            description: 'Find gyms and martial arts specialists near you and according to your preferred style.',
            icon: 'branching'
        },
        {
            title: 'Make a Profile',
            description: 'Detail your physique and martial arts style in your profile. ',
            icon: 'karate-student'
        },
        {
            title: 'Find Items',
            description: 'Buy equipment and apparel from the MartialMentor Hub e-commerce store. ',
            icon: 'karate-uniform'
        },
        {
            title: 'Nutrition Guide',
            description: 'Find tips and resources on the right nutrition for you. ',
            icon: 'nutrition-guide'
        },
    ]
}

export const brandSelectionContent = {
    heading: 'Why Choose MartialMentor Hub',
    descriptions: [
        'MartialMentor Hub is the revolutionary app that places all your martial arts solutions in one place. The mobile application helps users find training spaces near them that are fully facilitated and have the right professionals who can help them reach their goals.',
        'With the app you receive access to the MartialMentor Hub coveted directory of certified professionals, as well as a retail outlet that will deliver your items to your doorstep. Keeping in tune with the information on your profile, MartialMentor Hub builds a nutrition plan and recommendations just for you.',
    ],
}

export const benefitsContent = {
    heading: 'How MartialMentor Hub Goes Beyond your Average App',
    text: 'Designed to cater to each individual and the martial art they practice, MartialMentor Hub has a plethora of technical features, but it takes a step ahead and offers advantages that will allow users to amalgamate the app into their lifestyle.',
    benefits: [
        {
            title: 'Track',
            description: 'Users can sync MartialMentor Hub with their fitness gadget and track their progress against their goals.',
            icon: 'processes'
        },
        {
            title: 'Compete',
            description: 'Profiles help you research your competitors, and what you are up against.',
            icon: 'ranks'
        },
        {
            title: 'Match',
            description: 'With users uploading accurate information on their profiles, MartialMentor Hub can match them with the most suitable training space.',
            icon: 'online-match'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is MartialMentor Hub Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Ready to Start Training Right?',
    text: 'Download the MartialMentor Hub app'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'twitter1',
            link: '',
        },
        {
            icon: 'facebook1',
            link: '',
        },
        {
            icon: 'instagram1',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}?`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: 'Why MartialMentor Hub?', sectionId: 'whyUs' }
]
