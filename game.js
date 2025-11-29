// Historic Campaign Trail - Game Engine

// ==================== ELECTION SCENARIOS ====================

const scenarios = {
    2000: {
        year: 2000,
        title: "2000 Presidential Election",
        description: "Bush vs. Gore - A razor-thin election decided by hanging chads",
        candidates: {
            democrat: {
                name: "Al Gore",
                party: "Democrat",
                info: "Vice President, Tennessee Senator",
                color: "#3182ce"
            },
            republican: {
                name: "George W. Bush",
                party: "Republican",
                info: "Governor of Texas",
                color: "#e53e3e"
            }
        },
        // State polling: positive = Dem lead, negative = Rep lead
        // Based on approximate 2000 pre-election polling/leanings
        states: {
            "Alabama": { ev: 9, margin: -15 },
            "Alaska": { ev: 3, margin: -12 },
            "Arizona": { ev: 8, margin: -6 },
            "Arkansas": { ev: 6, margin: -5 },
            "California": { ev: 54, margin: 10 },
            "Colorado": { ev: 8, margin: -6 },
            "Connecticut": { ev: 8, margin: 12 },
            "Delaware": { ev: 3, margin: 10 },
            "District of Columbia": { ev: 3, margin: 75 },
            "Florida": { ev: 25, margin: 0 },
            "Georgia": { ev: 13, margin: -8 },
            "Hawaii": { ev: 4, margin: 15 },
            "Idaho": { ev: 4, margin: -30 },
            "Illinois": { ev: 22, margin: 10 },
            "Indiana": { ev: 12, margin: -15 },
            "Iowa": { ev: 7, margin: 2 },
            "Kansas": { ev: 6, margin: -18 },
            "Kentucky": { ev: 8, margin: -10 },
            "Louisiana": { ev: 9, margin: -5 },
            "Maine": { ev: 4, margin: 6 },
            "Maryland": { ev: 10, margin: 14 },
            "Massachusetts": { ev: 12, margin: 25 },
            "Michigan": { ev: 18, margin: 4 },
            "Minnesota": { ev: 10, margin: 5 },
            "Mississippi": { ev: 7, margin: -12 },
            "Missouri": { ev: 11, margin: -2 },
            "Montana": { ev: 3, margin: -20 },
            "Nebraska": { ev: 5, margin: -25 },
            "Nevada": { ev: 4, margin: -2 },
            "New Hampshire": { ev: 4, margin: 1 },
            "New Jersey": { ev: 15, margin: 12 },
            "New Mexico": { ev: 5, margin: 1 },
            "New York": { ev: 33, margin: 20 },
            "North Carolina": { ev: 14, margin: -8 },
            "North Dakota": { ev: 3, margin: -22 },
            "Ohio": { ev: 21, margin: -2 },
            "Oklahoma": { ev: 8, margin: -25 },
            "Oregon": { ev: 7, margin: 3 },
            "Pennsylvania": { ev: 23, margin: 4 },
            "Rhode Island": { ev: 4, margin: 25 },
            "South Carolina": { ev: 8, margin: -12 },
            "South Dakota": { ev: 3, margin: -18 },
            "Tennessee": { ev: 11, margin: -3 },
            "Texas": { ev: 32, margin: -18 },
            "Utah": { ev: 5, margin: -35 },
            "Vermont": { ev: 3, margin: 8 },
            "Virginia": { ev: 13, margin: -6 },
            "Washington": { ev: 11, margin: 6 },
            "West Virginia": { ev: 5, margin: -4 },
            "Wisconsin": { ev: 11, margin: 2 },
            "Wyoming": { ev: 3, margin: -35 }
        },
        questions: [
            {
                id: 1,
                topic: "Economy",
                text: "The federal government is running a budget surplus for the first time in decades. What should be done with this surplus?",
                answers: [
                    {
                        text: "Use the surplus to pay down the national debt and shore up Social Security and Medicare for future generations.",
                        effects: { national: 1, regions: { northeast: 2, midwest: 1 } }
                    },
                    {
                        text: "Return the surplus to taxpayers through broad-based tax cuts. It's their money, not the government's.",
                        effects: { national: -1, regions: { south: 2, mountain: 2 } }
                    },
                    {
                        text: "Invest the surplus in education, healthcare, and infrastructure to build a stronger economy.",
                        effects: { national: 2, regions: { pacific: 2, northeast: 1 } }
                    },
                    {
                        text: "Split the difference - some tax relief, some debt reduction, and targeted investments.",
                        effects: { national: 0, regions: { midwest: 1 } }
                    }
                ]
            },
            {
                id: 2,
                topic: "Social Security",
                text: "Social Security faces long-term funding challenges. How should we address this?",
                answers: [
                    {
                        text: "Put Social Security in a 'lockbox' - protect the trust fund from being raided for other spending.",
                        effects: { national: 2, regions: { florida: 3, northeast: 1 } }
                    },
                    {
                        text: "Allow younger workers to invest part of their payroll taxes in personal retirement accounts in the stock market.",
                        effects: { national: -1, regions: { south: 1, mountain: 2 } }
                    },
                    {
                        text: "Gradually raise the retirement age and adjust benefits to ensure long-term solvency.",
                        effects: { national: -1, regions: { florida: -3 } }
                    },
                    {
                        text: "Increase the payroll tax cap so higher earners contribute more to the system.",
                        effects: { national: 1, regions: { pacific: 2, northeast: 2 } }
                    }
                ]
            },
            {
                id: 3,
                topic: "Education",
                text: "How should the federal government approach education reform?",
                answers: [
                    {
                        text: "Increase federal funding for public schools, reduce class sizes, and hire more teachers.",
                        effects: { national: 2, regions: { northeast: 2, pacific: 2 } }
                    },
                    {
                        text: "Implement accountability measures with standardized testing and consequences for failing schools.",
                        effects: { national: 0, regions: { south: 1, midwest: 1 } }
                    },
                    {
                        text: "Expand school choice through vouchers so parents can send children to private or religious schools.",
                        effects: { national: -2, regions: { south: 3, mountain: 2 } }
                    },
                    {
                        text: "Focus on universal pre-K and making college more affordable through tax credits.",
                        effects: { national: 1, regions: { midwest: 1, pacific: 1 } }
                    }
                ]
            },
            {
                id: 4,
                topic: "Environment",
                text: "The Kyoto Protocol aims to reduce greenhouse gas emissions. Should the US participate?",
                answers: [
                    {
                        text: "Yes, climate change is a serious threat and America must lead the global effort to address it.",
                        effects: { national: 2, regions: { pacific: 4, northeast: 3 } }
                    },
                    {
                        text: "The treaty is flawed because it exempts developing nations like China and India, hurting American competitiveness.",
                        effects: { national: -1, regions: { midwest: 2, south: 1 } }
                    },
                    {
                        text: "We should pursue voluntary emissions reductions and invest in clean technology rather than binding mandates.",
                        effects: { national: 0, regions: { mountain: 1 } }
                    },
                    {
                        text: "Climate change concerns are overblown. We shouldn't sacrifice economic growth for unproven science.",
                        effects: { national: -3, regions: { south: 2, mountain: 2 } }
                    }
                ]
            },
            {
                id: 5,
                topic: "Healthcare",
                text: "Millions of Americans lack health insurance. What's your approach to healthcare?",
                answers: [
                    {
                        text: "Expand coverage through a new program for the uninsured, funded by the surplus.",
                        effects: { national: 2, regions: { northeast: 2, pacific: 2 } }
                    },
                    {
                        text: "Provide tax credits to help families purchase private health insurance.",
                        effects: { national: -1, regions: { south: 1, mountain: 1 } }
                    },
                    {
                        text: "Allow patients to sue HMOs when they're denied coverage and create a patients' bill of rights.",
                        effects: { national: 1, regions: { midwest: 2, florida: 2 } }
                    },
                    {
                        text: "Focus on reducing healthcare costs through market-based reforms and reducing regulations.",
                        effects: { national: -1, regions: { mountain: 2 } }
                    }
                ]
            },
            {
                id: 6,
                topic: "Gun Control",
                text: "Following incidents of gun violence, what gun policies would you support?",
                answers: [
                    {
                        text: "Require background checks at gun shows, support trigger locks, and ban assault weapons.",
                        effects: { national: 1, regions: { northeast: 3, pacific: 3 } }
                    },
                    {
                        text: "Enforce existing gun laws more strictly rather than creating new restrictions on law-abiding citizens.",
                        effects: { national: -1, regions: { south: 3, mountain: 3, midwest: 1 } }
                    },
                    {
                        text: "Focus on the root causes of violence - mental health, family breakdown, and media influence.",
                        effects: { national: 0, regions: { midwest: 1 } }
                    },
                    {
                        text: "The Second Amendment is clear - any gun restrictions are unconstitutional infringements.",
                        effects: { national: -2, regions: { south: 2, mountain: 3 } }
                    }
                ]
            },
            {
                id: 7,
                topic: "Foreign Policy",
                text: "How should America approach its role in the world?",
                answers: [
                    {
                        text: "Continue engagement and nation-building efforts. America must be a force for democracy worldwide.",
                        effects: { national: 1, regions: { northeast: 1, pacific: 1 } }
                    },
                    {
                        text: "Pursue a more humble foreign policy. We shouldn't be the world's policeman.",
                        effects: { national: -1, regions: { midwest: 2, mountain: 1 } }
                    },
                    {
                        text: "Strengthen our military and be prepared to act unilaterally when American interests are at stake.",
                        effects: { national: 0, regions: { south: 2 } }
                    },
                    {
                        text: "Focus on diplomatic solutions and working through international institutions like the UN.",
                        effects: { national: 1, regions: { pacific: 2, northeast: 1 } }
                    }
                ]
            },
            {
                id: 8,
                topic: "Abortion",
                text: "What is your position on abortion?",
                answers: [
                    {
                        text: "Abortion should remain safe, legal, and rare. Protect Roe v. Wade.",
                        effects: { national: 1, regions: { northeast: 3, pacific: 3 } }
                    },
                    {
                        text: "I'm pro-life and believe we should work to change hearts and minds while respecting the law.",
                        effects: { national: -1, regions: { south: 3, midwest: 1 } }
                    },
                    {
                        text: "This should be left to the states to decide, not the federal government.",
                        effects: { national: 0, regions: { mountain: 2 } }
                    },
                    {
                        text: "Support restrictions like parental notification and banning partial-birth abortion.",
                        effects: { national: -1, regions: { south: 2, midwest: 2 } }
                    }
                ]
            },
            {
                id: 9,
                topic: "Trade",
                text: "NAFTA has been in effect for several years. What's your view on free trade?",
                answers: [
                    {
                        text: "Free trade benefits everyone, but we need strong labor and environmental standards in trade deals.",
                        effects: { national: 1, regions: { pacific: 2, northeast: 1 } }
                    },
                    {
                        text: "Free trade creates jobs and prosperity. We should expand trade agreements worldwide.",
                        effects: { national: 0, regions: { south: 1 } }
                    },
                    {
                        text: "NAFTA has cost American jobs. We need to renegotiate or withdraw from unfair trade deals.",
                        effects: { national: 0, regions: { midwest: 3, rust_belt: 3 } }
                    },
                    {
                        text: "Trade policy should prioritize American workers first, with tariffs to protect key industries.",
                        effects: { national: -1, regions: { midwest: 2 } }
                    }
                ]
            },
            {
                id: 10,
                topic: "Campaign Finance",
                text: "There's growing concern about money in politics. What reforms would you support?",
                answers: [
                    {
                        text: "Ban soft money donations to political parties and restrict issue advocacy ads before elections.",
                        effects: { national: 2, regions: { northeast: 2, pacific: 1 } }
                    },
                    {
                        text: "Political donations are free speech. Focus on disclosure rather than restrictions.",
                        effects: { national: -1, regions: { mountain: 1 } }
                    },
                    {
                        text: "Support public financing of elections to reduce the influence of wealthy donors.",
                        effects: { national: 1, regions: { pacific: 2 } }
                    },
                    {
                        text: "The current system works fine. Reform efforts often have unintended consequences.",
                        effects: { national: -1, regions: { south: 1 } }
                    }
                ]
            },
            {
                id: 11,
                topic: "Death Penalty",
                text: "Several states have paused executions amid concerns about wrongful convictions. Your view?",
                answers: [
                    {
                        text: "Support a moratorium until we can ensure no innocent person is executed.",
                        effects: { national: 1, regions: { northeast: 3, pacific: 2 } }
                    },
                    {
                        text: "The death penalty is appropriate for the most heinous crimes and deters violence.",
                        effects: { national: -1, regions: { south: 3, mountain: 1 } }
                    },
                    {
                        text: "Improve the appeals process and ensure DNA testing, but keep the death penalty.",
                        effects: { national: 0, regions: { midwest: 1 } }
                    },
                    {
                        text: "This should be left entirely to the states to decide.",
                        effects: { national: 0, regions: { south: 1, mountain: 1 } }
                    }
                ]
            },
            {
                id: 12,
                topic: "Energy",
                text: "Gas prices have been rising. What's your energy policy?",
                answers: [
                    {
                        text: "Invest in renewable energy and conservation. Reduce our dependence on foreign oil.",
                        effects: { national: 2, regions: { pacific: 3, northeast: 2 } }
                    },
                    {
                        text: "Expand domestic drilling, including in Alaska's ANWR, to increase supply.",
                        effects: { national: -2, regions: { south: 2, mountain: 2 } }
                    },
                    {
                        text: "An all-of-the-above approach - more drilling AND more renewables.",
                        effects: { national: 0, regions: { midwest: 1 } }
                    },
                    {
                        text: "Reduce regulations on refineries and let the market determine energy prices.",
                        effects: { national: -1, regions: { south: 1, mountain: 1 } }
                    }
                ]
            },
            {
                id: 13,
                topic: "Immigration",
                text: "How should we approach immigration policy?",
                answers: [
                    {
                        text: "Create a path to citizenship for undocumented immigrants who work hard and pay taxes.",
                        effects: { national: 1, regions: { pacific: 3, northeast: 1 } }
                    },
                    {
                        text: "Secure the border first, then consider reforms for those already here.",
                        effects: { national: -1, regions: { south: 2, mountain: 2 } }
                    },
                    {
                        text: "Expand legal immigration and guest worker programs to meet economic needs.",
                        effects: { national: 0, regions: { southwest: 1 } }
                    },
                    {
                        text: "Enforce existing laws and deport those who came illegally. No amnesty.",
                        effects: { national: -2, regions: { south: 2 } }
                    }
                ]
            },
            {
                id: 14,
                topic: "Military",
                text: "What are your priorities for the U.S. military?",
                answers: [
                    {
                        text: "Maintain our current strength but focus on peacekeeping and humanitarian missions.",
                        effects: { national: 1, regions: { northeast: 2, pacific: 1 } }
                    },
                    {
                        text: "Increase military pay and modernize our forces with new technology.",
                        effects: { national: 0, regions: { south: 2, virginia: 2 } }
                    },
                    {
                        text: "Develop missile defense to protect America from rogue states.",
                        effects: { national: -1, regions: { mountain: 1, south: 1 } }
                    },
                    {
                        text: "Reduce military spending and reinvest in domestic priorities.",
                        effects: { national: 1, regions: { pacific: 2 } }
                    }
                ]
            },
            {
                id: 15,
                topic: "Prescription Drugs",
                text: "Seniors struggle to afford prescription medications. What's your solution?",
                answers: [
                    {
                        text: "Add a prescription drug benefit to Medicare to help seniors afford medications.",
                        effects: { national: 2, regions: { florida: 4, northeast: 2 } }
                    },
                    {
                        text: "Provide tax-free savings accounts for medical expenses and drug costs.",
                        effects: { national: -1, regions: { mountain: 1 } }
                    },
                    {
                        text: "Allow importation of cheaper drugs from Canada.",
                        effects: { national: 1, regions: { midwest: 2, florida: 2 } }
                    },
                    {
                        text: "The market will bring down prices. Government intervention will stifle innovation.",
                        effects: { national: -2, regions: { south: 1 } }
                    }
                ]
            },
            {
                id: 16,
                topic: "Tobacco",
                text: "The tobacco industry faces lawsuits and regulation. What's your position?",
                answers: [
                    {
                        text: "Support FDA regulation of tobacco and use settlement money for anti-smoking programs.",
                        effects: { national: 1, regions: { northeast: 2, pacific: 2 } }
                    },
                    {
                        text: "People make their own choices. Government shouldn't regulate legal products.",
                        effects: { national: -1, regions: { south: 3, kentucky: 3 } }
                    },
                    {
                        text: "Focus on preventing youth smoking while respecting adult choices.",
                        effects: { national: 0, regions: { midwest: 1 } }
                    },
                    {
                        text: "The tobacco companies should pay for the healthcare costs they've caused.",
                        effects: { national: 1, regions: { northeast: 1 } }
                    }
                ]
            },
            {
                id: 17,
                topic: "Affirmative Action",
                text: "How do you view affirmative action policies?",
                answers: [
                    {
                        text: "Affirmative action remains necessary to address ongoing discrimination and ensure diversity.",
                        effects: { national: 1, regions: { pacific: 2, northeast: 2 } }
                    },
                    {
                        text: "Oppose racial preferences. We should be a colorblind society based on merit.",
                        effects: { national: -1, regions: { south: 2, mountain: 2 } }
                    },
                    {
                        text: "Support affirmative action based on economic disadvantage rather than race.",
                        effects: { national: 0, regions: { midwest: 1 } }
                    },
                    {
                        text: "Let universities and employers decide their own policies without government mandates.",
                        effects: { national: -1, regions: { mountain: 1, south: 1 } }
                    }
                ]
            },
            {
                id: 18,
                topic: "Character",
                text: "After the Clinton scandals, how important is personal character in a president?",
                answers: [
                    {
                        text: "Character matters, but policy positions and competence matter more for governing.",
                        effects: { national: 1, regions: { northeast: 1, pacific: 1 } }
                    },
                    {
                        text: "We need to restore honor and dignity to the White House. Character is paramount.",
                        effects: { national: -1, regions: { south: 3, midwest: 2 } }
                    },
                    {
                        text: "Judge candidates by their public service, not their personal lives.",
                        effects: { national: 1, regions: { pacific: 2 } }
                    },
                    {
                        text: "The American people have moved on. Let's focus on the future.",
                        effects: { national: 0, regions: {} }
                    }
                ]
            },
            {
                id: 19,
                topic: "Debates",
                text: "Your opponent challenges you to a series of debates. How do you respond?",
                answers: [
                    {
                        text: "Accept enthusiastically. The American people deserve to see us debate the issues.",
                        effects: { national: 1, regions: { northeast: 1, midwest: 1 } }
                    },
                    {
                        text: "Agree to the standard three presidential debates. No need for more.",
                        effects: { national: 0, regions: {} }
                    },
                    {
                        text: "Debates favor style over substance. Focus on town halls where we meet real voters.",
                        effects: { national: 0, regions: { midwest: 1, south: 1 } }
                    },
                    {
                        text: "Set conditions - demand changes to the format to ensure fairness.",
                        effects: { national: -1, regions: {} }
                    }
                ]
            },
            {
                id: 20,
                topic: "Running Mate",
                text: "How will you describe your running mate's role in the administration?",
                answers: [
                    {
                        text: "My running mate will be a true partner in governing with real responsibilities.",
                        effects: { national: 1, regions: { northeast: 1 } }
                    },
                    {
                        text: "They bring experience and balance to the ticket that complements my strengths.",
                        effects: { national: 0, regions: { midwest: 1 } }
                    },
                    {
                        text: "The Vice President's main job is to be ready if something happens to the President.",
                        effects: { national: 0, regions: {} }
                    },
                    {
                        text: "I chose them because they'll help us win key states in November.",
                        effects: { national: -1, regions: {} }
                    }
                ]
            },
            {
                id: 21,
                topic: "Gay Rights",
                text: "What is your position on gay rights issues?",
                answers: [
                    {
                        text: "Support civil unions and employment non-discrimination, but marriage is between a man and woman.",
                        effects: { national: 0, regions: { pacific: 1, northeast: 1 } }
                    },
                    {
                        text: "Marriage should be defined by states. I oppose federal involvement either way.",
                        effects: { national: 0, regions: { mountain: 1 } }
                    },
                    {
                        text: "Traditional marriage should be protected. I oppose special rights for any group.",
                        effects: { national: -1, regions: { south: 3, midwest: 1 } }
                    },
                    {
                        text: "Full equality including marriage. Love is love.",
                        effects: { national: 1, regions: { pacific: 3, northeast: 2 } }
                    }
                ]
            },
            {
                id: 22,
                topic: "Technology",
                text: "The internet economy is booming. How should government approach the tech sector?",
                answers: [
                    {
                        text: "Invest in broadband infrastructure to ensure all Americans can participate in the digital economy.",
                        effects: { national: 1, regions: { pacific: 2, northeast: 1 } }
                    },
                    {
                        text: "Keep government out of the internet. Let innovation flourish without regulation.",
                        effects: { national: 0, regions: { mountain: 1, south: 1 } }
                    },
                    {
                        text: "Address the digital divide and provide technology education in schools.",
                        effects: { national: 1, regions: { midwest: 1 } }
                    },
                    {
                        text: "We need to be careful about internet privacy and protect consumers online.",
                        effects: { national: 1, regions: { pacific: 1, northeast: 1 } }
                    }
                ]
            },
            {
                id: 23,
                topic: "Florida Campaign",
                text: "Florida is crucial with its 25 electoral votes. What's your closing message there?",
                answers: [
                    {
                        text: "Focus on prescription drug costs and Social Security - issues that matter to Florida's seniors.",
                        effects: { national: 0, regions: { florida: 4 } }
                    },
                    {
                        text: "Emphasize Cuban-American relations and a tough stance on Castro.",
                        effects: { national: 0, regions: { florida: 2 } }
                    },
                    {
                        text: "Talk about growth and jobs - Florida's economy is booming and we'll keep it going.",
                        effects: { national: 0, regions: { florida: 1, south: 1 } }
                    },
                    {
                        text: "Stick to the national message. Florida voters care about the same things as everyone else.",
                        effects: { national: 0, regions: { florida: -1 } }
                    }
                ]
            },
            {
                id: 24,
                topic: "Closing Argument",
                text: "Election Day is approaching. What's your closing argument to undecided voters?",
                answers: [
                    {
                        text: "I have the experience and detailed plans to build on our prosperity and progress.",
                        effects: { national: 2, regions: { northeast: 2, pacific: 1 } }
                    },
                    {
                        text: "It's time for a fresh start and a new generation of leadership in Washington.",
                        effects: { national: -1, regions: { south: 2, mountain: 2 } }
                    },
                    {
                        text: "This election is about who you trust to lead in a crisis and keep America safe.",
                        effects: { national: 0, regions: { midwest: 1 } }
                    },
                    {
                        text: "I'll be a president for all Americans, working across party lines to get things done.",
                        effects: { national: 1, regions: { midwest: 2 } }
                    }
                ]
            },
            {
                id: 25,
                topic: "Final Push",
                text: "It's the final weekend. Where do you spend your time?",
                answers: [
                    {
                        text: "Barnstorm Florida - it could decide the whole election.",
                        effects: { national: 0, regions: { florida: 3 } }
                    },
                    {
                        text: "Focus on the Midwest battlegrounds - Michigan, Wisconsin, and Pennsylvania.",
                        effects: { national: 0, regions: { rust_belt: 3 } }
                    },
                    {
                        text: "Shore up your base in states that should be safe but seem closer than expected.",
                        effects: { national: 1, regions: {} }
                    },
                    {
                        text: "Make a play for a surprise state your opponent has taken for granted.",
                        effects: { national: 0, regions: { mountain: 2, south: 1 } }
                    }
                ]
            }
        ]
    }
};

// ==================== REGION DEFINITIONS ====================

const regions = {
    northeast: ["Connecticut", "Delaware", "Maine", "Maryland", "Massachusetts", "New Hampshire", "New Jersey", "New York", "Pennsylvania", "Rhode Island", "Vermont"],
    south: ["Alabama", "Arkansas", "Georgia", "Kentucky", "Louisiana", "Mississippi", "North Carolina", "South Carolina", "Tennessee", "Texas", "Virginia", "West Virginia"],
    midwest: ["Illinois", "Indiana", "Iowa", "Kansas", "Michigan", "Minnesota", "Missouri", "Nebraska", "North Dakota", "Ohio", "South Dakota", "Wisconsin"],
    mountain: ["Arizona", "Colorado", "Idaho", "Montana", "Nevada", "New Mexico", "Utah", "Wyoming"],
    pacific: ["Alaska", "California", "Hawaii", "Oregon", "Washington"],
    florida: ["Florida"],
    rust_belt: ["Michigan", "Ohio", "Pennsylvania", "Wisconsin"],
    southwest: ["Arizona", "New Mexico", "Nevada"]
};

// ==================== GAME STATE ====================

let gameState = {
    selectedScenario: null,
    selectedCandidate: null,
    currentQuestion: 0,
    statePolling: {},
    questionsAnswered: [],
    loadedQuestions: null,
    currentQuestions: [],
    statesData: null,
    questionContexts: null
};

// Question to issue mapping - which issues each question affects
const questionIssueMapping = {
    // Bush questions
    'bush_q04': ['tax_cuts', 'social_security_medicare'],  // Budget surplus
    'bush_q05': ['education_reform'],  // Education
    'bush_q07': ['gun_control'],  // Gun control
    'bush_q08': ['environment_energy'],  // Environment/Kyoto
    'bush_q12': ['social_security_medicare'],  // Social Security privatization
    'bush_q16': ['social_security_medicare'],  // Prescription drugs/Medicare
    // Gore questions
    'gore_q04': ['tax_cuts'],  // Economic message
    'gore_q05': ['social_security_medicare'],  // Lockbox
    'gore_q06': ['social_security_medicare'],  // Healthcare/HMOs
    'gore_q07': ['gun_control'],  // Gun control
    'gore_q08': ['environment_energy'],  // Environment
};

// Answer position mapping - how each answer choice relates to issues
// Positive = conservative/Republican position, Negative = liberal/Democratic position
const answerPositions = {
    // Bush Q4 (Tax cuts vs spending)
    'bush_q04_A': { tax_cuts: 1, social_security_medicare: 0 },   // Big tax cuts
    'bush_q04_B': { tax_cuts: -1, social_security_medicare: 1 },  // Debt reduction
    'bush_q04_C': { tax_cuts: 0, social_security_medicare: 0 },   // Balanced
    'bush_q04_D': { tax_cuts: -1, social_security_medicare: -1 }, // No tax cuts
    // Bush Q5 (Education)
    'bush_q05_A': { education_reform: 1 },   // Federal accountability
    'bush_q05_B': { education_reform: 1 },   // Strong federal role
    'bush_q05_C': { education_reform: -1 },  // State control
    'bush_q05_D': { education_reform: 0 },   // Moderate
    // Bush Q7 (Gun control)
    'bush_q07_A': { gun_control: -1 },  // Pro-gun rights
    'bush_q07_B': { gun_control: 0 },   // Moderate enforcement
    'bush_q07_C': { gun_control: 1 },   // Support some restrictions
    'bush_q07_D': { gun_control: -1 },  // Avoid issue
    // Bush Q8 (Environment)
    'bush_q08_A': { environment_energy: 1 },   // Pro-environment
    'bush_q08_B': { environment_energy: -1 },  // Pro-energy production
    'bush_q08_C': { environment_energy: 0 },   // Balanced
    'bush_q08_D': { environment_energy: -1 },  // Ignore environment
    // Bush Q12 (Social Security)
    'bush_q12_A': { social_security_medicare: 1 },   // Privatization
    'bush_q12_B': { social_security_medicare: 0 },   // Vague
    'bush_q12_C': { social_security_medicare: -1 },  // Protect current system
    'bush_q12_D': { social_security_medicare: 1 },   // Full privatization
    // Bush Q16 (Prescription drugs)
    'bush_q16_A': { social_security_medicare: -1 },  // Medicare benefit
    'bush_q16_B': { social_security_medicare: 1 },   // Market solutions
    'bush_q16_C': { social_security_medicare: 0 },   // Tax credits
    'bush_q16_D': { social_security_medicare: 0 },   // Vague
    // Gore Q4 (Economic message)
    'gore_q04_A': { tax_cuts: -1 },  // Prosperity narrative
    'gore_q04_B': { tax_cuts: -1 },  // Populist attack
    'gore_q04_C': { tax_cuts: 0 },   // Balanced
    'gore_q04_D': { tax_cuts: 1 },   // Pro-business
    // Gore Q5 (Social Security lockbox)
    'gore_q05_A': { social_security_medicare: -1 },  // Strong lockbox
    'gore_q05_B': { social_security_medicare: -1 },  // Protect benefits
    'gore_q05_C': { social_security_medicare: 0 },   // Flexible
    'gore_q05_D': { social_security_medicare: 1 },   // Consider reform
    // Gore Q6 (Healthcare)
    'gore_q06_A': { social_security_medicare: -1 },  // Strong patients' rights
    'gore_q06_B': { social_security_medicare: -1 },  // Moderate reform
    'gore_q06_C': { social_security_medicare: 0 },   // Ignore
    'gore_q06_D': { social_security_medicare: 1 },   // Market approach
    // Gore Q7 (Gun control)
    'gore_q07_A': { gun_control: 1 },   // Strong gun control
    'gore_q07_B': { gun_control: 0 },   // Moderate
    'gore_q07_C': { gun_control: -1 },  // State issue/avoid
    'gore_q07_D': { gun_control: 1 },   // Bold proposals
    // Gore Q8 (Environment)
    'gore_q08_A': { environment_energy: 1 },   // Strong climate action
    'gore_q08_B': { environment_energy: 0 },   // Moderate
    'gore_q08_C': { environment_energy: -1 },  // Downplay
    'gore_q08_D': { environment_energy: 1 },   // Push hard
};

// ==================== QUESTION LOADING ====================

async function loadQuestionsFromJSON() {
    try {
        const response = await fetch('Questions.json');
        const data = await response.json();
        gameState.loadedQuestions = data;
        return data;
    } catch (error) {
        console.error('Error loading questions:', error);
        return null;
    }
}

async function loadStatesData() {
    try {
        const response = await fetch('States.json');
        const data = await response.json();
        gameState.statesData = data;
        return data;
    } catch (error) {
        console.error('Error loading states data:', error);
        return null;
    }
}

async function loadQuestionContexts() {
    try {
        const response = await fetch('Questions_Contexts.json');
        const data = await response.json();
        gameState.questionContexts = data;
        return data;
    } catch (error) {
        console.error('Error loading question contexts:', error);
        return null;
    }
}

function getQuestionsForCandidate(candidateId) {
    if (!gameState.loadedQuestions) return [];

    const candidate = gameState.loadedQuestions.candidates.find(c => c.id === candidateId);
    return candidate ? candidate.questions : [];
}

// Convert advisor rating to polling effect
function getEffectFromRating(rating, isRepublican) {
    // Base effects: good = helps player, mixed = neutral, bad = hurts player
    let effect = 0;
    switch(rating) {
        case 'good':
            effect = 2 + Math.random(); // +2 to +3
            break;
        case 'mixed':
            effect = -0.5 + Math.random(); // -0.5 to +0.5
            break;
        case 'bad':
            effect = -2 - Math.random(); // -2 to -3
            break;
    }

    // If Republican, positive effect means less Dem margin (more negative)
    // If Democrat, positive effect means more Dem margin (more positive)
    return isRepublican ? -effect : effect;
}

// ==================== GAME INITIALIZATION ====================

function initGame() {
    // Default to 2000 scenario
    gameState.selectedScenario = scenarios[2000];
    renderCandidates();
    setupEventListeners();
}

function renderCandidates() {
    const container = document.getElementById('candidate-list');
    const scenario = gameState.selectedScenario;

    container.innerHTML = `
        <div class="candidate-card democrat" data-party="democrat">
            <h4>${scenario.candidates.democrat.name}</h4>
            <p class="party">${scenario.candidates.democrat.party}</p>
            <p class="info">${scenario.candidates.democrat.info}</p>
        </div>
        <div class="candidate-card republican" data-party="republican">
            <h4>${scenario.candidates.republican.name}</h4>
            <p class="party">${scenario.candidates.republican.party}</p>
            <p class="info">${scenario.candidates.republican.info}</p>
        </div>
    `;
}

function setupEventListeners() {
    // Candidate selection
    document.getElementById('candidate-list').addEventListener('click', (e) => {
        const card = e.target.closest('.candidate-card');
        if (card) {
            document.querySelectorAll('.candidate-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            gameState.selectedCandidate = card.dataset.party;
            document.getElementById('start-btn').disabled = false;
        }
    });

    // Start button
    document.getElementById('start-btn').addEventListener('click', startGame);
}

async function startGame() {
    // Initialize state polling from scenario
    gameState.statePolling = JSON.parse(JSON.stringify(gameState.selectedScenario.states));
    gameState.currentQuestion = 0;
    gameState.questionsAnswered = [];

    // Load all data files in parallel
    await Promise.all([
        gameState.loadedQuestions ? Promise.resolve() : loadQuestionsFromJSON(),
        gameState.statesData ? Promise.resolve() : loadStatesData(),
        gameState.questionContexts ? Promise.resolve() : loadQuestionContexts()
    ]);

    // Get questions for selected candidate
    const candidateId = gameState.selectedCandidate === 'republican' ? 'bush' : 'gore';
    gameState.currentQuestions = getQuestionsForCandidate(candidateId);

    // Fallback to built-in questions if JSON loading fails
    if (gameState.currentQuestions.length === 0) {
        gameState.currentQuestions = gameState.selectedScenario.questions;
    }

    // Update UI
    showScreen('game-screen');

    const scenario = gameState.selectedScenario;
    const candidateData = scenario.candidates[gameState.selectedCandidate];

    document.getElementById('player-candidate-name').textContent = candidateData.name;
    document.getElementById('player-candidate-party').textContent = `${candidateData.party} Nominee, ${scenario.year}`;

    // Initialize the map
    initializeMap();

    renderStatePolling();
    updateMapColors();
    updateEVCounts();
    loadQuestion();
}

// ==================== QUESTION SYSTEM ====================

function loadQuestion() {
    const questions = gameState.currentQuestions;

    if (gameState.currentQuestion >= questions.length) {
        endGame();
        return;
    }

    const question = questions[gameState.currentQuestion];
    const isJSONFormat = question.prompt !== undefined;

    // Hide advisor feedback from previous question
    hideAdvisorFeedback();

    document.getElementById('q-number').textContent = `Question ${gameState.currentQuestion + 1}`;
    document.getElementById('question-progress').textContent = `${gameState.currentQuestion + 1}/${questions.length}`;

    // Get context for this question if available
    const candidateId = gameState.selectedCandidate === 'republican' ? 'bush' : 'gore';
    let context = '';
    if (gameState.questionContexts && gameState.questionContexts.contexts && gameState.questionContexts.contexts[candidateId]) {
        context = gameState.questionContexts.contexts[candidateId][question.id] || '';
    }

    // Handle both JSON format (prompt/choices) and legacy format (topic/text/answers)
    if (isJSONFormat) {
        document.getElementById('q-topic').textContent = `Question ${question.order || gameState.currentQuestion + 1}`;
        // Combine context with prompt if context exists
        if (context) {
            document.getElementById('q-text').innerHTML = `<div class="question-context">${context}</div><div class="question-prompt">${question.prompt}</div>`;
        } else {
            document.getElementById('q-text').textContent = question.prompt;
        }
    } else {
        document.getElementById('q-topic').textContent = question.topic;
        document.getElementById('q-text').textContent = question.text;
    }

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    const answers = isJSONFormat ? question.choices : question.answers;

    answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(answerIndex) {
    const question = gameState.currentQuestions[gameState.currentQuestion];
    const isJSONFormat = question.prompt !== undefined;
    const answers = isJSONFormat ? question.choices : question.answers;
    const answer = answers[answerIndex];

    const isRepublican = gameState.selectedCandidate === 'republican';

    // Apply effects based on format
    if (isJSONFormat && answer.advisorRating) {
        // Get the answer key for issue lookup (e.g., "bush_q04_A")
        const answerKey = `${question.id}_${answer.id}`;

        // Apply state-specific effects based on issues this question touches
        applyIssueBasedEffects(question.id, answerKey, answer.advisorRating, isRepublican);

        // Show advisor feedback
        showAdvisorFeedback(answer.advisorRating, answer.advisorFeedback);
    } else if (answer.effects) {
        // Legacy format with explicit effects
        applyEffects(answer.effects);
    }

    gameState.questionsAnswered.push({
        questionId: question.id,
        answerIndex: answerIndex
    });

    // For JSON format with feedback, wait before moving to next question
    if (isJSONFormat && answer.advisorFeedback) {
        // Show feedback for 3 seconds, then move to next question
        setTimeout(() => {
            gameState.currentQuestion++;
            renderStatePolling();
            updateMapColors();
            updateEVCounts();
            loadQuestion();
        }, 3000);
    } else {
        gameState.currentQuestion++;
        renderStatePolling();
        updateMapColors();
        updateEVCounts();
        loadQuestion();
    }
}

// Apply effects based on state-specific issue leanings
function applyIssueBasedEffects(questionId, answerKey, advisorRating, isRepublican) {
    // Base effect from advisor rating (reduced for harder gameplay)
    let baseEffect = 0;
    switch(advisorRating) {
        case 'good': baseEffect = 1.0 + Math.random() * 0.5; break;
        case 'mixed': baseEffect = -0.25 + Math.random() * 0.5; break;
        case 'bad': baseEffect = -1.0 - Math.random() * 0.5; break;
    }

    // If Republican, positive effect helps them (decreases Dem margin)
    // If Democrat, positive effect helps them (increases Dem margin)
    if (isRepublican) {
        baseEffect = -baseEffect;
    }

    // Get issues this question affects
    const issues = questionIssueMapping[questionId] || [];
    const answerPosition = answerPositions[answerKey] || {};

    // State abbreviation to full name mapping
    const stateAbbrevToFull = {
        'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas',
        'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware',
        'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho',
        'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas',
        'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
        'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi',
        'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada',
        'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York',
        'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma',
        'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
        'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah',
        'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia',
        'WI': 'Wisconsin', 'WY': 'Wyoming', 'DC': 'District of Columbia'
    };

    // Apply effects to each state
    for (let stateName in gameState.statePolling) {
        let stateEffect = baseEffect;

        // If this question has issue mappings, apply state-specific modifiers
        if (issues.length > 0 && gameState.statesData && gameState.statesData.states) {
            // Find state abbreviation
            const stateAbbrev = Object.keys(stateAbbrevToFull).find(abbr => stateAbbrevToFull[abbr] === stateName);
            const stateIssueData = stateAbbrev ? gameState.statesData.states[stateAbbrev] : null;

            if (stateIssueData) {
                let issueModifier = 0;
                let issueCount = 0;

                for (const issue of issues) {
                    const stateLean = stateIssueData[issue] || 0;  // -1, 0, or 1
                    const answerLean = answerPosition[issue] || 0;  // -1, 0, or 1

                    // If state lean matches answer lean, bonus effect
                    // If they oppose, penalty
                    // stateLean: 1 = conservative, -1 = liberal
                    // answerLean: 1 = conservative, -1 = liberal

                    // Calculate alignment
                    // If both are same sign (or either is 0), they align
                    const alignment = stateLean * answerLean;  // 1 if same, -1 if opposite, 0 if neutral

                    // Modifier: positive alignment = answer resonates with state
                    // For Republican: conservative answer (answerLean=1) in conservative state (stateLean=1) = +1 alignment = good
                    // For Democrat: liberal answer (answerLean=-1) in liberal state (stateLean=-1) = +1 alignment = good

                    // Adjust based on party
                    let effectMod = 0;
                    if (isRepublican) {
                        // Republican benefits when conservative answers match conservative states
                        // alignment of 1 = good for Rep if answerLean is conservative
                        effectMod = alignment * 0.8;  // +0.8 if aligned, -0.8 if opposed
                    } else {
                        // Democrat benefits when liberal answers match liberal states
                        // But stateLean and answerLean are coded where 1=conservative
                        // So Democrat with liberal answer (answerLean=-1) in liberal state (stateLean=-1) = alignment of +1
                        effectMod = alignment * 0.8;
                    }

                    issueModifier += effectMod;
                    issueCount++;
                }

                if (issueCount > 0) {
                    // Average the issue modifiers and add to state effect
                    stateEffect += (issueModifier / issueCount);
                }
            }
        }

        // Apply randomness and update state margin
        const randomFactor = 0.7 + Math.random() * 0.6;
        gameState.statePolling[stateName].margin += stateEffect * randomFactor;
    }
}

// Apply a national effect to all states
function applyNationalEffect(effect) {
    for (let state in gameState.statePolling) {
        const randomFactor = 0.5 + Math.random();
        gameState.statePolling[state].margin += effect * randomFactor;
    }
}

// Show advisor feedback after answer selection
function showAdvisorFeedback(rating, feedback) {
    const feedbackContainer = document.getElementById('advisor-feedback');
    if (!feedbackContainer) return;

    const ratingClass = rating === 'good' ? 'good' : (rating === 'bad' ? 'bad' : 'mixed');
    const ratingText = rating === 'good' ? 'Good choice!' : (rating === 'bad' ? 'Poor choice...' : 'Mixed results');

    feedbackContainer.innerHTML = `
        <div class="advisor-rating ${ratingClass}">${ratingText}</div>
        <div class="advisor-message">${feedback}</div>
    `;
    feedbackContainer.classList.remove('hidden');
}

// Hide advisor feedback
function hideAdvisorFeedback() {
    const feedbackContainer = document.getElementById('advisor-feedback');
    if (feedbackContainer) {
        feedbackContainer.classList.add('hidden');
    }
}

function applyEffects(effects) {
    const isRepublican = gameState.selectedCandidate === 'republican';

    // National effect
    if (effects.national) {
        let nationalShift = effects.national;
        // If playing as Republican, flip the effect (positive becomes negative for Dem margin)
        if (isRepublican) {
            nationalShift = -nationalShift;
        }

        // Apply to all states with some randomness
        for (let state in gameState.statePolling) {
            const randomFactor = 0.5 + Math.random();
            gameState.statePolling[state].margin += nationalShift * randomFactor;
        }
    }

    // Regional effects
    if (effects.regions) {
        for (let region in effects.regions) {
            let regionShift = effects.regions[region];
            if (isRepublican) {
                regionShift = -regionShift;
            }

            const regionStates = regions[region] || [];
            regionStates.forEach(state => {
                if (gameState.statePolling[state]) {
                    const randomFactor = 0.7 + Math.random() * 0.6;
                    gameState.statePolling[state].margin += regionShift * randomFactor;
                }
            });
        }
    }
}

// ==================== POLLING DISPLAY ====================

function renderStatePolling() {
    const container = document.getElementById('state-list');
    container.innerHTML = '';

    // Sort states by closeness (absolute margin)
    const sortedStates = Object.entries(gameState.statePolling)
        .sort((a, b) => Math.abs(a[1].margin) - Math.abs(b[1].margin));

    sortedStates.forEach(([state, data]) => {
        const margin = data.margin;
        const pct = marginToPercentages(margin);

        // Determine classification - no more tossups
        // Close states (<3%) get special "tilt" class
        // Lean states (3-8%) get regular coloring
        // Safe states (>8%) get strong coloring
        let stateClass, marginClass;

        if (margin >= 0) {
            // Democrat leading
            marginClass = 'dem';
            if (margin < 3) {
                stateClass = 'tilt-dem';  // Very close
            } else if (margin < 8) {
                stateClass = 'lean-dem';  // Leaning
            } else {
                stateClass = 'safe-dem';  // Safe
            }
        } else {
            // Republican leading
            marginClass = 'rep';
            if (margin > -3) {
                stateClass = 'tilt-rep';  // Very close
            } else if (margin > -8) {
                stateClass = 'lean-rep';  // Leaning
            } else {
                stateClass = 'safe-rep';  // Safe
            }
        }

        const row = document.createElement('div');
        row.className = `state-row ${stateClass}`;
        row.innerHTML = `
            <span class="state-name">${state}</span>
            <span class="state-ev">${data.ev}</span>
            <span class="state-margin ${marginClass}">${pct.dem}% - ${pct.rep}%</span>
        `;
        container.appendChild(row);
    });
}

function updateEVCounts() {
    let demEV = 0;
    let repEV = 0;
    let demLeaning = 0;  // Close states leaning Dem
    let repLeaning = 0;  // Close states leaning Rep

    for (let state in gameState.statePolling) {
        const data = gameState.statePolling[state];
        // No more tossups - assign based on who is leading
        if (data.margin >= 0) {
            demEV += data.ev;
            if (Math.abs(data.margin) < 3) {
                demLeaning += data.ev;  // Very close race
            }
        } else {
            repEV += data.ev;
            if (Math.abs(data.margin) < 3) {
                repLeaning += data.ev;  // Very close race
            }
        }
    }

    document.getElementById('dem-ev').textContent = demEV;
    document.getElementById('rep-ev').textContent = repEV;

    // Update the tossup display to show "Close" EVs instead
    const tossupEl = document.getElementById('tossup-ev');
    const tossupLabel = document.querySelector('#tossup-ev + .stat-label, .stat:has(#tossup-ev) .stat-label');
    if (tossupEl) {
        tossupEl.textContent = demLeaning + repLeaning;
    }

    // Update the projected winner indicator
    updateProjectedWinner(demEV, repEV);
}

function updateProjectedWinner(demEV, repEV) {
    const demEvEl = document.getElementById('dem-ev');
    const repEvEl = document.getElementById('rep-ev');
    const scenario = gameState.selectedScenario;

    // Add visual indicator for who is projected to win
    if (demEvEl && repEvEl) {
        demEvEl.classList.remove('winning', 'losing');
        repEvEl.classList.remove('winning', 'losing');

        if (demEV >= 270) {
            demEvEl.classList.add('winning');
            repEvEl.classList.add('losing');
        } else if (repEV >= 270) {
            repEvEl.classList.add('winning');
            demEvEl.classList.add('losing');
        } else if (demEV > repEV) {
            demEvEl.classList.add('leading');
            repEvEl.classList.remove('leading');
        } else if (repEV > demEV) {
            repEvEl.classList.add('leading');
            demEvEl.classList.remove('leading');
        }
    }
}

// ==================== END GAME ====================

function endGame() {
    showScreen('results-screen');

    const scenario = gameState.selectedScenario;

    // Calculate final results
    let demEV = 0;
    let repEV = 0;
    const stateResults = [];

    for (let state in gameState.statePolling) {
        const data = gameState.statePolling[state];
        // Add some final randomness for close states
        let finalMargin = data.margin;
        if (Math.abs(finalMargin) < 3) {
            finalMargin += (Math.random() - 0.5) * 2;
        }

        const winner = finalMargin >= 0 ? 'dem' : 'rep';
        if (winner === 'dem') {
            demEV += data.ev;
        } else {
            repEV += data.ev;
        }

        stateResults.push({
            name: state,
            ev: data.ev,
            winner: winner,
            margin: finalMargin
        });
    }

    // Determine winner
    const playerWon = (gameState.selectedCandidate === 'democrat' && demEV >= 270) ||
                      (gameState.selectedCandidate === 'republican' && repEV >= 270);

    // Update results UI
    const resultsHeader = document.getElementById('results-header');
    const resultsTitle = document.getElementById('results-title');
    const resultsSubtitle = document.getElementById('results-subtitle');

    if (playerWon) {
        resultsHeader.className = 'results-header win';
        resultsTitle.textContent = 'Victory!';
        resultsSubtitle.textContent = `${scenario.candidates[gameState.selectedCandidate].name} wins the presidency!`;
    } else {
        resultsHeader.className = 'results-header lose';
        resultsTitle.textContent = 'Defeat';
        const opponent = gameState.selectedCandidate === 'democrat' ? 'republican' : 'democrat';
        resultsSubtitle.textContent = `${scenario.candidates[opponent].name} wins the presidency.`;
    }

    document.getElementById('dem-candidate-name').textContent = scenario.candidates.democrat.name;
    document.getElementById('rep-candidate-name').textContent = scenario.candidates.republican.name;
    document.getElementById('final-dem-ev').textContent = demEV;
    document.getElementById('final-rep-ev').textContent = repEV;

    // Render state results
    const stateResultsContainer = document.getElementById('state-results');
    stateResultsContainer.innerHTML = '';

    stateResults
        .sort((a, b) => b.ev - a.ev)
        .forEach(state => {
            const div = document.createElement('div');
            div.className = `state-result ${state.winner}`;
            div.innerHTML = `${state.name} <span>${state.ev}</span>`;
            stateResultsContainer.appendChild(div);
        });
}

// ==================== NAVIGATION ====================

function showScreen(screenId) {
    // Hide all screens
    const screens = ['main-menu', 'start-screen', 'game-screen', 'results-screen', 'update-log'];
    screens.forEach(id => {
        const screen = document.getElementById(id);
        if (screen) {
            screen.style.display = 'none';
        }
    });

    // Show the requested screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.style.display = 'block';
    }
}

// ==================== START ====================

document.addEventListener('DOMContentLoaded', initGame);
