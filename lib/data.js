// Ministry/Group data for the church
export const departments = [
    {
        id: 'choir',
        slug: 'choir',
        name: 'Choir Department',
        shortName: 'Choir',
        icon: 'Music',
        description: 'Leading worship through song, ushering God\'s presence into every service with melodious praise.',
        purpose: 'To create an atmosphere of worship where hearts are lifted and God\'s presence is made manifest through music.',
        activities: [
            'Sunday worship leading',
            'Special song ministrations',
            'Weekly rehearsals',
            'Music workshops and training',
            'Choir concerts and productions'
        ],
        meetingTime: 'Saturdays at 4:00 PM'
    },
    {
        id: 'ushering',
        slug: 'ushering',
        name: 'Ushering Department',
        shortName: 'Ushering',
        icon: 'Users',
        description: 'Ensuring orderly, welcoming services where every member and guest feels valued and attended to.',
        purpose: 'To maintain orderliness during services and create a warm, organized environment for worship.',
        activities: [
            'Welcoming worshippers',
            'Seating coordination',
            'Service flow management',
            'Offering collection',
            'Emergency response coordination'
        ],
        meetingTime: 'Sundays at 7:00 AM'
    },
    {
        id: 'protocol',
        slug: 'protocol',
        name: 'Protocol Department',
        shortName: 'Protocol',
        icon: 'Shield',
        description: 'Coordinating VIP hosting, church events, and ensuring excellence in all official functions.',
        purpose: 'To ensure all official church functions are handled with excellence, professionalism, and warmth.',
        activities: [
            'VIP guest coordination',
            'Event planning and execution',
            'Official ceremony coordination',
            'Guest relations management',
            'Service protocol training'
        ],
        meetingTime: 'First Saturday of every month'
    },
    {
        id: 'welcome-team',
        slug: 'welcome-team',
        name: 'Welcoming Team',
        shortName: 'Welcome',
        icon: 'Heart',
        description: 'Making first-time guests feel at home with warm smiles and genuine hospitality.',
        purpose: 'To ensure every person who walks through our doors experiences the love of Christ through our warm reception.',
        activities: [
            'First-time guest reception',
            'New member orientation',
            'Follow-up visits',
            'Welcome packages distribution',
            'Integration support'
        ],
        meetingTime: 'Sundays at 7:00 AM'
    },
    {
        id: 'youth',
        slug: 'youth',
        name: 'Youth Department (Daniel Generation)',
        shortName: 'Youth',
        icon: 'Zap',
        description: 'Empowering young people to live boldly for Christ, making impact in their generation.',
        purpose: 'To raise a generation of young believers who are rooted in faith, equipped for leadership, and passionate about God.',
        activities: [
            'Youth fellowship meetings',
            'Bible study sessions',
            'Youth outreach programs',
            'Leadership development',
            'Youth-led services',
            'Mentorship programs'
        ],
        meetingTime: 'Every 2nd Friday of the month'
    },
    {
        id: 'programme-affairs',
        slug: 'programme-affairs',
        name: 'Directorate of Programme Affairs',
        shortName: 'Programme',
        icon: 'Calendar',
        description: 'Planning and executing all church programs with excellence and attention to detail.',
        purpose: 'To coordinate, plan, and ensure the seamless execution of all church programs and events.',
        activities: [
            'Program planning and design',
            'Event coordination',
            'Resource allocation',
            'Volunteer coordination',
            'Post-event evaluation'
        ],
        meetingTime: 'Wednesdays at 6:00 PM'
    },
    {
        id: 'youth-choir',
        slug: 'youth-choir',
        name: 'Youth Choir',
        shortName: 'Youth Choir',
        icon: 'Mic',
        description: 'Young voices raised in worship, ministering in song with youthful energy and passion.',
        purpose: 'To provide a platform for young people to express their worship through music and develop their musical gifts.',
        activities: [
            'Youth service worship leading',
            'Special musical performances',
            'Weekly rehearsals',
            'Music mentorship',
            'Youth concerts'
        ],
        meetingTime: 'Saturdays at 2:00 PM'
    },
    {
        id: 'drama-team',
        slug: 'drama-team',
        name: 'Drama Team',
        shortName: 'Drama',
        icon: 'Theater',
        description: 'Telling powerful stories through creative arts, bringing biblical truths to life on stage.',
        purpose: 'To communicate the Gospel message through dramatic arts, making the Word of God relatable and impactful.',
        activities: [
            'Drama productions',
            'Skits and short plays',
            'Acting workshops',
            'Script writing',
            'Stage productions'
        ],
        meetingTime: 'Fridays at 5:00 PM'
    },
    {
        id: 'youth-protocol',
        slug: 'youth-protocol',
        name: 'Youth Protocol Team',
        shortName: 'Youth Protocol',
        icon: 'Award',
        description: 'Young leaders serving with excellence in protocol duties, learning professionalism and service.',
        purpose: 'To train young people in the art of protocol service while they learn leadership and excellence.',
        activities: [
            'Youth event coordination',
            'Guest relations at youth programs',
            'Protocol training sessions',
            'Leadership development',
            'Service excellence training'
        ],
        meetingTime: 'First Saturday of every month'
    },
    {
        id: 'evangelism',
        slug: 'evangelism',
        name: 'Evangelism Team',
        shortName: 'Evangelism',
        icon: 'Globe',
        description: 'Reaching souls and sharing the Gospel, fulfilling the Great Commission in our community.',
        purpose: 'To spread the love of Christ and the message of salvation to those who have not yet heard the Good News.',
        activities: [
            'Street evangelism',
            'Door-to-door outreach',
            'Community service projects',
            'Gospel crusades',
            'One-on-one discipleship',
            'Follow-up and integration'
        ],
        meetingTime: 'Saturdays at 8:00 AM'
    }
];

export const serviceTimes = [
    {
        id: 'digging-deep',
        day: 'Tuesday',
        service: 'Digging Deep',
        time: '5:30 PM – 6:30 PM',
        description: 'An enriching Bible study session where we dig deeper into God\'s Word.',
        icon: 'BookOpen'
    },
    {
        id: 'faith-clinic',
        day: 'Thursday',
        service: 'Faith Clinic',
        time: '5:30 PM – 6:30 PM',
        description: 'A powerful service of healing, deliverance, and faith building.',
        icon: 'Heart'
    },
    {
        id: 'sunday-school',
        day: 'Sunday',
        service: 'Sunday School',
        time: '7:30 AM',
        description: 'Interactive Bible teaching for all ages before the main service.',
        icon: 'GraduationCap'
    },
    {
        id: 'sunday-service',
        day: 'Sunday',
        service: 'Celebration Service',
        time: '9:00 AM – 11:30 AM',
        description: 'Our main weekly gathering for worship, Word, and fellowship.',
        icon: 'Sun'
    },
    {
        id: 'course-over',
        day: 'Monthly',
        service: 'Course Over (Online Vigil)',
        time: 'Last day of month, 11:00 PM',
        description: 'Monthly online vigil to cross over into the new month with prayers and worship.',
        icon: 'Moon'
    },
    {
        id: 'youth-fellowship',
        day: '2nd Friday',
        service: 'Youth Fellowship',
        time: 'Daniel Generation',
        description: 'Special gathering for the youth to fellowship, learn, and grow together.',
        icon: 'Zap'
    }
];

export const testimonies = [
    {
        id: 1,
        name: 'Sister Grace',
        testimony: 'I came to Covenant Chapel broken and hopeless. But through the love of this community and the power of God\'s Word, my life has been completely transformed. I am now walking in victory!',
        image: null
    },
    {
        id: 2,
        name: 'Brother Emmanuel',
        testimony: 'The Digging Deep Bible study sessions have revolutionized my understanding of Scripture. I\'ve grown deeper in faith and closer to God than ever before.',
        image: null
    },
    {
        id: 3,
        name: 'Sister Blessing',
        testimony: 'Joining the choir department was the best decision I made. Not only am I using my gift for God, but I\'ve also found a family that loves and supports me unconditionally.',
        image: null
    }
];
