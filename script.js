// Database of teachers (ใช้รูปภาพจริง)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbye0lPT3J6Clg9N6aQCl-S2z68z4qgM-4cRp7yrH6YhpHewR2L3wgHdkaxFhhDqcn67hg/exec";

// --- แก้ไข PATH รูปภาพทั้งหมดให้เหลือเพียงชื่อไฟล์ ---
const teachersData = {
    math: [
        { id: 'math1', name: 'นางสาวพรวิภา สมบุญ', image: 'phonwipha.jpg' },
        { id: 'math2', name: 'นางสาวกนกวรรณ มีชัยผาสุข', image: 'kanokwan.jpg' },
        { id: 'math3', name: 'นางสายสมร เงินเหลี่ยม', image: 'saisamon.jpg' },
        { id: 'math4', name: 'นางสาวสุภัตรา ทรัพย์อุปการ', image: 'supattra2.jpg' },
        { id: 'math5', name: 'นายสุริโย เหมือนวดี', image: 'suriyo.jpg' },
        { id: 'math6', name: 'นางสาวนัทธมน แดงแท้', image: 'natthamon.jpg' },
        { id: 'math7', name: 'นางสาวอิศราภรณ์ พูลสวัสดิ์', image: 'itsaraphon.jpg' },
        { id: 'math8', name: 'นางสาวอรญา เติมโพก', image: 'oraya.jpg' },
        { id: 'math9', name: 'นางสาวศุภมาศ ชาที', image: 'supamat.jpg' },
        { id: 'math10', name: 'นางสาวอัมพิกา ศิริพงษ์', image: 'ampika.jpg' },
        { id: 'math11', name: 'นางสาวปนัดดา จันทร์วัฒน์', image: 'panadda.jpg' },
        { id: 'math12', name: 'นางสาวนพรัตน์ อรุณสุวรรณ', image: 'nopparat.jpg' },
        { id: 'math13', name: 'นางสาวอวรรษดา สายแก้ว', image: 'awassada.jpg' },
        { id: 'math14', name: 'นายเกษมสันต์ จากโพชน์', image: 'kasemsan.jpg' },
        { id: 'math15', name: 'ว่าที่ร้อยตรีเศรษฐา เชื่อมมณี', image: 'settha.jpg' },
        { id: 'math16', name: 'นางสาวนภัสสร สว่างศรี', image: 'naphatson.jpg' },
        { id: 'math17', name: 'นางสาวปาริฉัตร ทองช้อย', image: 'parichat.jpg' }
    ],
    science: [
        { id: 'sci1', name: 'นางจันทร์เพ็ญ  ศรีภุมมา', image: 'rotsukon.jpg' },
        { id: 'sci2', name: 'นายณัฐวุฒิ  วรรณโชติ', image: 'kitcha.jpg' },
        { id: 'sci3', name: 'นางสาวภาณุมาศ  นักษัตรมณฑล', image: 'naphaphon.jpg' },
        { id: 'sci4', name: 'นายนัสรี สาและ', image: 'phoranee.jpg' },
        { id: 'sci5', name: 'นางสาวณัฐกฤตา  รองพล', image: 'kittithon.jpg' },
        { id: 'sci6', name: 'นางสาวเรณู  อรุณประสิทธิชัย', image: 'chakkraphong.jpg' },
        { id: 'sci7', name: 'นางสาวสุทธิกานต์  เหรียญทอง', image: 'chanakan.jpg' },
        { id: 'sci8', name: 'นางสาวจิณณ์ณณัช  ธาราจิรเศรษฐ์', image: 'nawaphon.jpg' },
        { id: 'sci9', name: 'นางณัฐนรี  แขวงโสภา', image: 'kitti.jpg' },
        { id: 'sci10', name: 'นางสาวระพีพัชร  อินทรโชติ', image: 'sasithon.jpg' },
        { id: 'sci11', name: 'นางสาวลักษิกา  ผลพิมาย', image: 'wanna.jpg' },
        { id: 'sci12', name: 'นางสาวธนาภรณ์  เจริญผล', image: 'pharawee.jpg' },
        { id: 'sci13', name: 'นางสาวพิมชนก  เจริญชีพ', image: 'thansiri.jpg' },
        { id: 'sci14', name: 'นายสุนทร อุ่นทวี', image: 'sirimon.jpg' },
        { id: 'sci15', name: 'นายสุพจน์  วิจิตรเวชการ', image: 'sukon.jpg' },
        { id: 'sci16', name: 'นายปกรณ์ บริบูรณ์ทรัพย์', image: 'thanawit.jpg' },
        { id: 'sci17', name: 'นายพงศ์พัทธ์  เจริญลาภลอย', image: 'thanyathon.jpg' },
        { id: 'sci18', name: 'นายภควรรษ  รัตนภานพ', image: 'butsaraphon.jpg' },
        { id: 'sci19', name: 'นายอัษฎา สังขะจาย', image: 'benjawan.jpg' },
        { id: 'sci20', name: 'นางสาวศศิธร ตรีพิมล', image: 'chakrit.jpg' },
    ],
    thai: [
        { id: 'thai1', name: 'นายจักรกฤษณ์ บัวลอย', image: 'jakkrit.jpg' },
        { id: 'thai2', name: 'นางกรวรรณ คล่องยุทธ์', image: 'kornwan.jpg' },
        { id: 'thai3', name: 'นางสาวจรรยงค์ บุญซัน', image: 'chanyong.jpg' },
        { id: 'thai4', name: 'นางสาวบำเพ็ญ ขาวสง่า', image: 'bampen.jpg' },
        { id: 'thai5', name: 'นางชุติมา อังกุลดี', image: 'chutima.jpg' },
        { id: 'thai6', name: 'นายรัตนศักดิ์ ก้อนเพชร', image: 'rattanasak.jpg' },
        { id: 'thai7', name: 'นายธนากร ชมเชย', image: 'thanakorn.jpg' },
        { id: 'thai8', name: 'นางสาวณัฏฐนิช เยี่ยงมานิต', image: 'natthanit.jpg' },
        { id: 'thai9', name: 'นางสาวทิพย์วัลย์ ทองดี', image: 'thipphawan.jpg' },
        { id: 'thai10', name: 'นางสาววิราชิน ขันติสิทธิ์', image: 'wirachin.jpg' },
        { id: 'thai11', name: 'นางสาวสุจิตรา กลิ่นสว่าง', image: 'sujitra.jpg' },
        { id: 'thai12', name: 'นายวงศ์วรัณ ช้างพลาย', image: 'wongwaran.jpg' },
        { id: 'thai13', name: 'นายอธิวัฒน์ พูลเพิ่ม', image: 'athiwat.jpg' }
    ],
    foreign: [
        { id: 'foreign1', name: 'นางสาวจิราภรณ์ เหมือนอ่วม', image: 'chiraphon.jpg' },
        { id: 'foreign2', name: 'นางสาวนวรัตน์ สังขฤทธิ์', image: 'nawarat.jpg' },
        { id: 'foreign3', name: 'นางสาวธมลวรรณ เคล้าคลึง', image: 'thamonwan.jpg' },
        { id: 'foreign4', name: 'นางสาวศิรดา อ่อนทรัพย์', image: 'sirada.jpg' },
        { id: 'foreign5', name: 'นางสาวดวงกมล ตรีหัตถ์', image: 'duangkamon.jpg' },
        { id: 'foreign6', name: 'นางสาวอรวรรณ มาช่วย', image: 'onwan.jpg' },
        { id: 'foreign7', name: 'นายวรวัตต์ มานะแท้', image: 'worawat.jpg' },
        { id: 'foreign8', name: 'นางสาวรัตนา มีประวัติ', image: 'rattana.jpg' },
        { id: 'foreign9', name: 'นางสาวสุพัตรา เพชรใหญ่', image: 'supattra.jpg' },
        { id: 'foreign10', name: 'นางสาวิณี ปัทมเสถียรชัย', image: 'sawinee.jpg' },
        { id: 'foreign11', name: 'นายปฏิภาณ ปู่พันธ์', image: 'patiphan.jpg' },
        { id: 'foreign12', name: 'นางสาวภัทริยา ปานเชียงวงษ์', image: 'phattriya.jpg' },
        { id: 'foreign13', name: 'นางสาววทิพร เครือพันธุ์', image: 'wathiphon.jpg' },
        { id: 'foreign14', name: 'นางสาวอรภัทร เวชชูศักดิ์ชัย', image: 'onphat.jpg' },
        { id: 'foreign15', name: 'นางสาวปณิตา เทวบัญชาประเสริฐ', image: 'panita.jpg' },
        { id: 'foreign16', name: 'นางสาวศิริอำไพ สุธีเจริญกุล', image: 'siriamphai.jpg' },
        { id: 'foreign17', name: 'นางสาวนลินภัสร์ จิตพิบูลย์', image: 'nalinphat.jpg' },
        { id: 'foreign18', name: 'นางสาวจิตติมา แวววับศรี', image: 'chittima.jpg' },
        { id: 'foreign19', name: 'นางสาวนิชนิภา ขนอม', image: 'nitchnipha.jpg' },
        { id: 'foreign20', name: 'นายพงศธร คงดี', image: 'phongsathon.jpg' },
        { id: 'foreign21', name: 'นางสาวสุนิษา เผือกสวัสดิ์', image: 'sunisa.jpg' }
    ],
    social: [
        { id: 'soc1', name: 'นายธนากร ทองศิริ', image: 'thanakorn2.jpg' },
        { id: 'soc2', name: 'นางสาวสิรีกร ทับทิมทอง', image: 'sireekorn.jpg' },
        { id: 'soc3', name: 'นางสาวไอรินทร์ โกณฑา', image: 'airin.jpg' },
        { id: 'soc4', name: 'นางสาวประภัสสร สิทธิศักดิ์', image: 'praphatson.jpg' },
        { id: 'soc5', 'name': 'นางสาวพรนิภา เวียงวิเศษ', image: 'phonnipha.jpg' },
        { id: 'soc6', name: 'นางทัสณียา แบบสังข์', image: 'thatsaneeya.jpg' },
        { id: 'soc7', name: 'นางสาวสุภานัน เบญจมังคลารักษ์', image: 'suphanan.jpg' },
        { id: 'soc8', name: 'นางสาวพัทธนันท์ ชนะภัย', image: 'phatthanan.jpg' },
        { id: 'soc9', name: 'นางสาวสุชาดา ปลอยปลา', image: 'suchada.jpg' },
        { id: 'soc10', name: 'นางสาวฌัชฌา พลีไพล', image: 'chatcha.jpg' },
        { id: 'soc11', name: 'นางสาวศุภัทศจี โตใหญ่', image: 'suphatsajee.jpg' },
        { id: 'soc12', name: 'นางสาวกรกนก บุญเดชา', image: 'kornkanok.jpg' },
        { id: 'soc13', name: 'นางสาวสิริกัญญา อัมพสุวรรณ', image: 'sirikanya.jpg' },
        { id: 'soc14', name: 'นางสาวประภาพรรณ ประกอบบุญ', image: 'praphaphan.jpg' },
        { id: 'soc15', name: 'นายสหรัฐ แจ่มกระจ่าง', image: 'saharat.jpg' }
    ],
    pe: [
        { id: 'pe1', name: 'นายธีรวุฒิ แกละบังทอง', image: 'theerawut.jpg' },
        { id: 'pe2', name: 'นายชัชวาล พูลสวัสดิ์', image: 'chatchawan.jpg' },
        { id: 'pe3', name: 'นายอนุพงศ์ สุริฉาย', image: 'anuphong.jpg' },
        { id: 'pe4', name: 'นางสาวเอมวิกา เพชรทอง', image: 'amwika.jpg' },
        { id: 'pe5', name: 'นายจริพจน์ คงทัพ', image: 'charipot.jpg' },
        { id: 'pe6', name: 'นางสาวทยากร งามน้อย', image: 'thayakorn.jpg' },
        { id: 'pe7', name: 'นายกฤษณะ อินทโชติ', image: 'kritsana.jpg' }
    ],
    career: [
        { id: 'car1', name: 'นางสาวจีรวรรณ สุขผล', image: 'jeerawan.jpg' },
        { id: 'car2', name: 'นางสาวสุนารี ก๋าแก่น', image: 'sunaree.jpg' },
        { id: 'car3', name: 'นางสาวปรวรรธ์น สอนเพ็ง', image: 'porawan.jpg' },
        { id: 'car4', name: 'นายไพบูลย์ รอดทิม', image: 'paiboon.jpg' },
        { id: 'car5', name: 'นางสาวปริณา คุณสุทธิ์', image: 'parina.jpg' }
    ],
    art: [
        { id: 'art1', name: 'นางสาวนัฐกานต์ หุ่นงาม', image: 'natthakan.jpg' },
        { id: 'art2', name: 'นายวัลลภ แก้วกำเนิด', image: 'wanlop.jpg' },
        { id: 'art3', name: 'นางสาวฐาวรดา วิเชียรฉาย', image: 'thaworada.jpg' },
        { id: 'art4', name: 'นางชีวารัตน์ ยอดยิ่ง', image: 'chiwarat.jpg' },
        { id: 'art5', name: 'นายพัลลภ อินทรสาร', image: 'phanlop.jpg' },
        { id: 'art6', name: 'นางสาวณัฐกานต์ เดชบุญ', image: 'natthakan2.jpg' },
        { id: 'art7', name: 'นายวัชราภรณ์ เจริญกุล', image: 'watcharaphon.jpg' },
        { id: 'art8', name: 'นายณัชศิต ราชวงศ์', image: 'natchasit.jpg' }
    ],
    guidance: [
        { id: 'gui1', name: 'นางสาวสุวรรณา ขวัญแก้ว', image: 'suwanna.jpg' },
        { id: 'gui2', name: 'นางสาวณัชฏ์ฑิฌาวดี พรหมพรรณ', image: 'natchatichawadee.jpg' }
    ]
};

const subjectNames = {
    math: 'คณิตศาสตร์',
    science: 'วิทยาศาสตร์และเทคโนโลยี',
    thai: 'ภาษาไทย',
    foreign: 'ภาษาต่างประเทศ',
    social: 'สังคมศึกษา',
    pe: 'สุขศึกษาและพลศึกษา',
    career: 'การงานอาชีพ',
    art: 'ศิลปะ',
    guidance: 'แนะแนว'
};

const voteOptions = {
    1: 'สายคอนเทนต์',
    2: 'สายข้อสอบโหด',
    3: 'สายสอนเกินคาบ',
    4: 'สายบันเทิง',
    5: 'สายเจ้าระเบียบ',
    6: 'สายเข้าใจนักเรียน',
    7: 'สายตั้งใจสอน',
    8: 'สายใจดีเมตตา',
    9: 'สายแฟชั่น'
};

// --- ส่วนที่เหลือของโค้ด (ส่วนนี้ไม่ต้องแก้ไข) ---
let currentSubject = '';
let currentTeacher = null;
let selectedVote = null;

const stepSubjects = document.getElementById('step-subjects');
const stepTeachers = document.getElementById('step-teachers');
const stepVoting = document.getElementById('step-voting');
const stepThankyou = document.getElementById('step-thankyou');
const subjectTitle = document.getElementById('subject-title');
const teachersContainer = document.getElementById('teachers-container');
const teacherImage = document.getElementById('teacher-image');
const teacherName = document.getElementById('teacher-name');
const teacherSubject = document.getElementById('teacher-subject');
const submitVoteBtn = document.getElementById('submit-vote');
const voteTeacherName = document.getElementById('vote-teacher-name');
const voteTeacherSubject = document.getElementById('vote-teacher-subject');
const voteOption = document.getElementById('vote-option');

document.querySelectorAll('.btn-subject').forEach(button => {
    button.addEventListener('click', () => {
        currentSubject = button.getAttribute('data-subject');
        showTeachers(currentSubject);
    });
});

document.getElementById('back-to-subjects').addEventListener('click', () => {
    stepTeachers.classList.add('hidden');
    stepSubjects.classList.remove('hidden');
});

document.getElementById('back-to-teachers').addEventListener('click', () => {
    stepVoting.classList.add('hidden');
    stepTeachers.classList.remove('hidden');
});

document.querySelectorAll('.vote-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.vote-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedVote = option.getAttribute('data-option');
        submitVoteBtn.disabled = false;
    });
});

submitVoteBtn.addEventListener('click', () => {
    if (selectedVote) {
        submitVoteBtn.disabled = true;
        submitVoteBtn.textContent = 'กำลังส่ง...';
        showThankYou();
    }
});

document.getElementById('vote-again').addEventListener('click', () => {
    stepThankyou.classList.add('hidden');
    stepSubjects.classList.remove('hidden');
});

function showTeachers(subject) {
    subjectTitle.textContent = `เลือกคุณครูในกลุ่มสาระ ${subjectNames[subject]}`;
    teachersContainer.innerHTML = '';
    teachersData[subject].forEach(teacher => {
        const teacherCard = document.createElement('div');
        teacherCard.className = 'teacher-card bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-200 hover:border-blue-400 cursor-pointer';
        teacherCard.innerHTML = `
            <div class="p-6">
                <div class="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-4 overflow-hidden">
                    <img src="${teacher.image}" alt="${teacher.name}" class="w-full h-full object-cover" loading="lazy">
                </div>
                <h3 class="text-xl font-semibold text-blue-800 text-center">${teacher.name}</h3>
                <p class="text-blue-600 text-center">${subjectNames[subject]}</p>
            </div>
            <div class="bg-blue-50 p-4 text-center">
                <span class="select-teacher bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all">
                    โหวตให้คนนี้
                </span>
            </div>
        `;
        teacherCard.addEventListener('click', () => selectTeacher(teacher, subject));
        teachersContainer.appendChild(teacherCard);
    });
    stepSubjects.classList.add('hidden');
    stepTeachers.classList.remove('hidden');
}

function selectTeacher(teacher, subject) {
    currentTeacher = teacher;
    teacherName.textContent = teacher.name;
    teacherSubject.textContent = subjectNames[subject];
    teacherImage.innerHTML = `<img src="${teacher.image}" alt="${teacher.name}" class="w-full h-full object-cover" loading="lazy">`;
    resetVote();
    stepTeachers.classList.add('hidden');
    stepVoting.classList.remove('hidden');
}

function resetVote() {
    selectedVote = null;
    submitVoteBtn.disabled = true;
    submitVoteBtn.textContent = 'ส่งโหวต';
    document.querySelectorAll('.vote-option').forEach(opt => opt.classList.remove('selected'));
}

function showThankYou() {
    // เตรียมข้อมูลสำหรับส่ง
    const voteData = {
        teacherId: currentTeacher.id,
        teacherName: currentTeacher.name,
        subject: subjectNames[currentSubject],
        voteOptionNumber: selectedVote,
        voteOptionText: voteOptions[selectedVote]
    };

    // ใช้ fetch เพื่อส่งข้อมูลไปที่ Google Apps Script
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // ตั้งค่าโหมดเพื่อลดปัญหา CORS
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(voteData)
    })
    .then(() => {
        // เมื่อส่งคำขอออกไปแล้ว (ไม่รอคำตอบ) ให้แสดงหน้าขอบคุณทันที
        console.log('Vote submission request sent.');
        voteTeacherName.textContent = currentTeacher.name;
        voteTeacherSubject.textContent = subjectNames[currentSubject];
        voteOption.textContent = voteOptions[selectedVote];
        
        stepVoting.classList.add('hidden');
        stepThankyou.classList.remove('hidden');
    })
    .catch(error => {
        // หากเกิดข้อผิดพลาดในการส่ง (เช่น ไม่มีเน็ต, URL ผิด)
        console.error('Fetch Error:', error); // แสดง error จริงๆ ใน Console
        alert('เกิดข้อผิดพลาดในการส่งข้อมูลโหวต! กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองอีกครั้ง');
    })
    .finally(() => {
        // ส่วนนี้จะทำงานเสมอ ไม่ว่า fetch จะสำเร็จหรือล้มเหลว
        // เพื่อคืนค่าปุ่มให้กลับมาใช้งานได้ปกติ
        resetVote(); 
    });
}
