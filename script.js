/* DUAR Tuition Center — Interactive Portfolio Script */
const translations = {
  en: {
    skip: 'Skip to content',
    navClasses: 'Programs',
    navFinder: 'Fee Estimator',
    navAbout: 'Curriculum',
    navStudio: 'Posters & Studio',
    navSchedule: 'Timings',
    navContact: 'Enquire Now <span>↗</span>',
    heroTag: 'LEARN · GROW · CREATE',
    heroTitle: 'A bright place<br>to <em>begin & shine.</em>',
    heroText: 'Build fluency in Spoken English & Phonetics, master neat Handwriting, or explore Brush Pen Calligraphy and Drawing with Mentor Udayamathi. Interactive online classes tailored to every learner.',
    heroButton: 'Explore Programs <span>↓</span>',
    heroFinderBtn: 'Estimate Fees & Plan <span>↗</span>',
    heroPoint1: '1-on-1 Personal Guidance',
    heroPoint2: 'Live Online via Zoom',
    heroPoint3: 'Bilingual Support (EN / தமிழ்)',
    tabArtBg: 'Creative Art Studio',
    tabClassBg: 'Interactive Classroom',
    showcaseCaption: 'Mentor-led live sessions designed for steady confidence.',
    showcaseBadge: 'Ages 5+ to Adults',
    ticker1: 'CONFIDENCE THROUGH PRACTICE',
    ticker2: 'UDAYAMATHI ARTISTIC CREATOR',
    ticker3: 'SPOKEN ENGLISH & PHONETICS',
    ticker4: 'BRUSH PEN CALLIGRAPHY & DRAWING',
    stat1Val: '4 Core Tracks',
    stat1Lbl: 'Language, Writing & Visual Arts',
    stat2Val: '15–25 Sessions',
    stat2Lbl: 'Structured Drawing Modules',
    stat3Val: '5 Daily Batches',
    stat3Lbl: 'Flexible Morning & Afternoon Slots',
    stat4Val: 'Live on Zoom',
    stat4Lbl: 'Learn Comfortably from Home',
    classesTag: 'CHOOSE YOUR PATH',
    classesTitle: 'Skills that grow<br><em>with you.</em>',
    classesIntro: 'Practical language mastery and creative discovery in a friendly online classroom. Filter by interest or select a class to enquire.',
    filterAll: 'All Programs (4)',
    filterLang: 'Language & Writing',
    filterArt: 'Calligraphy & Art',
    courseTag1: 'LANGUAGE FLUENCY',
    courseTitle1: 'Spoken English & Phonetics',
    courseDesc1: 'Interactive conversation practice, phonetic sound blending, vocabulary building, and clear pronunciation for kids and teens.',
    courseMeta1A: '<span><b>Fee / class</b><span>₹300–₹500 · $7–$10</span></span><span><b>Format</b><span>Live Online</span></span>',
    courseTag2: 'NEAT PENMANSHIP',
    courseTitle2: 'Handwriting & Writing Skills',
    courseDesc2: 'Structured practice in letter formation, kerning, spacing, speed, and neat, confident everyday exam and notebook writing.',
    courseMeta2A: '<span><b>Fee / class</b><span>₹300–₹500 · $7–$10</span></span><span><b>Format</b><span>1-on-1 / Small Group</span></span>',
    courseTag3: 'UDAYAMATHI ARTISTIC CREATOR',
    courseTitle3: 'Brush Pen Calligraphy',
    courseDesc3: '5-day intensive & ongoing workshops covering basic/complex strokes, alphabet lettering, word alignment, and colour blending.',
    courseMeta3A: '<span><b>Kids (8–15)</b><span>₹2,000–₹2,500 ($10)</span></span><span><b>Adults (15+)</b><span>₹1,500–₹2,000 ($8)</span></span>',
    courseTag4: 'UDAYAMATHI’S DRAWING CLASS',
    courseTitle4: 'Drawing, Colouring & Focus',
    courseDesc4: 'Three progressive tracks: Basic Beginners (20 classes), Intermediate + Colouring (15 classes), and Concentration Drills (25 classes).',
    courseMeta4A: '<span><b>Fee / class</b><span>₹300–₹500 · $7–$10</span></span><span><b>Duration</b><span>15 / 20 / 25 Classes</span></span>',
    courseLink: 'Enquire about this class <b>↗</b>',
    courseNote: 'Online classes via Zoom · Weekly batches arranged according to student progress.',
    finderTag: 'INTERACTIVE COURSE ADVISOR',
    finderTitle: 'Find the right track<br>& <em>fee structure.</em>',
    finderIntro: 'Select a program track and currency to see the exact curriculum breakdown, total hours, and tuition fees from our official brochures.',
    finderTrackLabel: '1. Select Program Track',
    finderCurrLabel: '2. Fee Currency Display',
    currINR: '₹ INR (Indian Rupee)',
    currUSD: '$ USD (International)',
    finderBookBtn: 'Enquire for This Track <span>↗</span>',
    posterEyebrow: 'UDAYAMATHI’S DRAWING CLASS · ZOOM',
    posterTitle: 'Drawing<br><em>curriculum</em>',
    posterSub: 'Structured 1-hour sessions tailored to skill and concentration.',
    posterBasic: 'Class 1 · Basic for Beginners',
    posterBasicDesc: '20 classes · 1 full hour of foundational drawing each',
    posterIntermediate: 'Class 2 · Intermediate + Basic Colouring',
    posterIntermediateDesc: '15 classes · 30 mins drawing + 30 mins colouring technique',
    posterFocus: 'Class 3 · Concentration & Focus',
    posterFocusDesc: '25 classes · 20 drawing sessions + 5 days of concentration drills',
    posterSchedule: '5 Daily Batch Windows',
    posterScheduleDesc: 'Morning (9–10, 10:30–11:30) · Afternoon (12:30–1:30, 3–4, 4:30–5:30)',
    posterOnline: 'ONLINE CLASS',
    aboutTag: 'A PERSONAL APPROACH',
    aboutTitle: 'Room to learn.<br><em>Room to become.</em>',
    aboutText: 'Every learner deserves patience, encouragement, and a clear path to discover their strengths. Led by Udayamathi, our lessons make room for questions, hands-on practice, and steady creative growth.',
    benefit1: 'Individual attention',
    benefit1s: 'Pacing and feedback tailored to each student’s performance',
    benefit2: 'Structured skill drills',
    benefit2s: 'Step-by-step strokes, phonetics, and concentration exercises',
    benefit3: 'Flexible online classes',
    benefit3s: 'Attend from anywhere via Zoom with morning and afternoon slots',
    aboutLink: 'Talk with us about your child’s goals <b>↗</b>',
    studioTag: 'A PASTEL PALETTE OF POSSIBILITIES',
    studioTitle: 'Create with<br><em>every stroke.</em>',
    studioIntro: 'A clear, step-by-step calligraphy journey, with all workshop details and class fees right here on the page.',
    art1: 'Find your line',
    art2: 'Letters with character',
    art3: 'Compose with care',
    art4: 'A guided workshop',
    artStage1: 'START WITH THE STROKES', artStage2: 'SHAPE THE LETTERS', artStage3: 'BRING WORDS TOGETHER', artStage4: 'MAKE TIME TO CREATE', art1Desc: 'Build control and confidence through basic and expressive brush strokes.', art2Desc: 'Explore alphabet lettering and the rhythm of beautiful letterforms.', art3Desc: 'Practice word formation, alignment, blending, and simple backgrounds.', art4Desc: 'Five-day online brush pen workshops for children and adults, with personal guidance.',
    workshopTag: 'UDAYAMATHI ARTISTIC CREATOR · 5-DAY WORKSHOP',
    workshopTitle: 'Start with a stroke.<br><em>Find your creative flow.</em>',
    topic1: 'Basic & Complex Strokes',
    topic2: 'Alphabet Lettering',
    topic3: 'Word Formation & Alignment',
    topic4: 'Blending & Backgrounds',
    kids: 'For Kids (Ages 8–15)',
    kidsDetail: '6 hours total · 1 hr 15m/session<br><strong>₹2,000 – ₹2,500</strong> (or $10)',
    adults: 'For Adults (Ages 15+)',
    adultDetail: '5 hours total · 1 hr/session<br><strong>₹1,500 – ₹2,000</strong> (or $8)',
    workshopLink: 'Book Workshop Slot <span>↗</span>',
    scheduleTag: 'FIND YOUR CLASS TIME',
    scheduleTitle: 'Learning that fits<br><em>your daily routine.</em>',
    scheduleText: 'Click any batch time slot in the timetable to pre-fill your enquiry with that preferred timing. Weekly batches are grouped by student performance.',
    scheduleLink: 'Request Custom Timing <span>↗</span>',
    tableTitle: 'DRAWING & STUDIO BATCH TIMINGS',
    tableZoom: '✳ LIVE ON ZOOM',
    morning: 'MORNING',
    afternoon: 'AFTERNOON',
    batch1: 'Morning Batch 1 · Click to select',
    batch2: 'Morning Batch 2 · Click to select',
    batch3: 'Afternoon Batch 1 · Click to select',
    batch4: 'Afternoon Batch 2 · Click to select',
    batch5: 'Evening Batch 3 · Click to select',
    tableNote: 'Tap any time slot above to open the enquiry form with that batch selected.',
    contactTag: 'YOUR NEXT STEP STARTS HERE',
    contactTitle: 'What would you<br>love to <em>learn?</em>',
    contactText: 'Tell us which class you are interested in. We’ll help you choose the right level and batch through WhatsApp.',
    contactLink: 'Start WhatsApp Enquiry <span>↗</span>',
    footerLine: 'Learn · Grow · Succeed — Guided by Mentor Udayamathi',
    backTop: 'Back to top ↑',
    homeButton: 'Home'
  },
  ta: {
    skip: 'உள்ளடக்கத்திற்குச் செல்லவும்',
    navClasses: 'வகுப்புகள்',
    navFinder: 'கட்டண விவரம்',
    navAbout: 'பாடத்திட்டம்',
    navStudio: 'படைப்புக் கலை',
    navSchedule: 'நேரங்கள்',
    navContact: 'தொடர்புகொள்ள <span>↗</span>',
    heroTag: 'கற்க · வளர · படைக்க',
    heroTitle: 'புதிய தொடக்கத்திற்கான<br><em>அழகான இடம்.</em>',
    heroText: 'ஆங்கிலப் பேச்சு மற்றும் ஒலிப்பயிற்சியில் தன்னம்பிக்கை பெறுங்கள், கையெழுத்தை அழகாக்குங்கள், அல்லது உதயமதி அவர்களின் வழிகாட்டுதலில் எழுத்துக்கலை மற்றும் ஓவியம் பயிலுங்கள்.',
    heroButton: 'வகுப்புகளைப் பாருங்கள் <span>↓</span>',
    heroFinderBtn: 'கட்டணம் & திட்டம் அறிய <span>↗</span>',
    heroPoint1: 'தனிப்பட்ட வழிகாட்டுதல்',
    heroPoint2: 'ஜூம் (Zoom) ஆன்லைன் வகுப்புகள்',
    heroPoint3: 'இருமொழி ஆதரவு (தமிழ் / EN)',
    tabArtBg: 'ஓவியக் கலை அரங்கம்',
    tabClassBg: 'ஆன்லைன் வகுப்பறை',
    showcaseCaption: 'மாணவர்களின் தன்னம்பிக்கையை வளர்க்கும் நேரடி ஆன்லைன் வகுப்புகள்.',
    showcaseBadge: 'வயது 5+ முதல் பெரியவர்கள் வரை',
    ticker1: 'பயிற்சியால் தன்னம்பிக்கை',
    ticker2: 'உதயமதி கலைப் படைப்பாளர்',
    ticker3: 'ஆங்கிலப் பேச்சு & ஒலிப்பயிற்சி',
    ticker4: 'பிரஷ் எழுத்துக்கலை & ஓவியம்',
    stat1Val: '4 முக்கியப் பிரிவுகள்',
    stat1Lbl: 'மொழி, கையெழுத்து & ஓவியக் கலை',
    stat2Val: '15–25 வகுப்புகள்',
    stat2Lbl: 'படிப்படியான ஓவியப் பயிற்சிகள்',
    stat3Val: '5 தினசரி நேரங்கள்',
    stat3Lbl: 'காலை மற்றும் மதிய வகுப்புகள்',
    stat4Val: 'ஜூம் ஆன்லைன்',
    stat4Lbl: 'வீட்டிலிருந்தே பாதுகாப்பாகக் கற்கலாம்',
    classesTag: 'உங்கள் பாதையைத் தேர்ந்தெடுங்கள்',
    classesTitle: 'உங்களுடன் வளர்கின்ற<br><em>திறன்கள்.</em>',
    classesIntro: 'நட்பான ஆன்லைன் வகுப்பில் பயனுள்ள கற்றலும் படைப்பாற்றலும். உங்களுக்குப் பொருத்தமான வகுப்பைத் தேர்ந்தெடுங்கள்.',
    filterAll: 'அனைத்து வகுப்புகள் (4)',
    filterLang: 'மொழி & கையெழுத்து',
    filterArt: 'எழுத்துக்கலை & ஓவியம்',
    courseTag1: 'மொழித் திறன்',
    courseTitle1: 'ஆங்கிலப் பேச்சு & ஒலிப்பயிற்சி',
    courseDesc1: 'குழந்தைகள் மற்றும் இளம் மாணவர்களுக்கான உரையாடல், சொல்வளம் மற்றும் தெளிவான உச்சரிப்புப் பயிற்சி.',
    courseMeta1A: '<span><b>வகுப்பு கட்டணம்</b><span>₹300–₹500 · $7–$10</span></span><span><b>முறை</b><span>நேரடி ஆன்லைன்</span></span>',
    courseTag2: 'அழகான கையெழுத்து',
    courseTitle2: 'கையெழுத்து & எழுதும் திறன்',
    courseDesc2: 'எழுத்து வடிவம், இடைவெளி, நேர்த்தி மற்றும் தேர்வுகளில் தெளிவாக எழுதும் பயிற்சி.',
    courseMeta2A: '<span><b>வகுப்பு கட்டணம்</b><span>₹300–₹500 · $7–$10</span></span><span><b>முறை</b><span>தனிப்பட்ட / சிறு குழு</span></span>',
    courseTag3: 'உதயமதி கலைப் படைப்பு',
    courseTitle3: 'பிரஷ் பென் எழுத்துக்கலை',
    courseDesc3: '5 நாள் பயிற்சி வகுப்பு: அடிப்படைக் கோடுகள், எழுத்து வடிவமைப்பு, சொல் ஒழுங்கமைப்பு மற்றும் வண்ணக் கலவை.',
    courseMeta3A: '<span><b>குழந்தைகள் (8–15)</b><span>₹2,000–₹2,500 ($10)</span></span><span><b>பெரியவர்கள் (15+)</b><span>₹1,500–₹2,000 ($8)</span></span>',
    courseTag4: 'உதயமதியின் ஓவிய வகுப்பு',
    courseTitle4: 'வரைதல், வண்ணமிடுதல் & கவனம்',
    courseDesc4: '3 நிலைகள்: தொடக்கநிலை (20 வகுப்புகள்), இடைநிலை + வண்ணம் (15 வகுப்புகள்), கவனப் பயிற்சி (25 வகுப்புகள்).',
    courseMeta4A: '<span><b>வகுப்பு கட்டணம்</b><span>₹300–₹500 · $7–$10</span></span><span><b>காலம்</b><span>15 / 20 / 25 வகுப்புகள்</span></span>',
    courseLink: 'இந்த வகுப்பு பற்றி கேளுங்கள் <b>↗</b>',
    courseNote: 'ஜூம் வழி ஆன்லைன் வகுப்புகள் · மாணவர் முன்னேற்றத்திற்கேற்ப வார வகுப்புகள்.',
    finderTag: 'வகுப்பு & கட்டண வழிகாட்டி',
    finderTitle: 'பொருத்தமான வகுப்பு மற்றும்<br><em>கட்டணத்தை அறிக.</em>',
    finderIntro: 'வகுப்பு மற்றும் நாணய முறையைத் தேர்ந்தெடுத்து பாடத்திட்ட விவரம் மற்றும் கட்டணத்தை உடனடியாகப் பாருங்கள்.',
    finderTrackLabel: '1. வகுப்பைத் தேர்ந்தெடுக்கவும்',
    finderCurrLabel: '2. கட்டண நாணயம்',
    currINR: '₹ இந்திய ரூபாய் (INR)',
    currUSD: '$ அமெரிக்க டாலர் (USD)',
    finderBookBtn: 'இந்த வகுப்பில் இணைய <span>↗</span>',
    posterEyebrow: 'உதயமதியின் ஓவிய வகுப்பு · ஆன்லைன்',
    posterTitle: 'வரைதல்<br><em>பாடத்திட்டம்</em>',
    posterSub: 'கற்பனை மற்றும் கவனத்தை வளர்க்கும் 1 மணி நேரப் பயிற்சிகள்.',
    posterBasic: 'வகுப்பு 1 · தொடக்கநிலை வரைதல்',
    posterBasicDesc: '20 வகுப்புகள் · ஒவ்வொன்றும் 1 மணி நேர அடிப்படைப் பயிற்சி',
    posterIntermediate: 'வகுப்பு 2 · வரைதல் + வண்ணமிடுதல்',
    posterIntermediateDesc: '15 வகுப்புகள் · 30 நிமிடம் வரைதல் + 30 நிமிடம் வண்ணம்',
    posterFocus: 'வகுப்பு 3 · கவனத்தை வளர்க்கும் வரைதல்',
    posterFocusDesc: '25 வகுப்புகள் · 20 வரைதல் + 5 நாட்கள் கவனப் பயிற்சிகள்',
    posterSchedule: '5 தினசரி வகுப்பு நேரங்கள்',
    posterScheduleDesc: 'காலை (9–10, 10:30–11:30) · மதியம் (12:30–1:30, 3–4, 4:30–5:30)',
    posterOnline: 'ஆன்லைன் வகுப்பு',
    aboutTag: 'தனிப்பட்ட அணுகுமுறை',
    aboutTitle: 'கற்க இடம்.<br><em>வளர வாய்ப்பு.</em>',
    aboutText: 'ஒவ்வொரு மாணவருக்கும் நேரம், ஊக்கம் மற்றும் தங்கள் திறன்களைக் கண்டறியும் வாய்ப்பு தேவை. உதயமதி அவர்களின் வழிகாட்டுதலில் எங்கள் வகுப்புகள் சீரான முன்னேற்றத்தை அளிக்கின்றன.',
    benefit1: 'தனிப்பட்ட கவனம்',
    benefit1s: 'மாணவரின் கற்றல் வேகத்திற்கேற்ற வழிகாட்டுதல்',
    benefit2: 'பயனுள்ள பயிற்சி முறைகள்',
    benefit2s: 'எளிய கோடுகள், ஒலிப்பயிற்சி மற்றும் கவனப் பயிற்சிகள்',
    benefit3: 'நெகிழ்வான ஆன்லைன் நேரங்கள்',
    benefit3s: 'வீட்டிலிருந்தே காலை அல்லது மதிய நேரங்களில் கற்கலாம்',
    aboutLink: 'உங்கள் இலக்குகள் பற்றிப் பேசுவோம் <b>↗</b>',
    studioTag: 'வண்ணங்களும் படைப்பாற்றலும்',
    studioTitle: 'ஒவ்வொரு கோட்டிலும்<br><em>படைப்போம்.</em>',
    studioIntro: 'எழுத்துக்கலைப் பயணத்தின் படிப்படியான பயிற்சிகள், வகுப்பு விவரங்கள் மற்றும் கட்டணங்கள் அனைத்தும் இங்கே தெளிவாக உள்ளன.',
    art1: 'உங்கள் கோட்டைத் தொடங்குங்கள்',
    art2: 'எழுத்துகளுக்கு அழகு சேர்க்கலாம்',
    art3: 'சொற்களை அழகாக அமைக்கலாம்',
    art4: 'வழிகாட்டும் பயிற்சி வகுப்பு',
    artStage1: 'கோடுகளுடன் தொடங்குங்கள்', artStage2: 'எழுத்து வடிவங்களைப் பயிலுங்கள்', artStage3: 'சொற்களை இணைத்து அமைக்கலாம்', artStage4: 'படைப்புக்கு நேரம் ஒதுக்குங்கள்', art1Desc: 'அடிப்படை மற்றும் கலைநயமிக்க பிரஷ் கோடுகள் மூலம் கட்டுப்பாடு, நம்பிக்கை பெறுங்கள்.', art2Desc: 'எழுத்து வடிவங்கள் மற்றும் அவற்றின் அழகான ஓட்டத்தைப் பயிலுங்கள்.', art3Desc: 'சொல் அமைப்பு, சீரமைப்பு, வண்ணக் கலவை மற்றும் பின்னணி நுட்பங்களைப் பயிலுங்கள்.', art4Desc: 'குழந்தைகள் மற்றும் பெரியவர்களுக்கான ஐந்து நாள் ஆன்லைன் பிரஷ் பேனா வகுப்புகள்; தனிப்பட்ட வழிகாட்டுதலுடன்.',
    workshopTag: 'உதயமதி கலைப் படைப்பாளர் · 5 நாள் பயிற்சி',
    workshopTitle: 'ஒரு கோட்டில் தொடங்குங்கள்.<br><em>உங்கள் ஓட்டத்தைக் கண்டறியுங்கள்.</em>',
    topic1: 'அடிப்படை & சிக்கலான கோடுகள்',
    topic2: 'ஆங்கில எழுத்து வடிவமைப்பு',
    topic3: 'சொல் அமைப்பு & ஒழுங்கு',
    topic4: 'வண்ணக் கலவை & பின்னணி',
    kids: 'குழந்தைகள் (வயது 8–15)',
    kidsDetail: 'மொத்தம் 6 மணி நேரம் · 1 மணி 15 நிமிடம்<br><strong>₹2,000 – ₹2,500</strong> (அல்லது $10)',
    adults: 'பெரியவர்கள் (வயது 15+)',
    adultDetail: 'மொத்தம் 5 மணி நேரம் · 1 மணி நேரம்<br><strong>₹1,500 – ₹2,000</strong> (அல்லது $8)',
    workshopLink: 'பயிற்சி வகுப்பில் சேர <span>↗</span>',
    scheduleTag: 'வகுப்பு நேரத்தைத் தேர்ந்தெடுங்கள்',
    scheduleTitle: 'உங்கள் நாளுக்கு<br><em>ஏற்ற கற்றல்.</em>',
    scheduleText: 'உங்களுக்கு விருப்பமான நேரத்தை அழுத்தினால், வாட்ஸ்அப் படிவத்தில் அந்த நேரம் தானாகத் தேர்ந்தெடுக்கப்படும்.',
    scheduleLink: 'நேரம் உறுதிசெய்ய <span>↗</span>',
    tableTitle: 'வரைதல் வகுப்பு நேரங்கள்',
    tableZoom: '✳ ஜூம் ஆன்லைன்',
    morning: 'காலை',
    afternoon: 'மதியம்',
    batch1: 'காலை தொகுப்பு 1 · தேர்ந்தெடுக்க',
    batch2: 'காலை தொகுப்பு 2 · தேர்ந்தெடுக்க',
    batch3: 'மதியம் தொகுப்பு 1 · தேர்ந்தெடுக்க',
    batch4: 'மதியம் தொகுப்பு 2 · தேர்ந்தெடுக்க',
    batch5: 'மாலை தொகுப்பு 3 · தேர்ந்தெடுக்க',
    tableNote: 'மேலே உள்ள எந்த நேரத்தையும் அழுத்தி உடனடியாகப் பதிவு செய்யலாம்.',
    contactTag: 'உங்கள் அடுத்த படி இங்கே தொடங்குகிறது',
    contactTitle: 'எதைக் கற்க<br><em>விரும்புகிறீர்கள்?</em>',
    contactText: 'உங்களுக்கு விருப்பமான வகுப்பைத் தெரிவியுங்கள். வாட்ஸ்அப் மூலம் சரியான நிலை மற்றும் நேரத்தைத் தேர்ந்தெடுக்க உதவுகிறோம்.',
    contactLink: 'வாட்ஸ்அப் விசாரணை அனுப்ப <span>↗</span>',
    footerLine: 'கற்க · வளர · வெல்ல — வழிகாட்டி: உதயமதி',
    backTop: 'மேலே செல்ல ↑',
    homeButton: 'முகப்பு'
  }
};

const formTranslations = {
  en: {
    formEyebrow: 'DUAR TUITION CENTER · DIRECT ENQUIRY',
    formTitle: 'Tell us about the learner',
    formIntro: 'Share these details and WhatsApp will open with your enquiry ready to send.',
    parentLabel: 'Parent / Learner Name',
    classLabel: 'Class / Track',
    optionEnglish: 'Spoken English & Phonetics',
    optionHandwriting: 'Handwriting & Writing Skills',
    optionCalligraphy: 'Brush Pen Calligraphy Workshop',
    optionDrawing1: 'Drawing Class 1: Basic Beginners (20 classes)',
    optionDrawing2: 'Drawing Class 2: Intermediate + Colouring (15 classes)',
    optionDrawing3: 'Drawing Class 3: Concentration & Focus (25 classes)',
    optionOther: 'Other / General Enquiry',
    forWhoLabel: 'Who is the class for?',
    childOption: 'Child / Teen (Ages 5–15)',
    adultOption: 'Adult / 15+ Learner',
    ageLabel: 'Learner’s Age',
    slotLabel: 'Preferred Batch Time',
    slotAny: 'Flexible / Advise me on openings',
    slotM1: 'Morning Batch 1 (09:00 AM – 10:00 AM)',
    slotM2: 'Morning Batch 2 (10:30 AM – 11:30 AM)',
    slotA1: 'Afternoon Batch 1 (12:30 PM – 01:30 PM)',
    slotA2: 'Afternoon Batch 2 (03:00 PM – 04:00 PM)',
    slotA3: 'Afternoon Batch 3 (04:30 PM – 05:30 PM)',
    formNote: 'WhatsApp will open with your message ready for you to review and send.',
    sendButton: 'Send via WhatsApp',
    
  },
  ta: {
    formEyebrow: 'DUAR டியூஷன் சென்டர் · நேரடி விசாரணை',
    formTitle: 'மாணவர் விவரங்களைத் தெரிவியுங்கள்',
    formIntro: 'இந்த விவரங்களைப் பூர்த்தி செய்தால், உங்கள் செய்தியை அனுப்ப வாட்ஸ்அப் திறக்கும்.',
    parentLabel: 'பெற்றோர் / மாணவர் பெயர்',
    classLabel: 'வகுப்பு வகை',
    optionEnglish: 'ஆங்கிலப் பேச்சு மற்றும் ஒலிப்பயிற்சி',
    optionHandwriting: 'கையெழுத்துப் பயிற்சி',
    optionCalligraphy: 'பிரஷ் பென் எழுத்துக்கலை (5 நாள்)',
    optionDrawing1: 'வரைதல் வகுப்பு 1: தொடக்கநிலை (20 வகுப்புகள்)',
    optionDrawing2: 'வரைதல் வகுப்பு 2: இடைநிலை + வண்ணம் (15 வகுப்புகள்)',
    optionDrawing3: 'வரைதல் வகுப்பு 3: கவனப் பயிற்சி (25 வகுப்புகள்)',
    optionOther: 'மற்றவை / ஆலோசனை தேவை',
    forWhoLabel: 'வகுப்பு யாருக்காக?',
    childOption: 'குழந்தை / மாணவர் (வயது 5–15)',
    adultOption: 'பெரியவர் (வயது 15+)',
    ageLabel: 'மாணவரின் வயது',
    slotLabel: 'விருப்பமான வகுப்பு நேரம்',
    slotAny: 'எந்த நேரமும் / ஆலோசனை தேவை',
    slotM1: 'காலை தொகுப்பு 1 (09:00 AM – 10:00 AM)',
    slotM2: 'காலை தொகுப்பு 2 (10:30 AM – 11:30 AM)',
    slotA1: 'மதியம் தொகுப்பு 1 (12:30 PM – 01:30 PM)',
    slotA2: 'மதியம் தொகுப்பு 2 (03:00 PM – 04:00 PM)',
    slotA3: 'மாலை தொகுப்பு 3 (04:30 PM – 05:30 PM)',
    formNote: 'உங்கள் செய்தியை அனுப்புவதற்கு முன் சரிபார்க்கலாம்.',
    sendButton: 'வாட்ஸ்அப்பில் அனுப்பவும்',
    
  }
};

const programAdvisorData = {
  calligraphy_kids: {
    en: {
      badge: '5-DAY BRUSH PEN WORKSHOP · KIDS',
      title: 'Brush Pen Calligraphy (Ages 8–15)',
      desc: 'Covers basic & complex strokes and drills, alphabet lettering, word formation & alignment, and colour blending & background techniques.',
      duration: '6 Hours Total (1 hr 15 mins / day)',
      feeINR: '₹2,000 – ₹2,500',
      feeUSD: '$10 USD',
      format: 'Live Online (Zoom) · Pace-adapted',
      enquiryVal: 'Calligraphy',
      whoVal: 'child'
    },
    ta: {
      badge: '5-நாள் பிரஷ் பென் பயிற்சி · குழந்தைகள்',
      title: 'பிரஷ் பென் எழுத்துக்கலை (வயது 8–15)',
      desc: 'அடிப்படை மற்றும் சிக்கலான கோடுகள், ஆங்கில எழுத்து வடிவமைப்பு, சொல் ஒழுங்கமைப்பு மற்றும் பின்னணி வண்ணக் கலவை நுட்பங்கள்.',
      duration: 'மொத்தம் 6 மணி நேரம் (தினம் 1 மணி 15 நிமிடம்)',
      feeINR: '₹2,000 – ₹2,500',
      feeUSD: '$10 USD',
      format: 'ஜூம் ஆன்லைன் · தனிப்பட்ட கவனம்',
      enquiryVal: 'Calligraphy',
      whoVal: 'child'
    }
  },
  calligraphy_adults: {
    en: {
      badge: '5-DAY BRUSH PEN WORKSHOP · ADULTS',
      title: 'Brush Pen Calligraphy (Ages 15+)',
      desc: 'Expressive brush lettering workshop covering stroke drills, modern script alphabets, word composition, and blending backgrounds.',
      duration: '5 Hours Total (1 hour / day)',
      feeINR: '₹1,500 – ₹2,000',
      feeUSD: '$8 USD',
      format: 'Live Online (Zoom) · Flexible pace',
      enquiryVal: 'Calligraphy',
      whoVal: 'adult'
    },
    ta: {
      badge: '5-நாள் பிரஷ் பென் பயிற்சி · பெரியவர்கள்',
      title: 'பிரஷ் பென் எழுத்துக்கலை (வயது 15+)',
      desc: 'அழகான பிரஷ் கோடுகள், எழுத்து வடிவங்கள், சொல் அமைப்பு மற்றும் வண்ணக் கலவை நுட்பங்களை உங்களுக்கேற்ப கற்றுக்கொள்ளுங்கள்.',
      duration: 'மொத்தம் 5 மணி நேரம் (தினம் 1 மணி நேரம்)',
      feeINR: '₹1,500 – ₹2,000',
      feeUSD: '$8 USD',
      format: 'ஜூம் ஆன்லைன் · நெகிழ்வான நேரம்',
      enquiryVal: 'Calligraphy',
      whoVal: 'adult'
    }
  },
  drawing_basic: {
    en: {
      badge: 'UDAYAMATHI’S DRAWING CLASS · LEVEL 1',
      title: 'Class 1: Basic Drawing for Beginners',
      desc: 'Foundational step-by-step drawing sessions building observation, line confidence, shapes, and creative expression for beginners.',
      duration: '20 Classes · 1 Hour per Class',
      feeINR: '₹300–₹500 per class',
      feeUSD: '$7–$10 per class',
      format: '5 Daily Zoom Batch Windows',
      enquiryVal: 'Drawing1',
      whoVal: 'child'
    },
    ta: {
      badge: 'உதயமதியின் ஓவிய வகுப்பு · நிலை 1',
      title: 'வகுப்பு 1: தொடக்கநிலை அடிப்படை வரைதல்',
      desc: 'புதிய மாணவர்களுக்கான கோடுகள், வடிவங்கள் மற்றும் அடிப்படை ஓவியத் திறன்களை வளர்க்கும் 20 முழுமையான வகுப்புகள்.',
      duration: '20 வகுப்புகள் · தலா 1 மணி நேரம்',
      feeINR: '₹300–₹500 / வகுப்பு',
      feeUSD: '$7–$10 / வகுப்பு',
      format: '5 தினசரி ஜூம் வகுப்பு நேரங்கள்',
      enquiryVal: 'Drawing1',
      whoVal: 'child'
    }
  },
  drawing_inter: {
    en: {
      badge: 'UDAYAMATHI’S DRAWING CLASS · LEVEL 2',
      title: 'Class 2: Intermediate + Basic Colouring',
      desc: 'Balanced curriculum combining 30 minutes of structured drawing with 30 minutes of shading and colouring techniques in every class.',
      duration: '15 Classes · 1 Hour per Class (30m + 30m)',
      feeINR: '₹300–₹500 per class',
      feeUSD: '$7–$10 per class',
      format: '5 Daily Zoom Batch Windows',
      enquiryVal: 'Drawing2',
      whoVal: 'child'
    },
    ta: {
      badge: 'உதயமதியின் ஓவிய வகுப்பு · நிலை 2',
      title: 'வகுப்பு 2: இடைநிலை வரைதல் + வண்ணமிடுதல்',
      desc: 'ஒவ்வொரு வகுப்பிலும் 30 நிமிடம் வரைதல் மற்றும் 30 நிமிடம் வண்ணமிடும் நுட்பங்களைக் கற்கும் 15 சிறப்பு வகுப்புகள்.',
      duration: '15 வகுப்புகள் · தலா 1 மணி நேரம்',
      feeINR: '₹300–₹500 / வகுப்பு',
      feeUSD: '$7–$10 / வகுப்பு',
      format: '5 தினசரி ஜூம் வகுப்பு நேரங்கள்',
      enquiryVal: 'Drawing2',
      whoVal: 'child'
    }
  },
  drawing_focus: {
    en: {
      badge: 'UDAYAMATHI’S DRAWING CLASS · LEVEL 3',
      title: 'Class 3: Drawing for Concentration & Focus',
      desc: 'Specialized 25-session track featuring 20 core drawing classes plus 5 dedicated days of mindfulness and concentration drills.',
      duration: '25 Classes (20 Drawing + 5 Focus Drills)',
      feeINR: '₹300–₹500 per class',
      feeUSD: '$7–$10 per class',
      format: 'Weekly progress-based Zoom groups',
      enquiryVal: 'Drawing3',
      whoVal: 'child'
    },
    ta: {
      badge: 'உதயமதியின் ஓவிய வகுப்பு · நிலை 3',
      title: 'வகுப்பு 3: கவனத்தை வளர்க்கும் வரைதல் பயிற்சி',
      desc: 'மாணவர்களின் கவனச்சிதறலைக் குறைத்து ஒருமுகப்படுத்தும் 20 வரைதல் வகுப்புகள் மற்றும் 5 நாட்கள் சிறப்புக் கவனப் பயிற்சிகள்.',
      duration: '25 வகுப்புகள் (20 வரைதல் + 5 கவனப் பயிற்சி)',
      feeINR: '₹300–₹500 / வகுப்பு',
      feeUSD: '$7–$10 / வகுப்பு',
      format: 'ஜூம் ஆன்லைன் · வாராந்திர குழுக்கள்',
      enquiryVal: 'Drawing3',
      whoVal: 'child'
    }
  },
  english_handwriting: {
    en: {
      badge: 'LANGUAGE & PENMANSHIP TRACK',
      title: 'Spoken English, Phonetics & Handwriting',
      desc: 'Build clear pronunciation, phonics decoding, conversational confidence, and neat, legible handwriting for school and daily life.',
      duration: 'Ongoing Weekly Modules',
      feeINR: '₹300–₹500 per class',
      feeUSD: '$7–$10 per class',
      format: '1-on-1 & Small Group Online',
      enquiryVal: 'English',
      whoVal: 'child'
    },
    ta: {
      badge: 'மொழி & கையெழுத்துப் பயிற்சி',
      title: 'ஆங்கிலப் பேச்சு, ஒலிப்பயிற்சி & கையெழுத்து',
      desc: 'தெளிவான ஆங்கில உச்சரிப்பு, உரையாடல் தன்னம்பிக்கை மற்றும் அழகான கையெழுத்துப் பயிற்சி.',
      duration: 'தொடர்ச்சியான வாராந்திர வகுப்புகள்',
      feeINR: '₹300–₹500 / வகுப்பு',
      feeUSD: '$7–$10 / வகுப்பு',
      format: 'தனிப்பட்ட கவனம் · ஆன்லைன்',
      enquiryVal: 'English',
      whoVal: 'child'
    }
  }
};

let currentLang = 'en';
let currentTrack = 'calligraphy_kids';
let currentCurrency = 'INR';

const langButton = document.querySelector('#language');
const menuButton = document.querySelector('#menu');
const nav = document.querySelector('#nav');

function renderAdvisor() {
  const item = programAdvisorData[currentTrack][currentLang];
  document.querySelector('#advisor-badge').textContent = item.badge;
  document.querySelector('#advisor-title').textContent = item.title;
  document.querySelector('#advisor-desc').textContent = item.desc;
  document.querySelector('#advisor-duration').textContent = item.duration;
  document.querySelector('#advisor-fee').textContent = currentCurrency === 'INR' ? item.feeINR : item.feeUSD;
  document.querySelector('#advisor-format').textContent = item.format;
  const bookBtn = document.querySelector('#advisor-book-btn');
  bookBtn.dataset.enquiry = item.enquiryVal;
  bookBtn.dataset.who = item.whoVal;
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = translations[lang][el.dataset.i18n];
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-form-i18n]').forEach(el => {
    const val = formTranslations[lang][el.dataset.formI18n];
    if (val) el.innerHTML = val;
  });
  langButton.textContent = lang === 'ta' ? 'English' : 'தமிழ்';
  langButton.setAttribute('aria-label', lang === 'ta' ? 'View in English' : 'தமிழில் பார்க்க');
  document.title = lang === 'ta'
    ? 'DUAR டியூஷன் சென்டர் | கற்க · வளர · படைக்க'
    : 'DUAR Tuition Center | Spoken English, Calligraphy & Drawing Portfolio';
  renderAdvisor();
  try {
    localStorage.setItem('duar-modern-language', lang);
  } catch (e) {}
}

langButton.addEventListener('click', () => {
  setLanguage(currentLang === 'ta' ? 'en' : 'ta');
});

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Hero visual switcher
const heroMainBg = document.querySelector('#hero-main-bg');
const showcasePreviewImg = document.querySelector('#showcase-preview-img');
document.querySelectorAll('[data-hero-scene]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-hero-scene]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const src = btn.dataset.sceneSrc;
    heroMainBg.src = src;
    showcasePreviewImg.src = src;
  });
});

// Course category filter
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('.course').forEach(card => {
      if (cat === 'all' || card.dataset.category === cat) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Interactive Fee & Track Finder
document.querySelectorAll('[data-track]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-track]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTrack = btn.dataset.track;
    renderAdvisor();
  });
});

document.querySelectorAll('[data-currency]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-currency]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCurrency = btn.dataset.currency;
    renderAdvisor();
  });
});

// Enquiry Dialog & WhatsApp Builder
const enquiryDialog = document.querySelector('#enquiry-dialog');
const enquiryForm = document.querySelector('#enquiry-form');
const classSelect = document.querySelector('#class-type');
const whoSelect = document.querySelector('#for-who');
const ageRow = document.querySelector('#age-row');
const ageInput = document.querySelector('#child-age');
const slotSelect = document.querySelector('#preferred-slot');

function updateAgeField() {
  const isChild = whoSelect.value === 'child';
  ageRow.hidden = !isChild;
  ageInput.required = isChild;
}

whoSelect.addEventListener('change', updateAgeField);

document.querySelector('#close-enquiry').addEventListener('click', () => {
  enquiryDialog.close();
});

enquiryDialog.addEventListener('click', event => {
  if (event.target === enquiryDialog) enquiryDialog.close();
});

function openEnquiryModal(requestedClass, requestedSlot, requestedWho) {
  enquiryForm.reset();
  if (requestedClass && [...classSelect.options].some(o => o.value === requestedClass)) {
    classSelect.value = requestedClass;
  } else {
    classSelect.value = 'Other';
  }
  if (requestedWho && (requestedWho === 'child' || requestedWho === 'adult')) {
    whoSelect.value = requestedWho;
  }
  if (requestedSlot && [...slotSelect.options].some(o => o.value === requestedSlot)) {
    slotSelect.value = requestedSlot;
  } else {
    slotSelect.value = 'Any';
  }
  updateAgeField();
  enquiryDialog.showModal();
  document.querySelector('#parent-name').focus();
}

document.querySelectorAll('[data-enquiry]').forEach(trigger => {
  trigger.addEventListener('click', event => {
    event.preventDefault();
    openEnquiryModal(trigger.dataset.enquiry, trigger.dataset.slot, trigger.dataset.who);
  });
});

function buildEnquiryMessage() {
  const tamil = document.documentElement.lang === 'ta';
  const parent = document.querySelector('#parent-name').value.trim();
  const className = classSelect.selectedOptions[0].textContent.trim();
  const who = whoSelect.selectedOptions[0].textContent.trim();
  const age = whoSelect.value === 'child' ? ageInput.value.trim() : (tamil ? 'பொருந்தாது' : 'Adult learner');
  const slot = slotSelect.selectedOptions[0].textContent.trim();

  if (tamil) {
    return `வணக்கம் DUAR Tution Center,
வகுப்பு விவரங்கள் கேட்டு விசாரணை:
• பெயர்: ${parent}
• வகுப்பு: ${className}
• யாருக்காக: ${who}
• வயது: ${age}
• விருப்பமான நேரம்: ${slot}`;
  }
  return `Hello DUAR Tuition Center,
I would like to enquire about classes:
• Name: ${parent}
• Program: ${className}
• Learner: ${who}
• Age: ${age}
• Preferred Batch: ${slot}`;
}

enquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;
  const message = buildEnquiryMessage();
  window.open(`https://wa.me/918838673407?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  enquiryDialog.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
renderAdvisor();

try {
  if (localStorage.getItem('duar-modern-language') === 'ta') {
    setLanguage('ta');
  }
} catch (e) {}
