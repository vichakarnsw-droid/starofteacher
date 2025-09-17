// Database of teachers (ใช้รูปภาพจริง)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbye0lPT3J6Clg9N6aQCl-S2z68z4qgM-4cRp7yrH6YhpHewR2L3wgHdkaxFhhDqcn67hg/exec";

// --- แก้ไข PATH รูปภาพทั้งหมดให้เหลือเพียงชื่อไฟล์ ---
const teachersData = {
    math: [
        { id: 'math1', name: 'นางสาวปณิชา  น้ำแก้ว', image: '49 panicha.png' },
        { id: 'math2', name: 'นางสุมีนา  ทับเนียม', image: '16 sumeena.png' },
        { id: 'math3', name: 'นางสาวสุดา  สมอแก้ว', image: '31 suda.png' },
        { id: 'math4', name: 'นางสาวบงกชกุล  วงษ์สีทอง', image: '32 bongkodkul.png' },
        { id: 'math5', name: 'นายทรงเกียรติ มณีโชติชุติมา', image: '51 shongkeirt.png' },
        { id: 'math6', name: 'นางสาวกองกาญจน์ ทิพย์จันทร์', image: '33 krongkarn.png' },
        { id: 'math7', name: 'นางสาวเพ็ญพิชชา  วรศักตยานันต์', image: '34 penphicha.png' },
        { id: 'math8', name: 'นางสาวพิศุทธิ์  แย้มบุตร', image: '35 pisut.png' },
        { id: 'math9', name: 'นางสาวศิริพร  สุขเกษม', image: '55 siriporn.png' },
        { id: 'math10', name: 'นางสาวธีร์วรา ทับชุม', image: '25 treewara.png' },
        { id: 'math11', name: 'นางสาวณัฎฐริณี ช่วยคง', image: '27 nattharanee.png' }
    ],
    science: [
        { id: 'sci1', name: 'นางจันทร์เพ็ญ  ศรีภุมมา', image: '60 janpeng.png' },
        { id: 'sci2', name: 'นายณัฐวุฒิ  วรรณโชติ', image: '67 natthawut.png' },
        { id: 'sci3', name: 'นางสาวภาณุมาศ  นักษัตรมณฑล', image: '17 panumas.png' },
        { id: 'sci4', name: 'นายนัสรี สาและ', image: '54 natsaree.png' },
        { id: 'sci5', name: 'นางสาวณัฐกฤตา  รองพล', image: '61 natthakitra.png' },
        { id: 'sci6', name: 'นางสาวเรณู  อรุณประสิทธิชัย', image: '65 renu.png' },
        { id: 'sci7', name: 'นางสาวสุทธิกานต์  เหรียญทอง', image: '72 suthikarn.png' },
        { id: 'sci8', name: 'นางสาวจิณณ์ณณัช  ธาราจิรเศรษฐ์', image: '63 jinnanat.png' },
        { id: 'sci9', name: 'นางณัฐนรี  แขวงโสภา', image: '73 natnaree.png' },
        { id: 'sci10', name: 'นางสาวระพีพัชร  อินทรโชติ', image: '64 rapreepat.png' },
        { id: 'sci11', name: 'นางสาวลักษิกา  ผลพิมาย', image: '59 luksika.png' },
        { id: 'sci12', name: 'นางสาวธนาภรณ์  เจริญผล', image: '53 thanaporn.png' },
        { id: 'sci13', name: 'นางสาวพิมชนก  เจริญชีพ', image: '62 pimchanok.png' },
        { id: 'sci14', name: 'นายสุนทร อุ่นทวี', image: '42 sunthon.png' },
        { id: 'sci15', name: 'นายสุพจน์  วิจิตรเวชการ', image: '78 suphod.png' },
        { id: 'sci16', name: 'นายปกรณ์ บริบูรณ์ทรัพย์', image: '44 pakorn.png' },
        { id: 'sci17', name: 'นายพงศ์พัทธ์  เจริญลาภลอย', image: '79 pongpat.png' },
        { id: 'sci18', name: 'นายภควรรษ  รัตนภานพ', image: '68 pakkawat.png' },
        { id: 'sci19', name: 'นายอัษฎา สังขะจาย', image: '66 atsada.png' },
        { id: 'sci20', name: 'นางสาวศศิธร ตรีพิมล', image: '89 sasithon.png' }
    ],
    thai: [
        { id: 'thai1', name: 'นางสาวสุชิรา แสงทองอร่าม', image: '2. suchira.png' },
        { id: 'thai2', name: 'นางพรอุมา แก้วจิตต์', image: '3. ponduma.png' },
        { id: 'thai3', name: 'นางสาวปรารถนา จันทร์ไทย', image: '4. pradthana.png' },
        { id: 'thai4', name: 'นางณัฐิกา ปัตยุรักษ์', image: '8 natthika.png' },
        { id: 'thai5', name: 'นางสาวกันยกานต์ จันชนะ', image: '15 kanyakan.png' },
        { id: 'thai6', name: 'นายเฉลิมศักดิ์ ลาภส่งผล', image: '82 charemsak.png' },
        { id: 'thai7', name: 'นางสาวเปรมจิต ชินวงษ์', image: '18 pramjit.png' },
        { id: 'thai8', name: 'นางสาวประเทือง บัวเผื่อน', image: '76 pratheng.png' },
        { id: 'thai9', name: 'นางสาวนงลักษณ์ แดงเพ็ง', image: '13 nongruk.png' },
        { id: 'thai10', name: 'นางสาวปัณฑิตา พูลสวัสดิ์', image: '38 panthita.png' }
    ],
    foreign: [
        { id: 'foreign1', name: 'นางอริสา ขันโฑ', image: '23 arisa.png' },
        { id: 'foreign2', name: 'นางจำนงจิต ยะโสธร', image: '77 jomnongjit.png' },
        { id: 'foreign3', name: 'นางสาวสังวาลย์ จันละมูล', image: '50 sangwan.png' },
        { id: 'foreign4', name: 'นางสาวทยากร ศักดิ์ศรีเท้า', image: '36 thayakorn.png' },
        { id: 'foreign5', name: 'นางสาวอจิระวดี ไชยบุตร', image: '40 ajirawadee.png' },
        { id: 'foreign6', name: 'นางสาวธนิตา เผ่าพงศ์ษา', image: '24 thanitra.png' },
        { id: 'foreign7', name: 'นายศิลปิน ทิพย์นพคุณ', image: '30 sinlapin.png' },
        { id: 'foreign8', name: 'นายธนวัฒน์ โพธิรัชต์', image: '26 thanawat.png' },
        { id: 'foreign9', name: 'นางสาวสุจิรา สุวรรณนัง', image: '22 sujira.png' },
        { id: 'foreign10', name: 'นางสาวพิราวรรณ ทองปาน', image: '39 pilawan.png' },
        { id: 'foreign11', name: 'นางสาวฉัตรรดา ประเสริฐศรี', image: '28 chatrada.png' },
        { id: 'foreign12', name: 'นางสาวปัทมาวดี นิลประดับ', image: '29 pathamawadee.png' },
        { id: 'foreign13', name: 'นางสาวปพิชญา กลับประดิษฐ', image: '90 papichaya.png' },
        { id: 'foreign14', name: 'Ms. Nerissa  J.  Denilla', image: '86 Nerissa.png' },
        { id: 'foreign15', name: 'Mr. Steven J Walden', image: '83 Steven.png' },
        { id: 'foreign16', name: 'Ms. Emily  Mirembe', image: '85 Emily.png' },
        { id: 'foreign17', name: 'Mr. Rusty Nino Felipe Mercado', image: '87 Rusty.png' },
        { id: 'foreign18', name: 'Ms. Patricia Maxine Dazo Vergara', image: '84 Patricia.png' },
        { id: 'foreign19', name: 'Miss.Ceng Jia qi', image: '91 Ceng Jia qi.png' }
    ],
    social: [
        { id: 'soc1', name: 'นายชุมสิน กาญจนทอง', image: '5 chumsin.png' },
        { id: 'soc2', name: 'นางสาวรวิปรียา เทศแย้ม', image: '7 rawipreeya.png' },
        { id: 'soc3', name: 'นางสาวบุบผา บุญส่ง', image: '69 buppha.png' },
        { id: 'soc4', name: 'นางสาวภัทรานิษฐ์ แปงต่อม', image: '19 patthranit.png' },
        { id: 'soc5', name: 'นางสาวพรทิพย์ แดงชาติแท้', image: '52 pornthip.png' },
        { id: 'soc6', name: 'นายสุระศักดิ์ ด้วงขวิด', image: '1. surasuk.png' },
        { id: 'soc7', name: 'นายธีรศักดิ์ ชลรัตน์อมฤต', image: '41 threerasuk.png' },
        { id: 'soc8', name: 'ว่าที่ร้อยตรี อนันต์ ชูช่วย', image: '57 anan.png' },
        { id: 'soc9', name: 'นายจีรยศ สินธุวงษานนท์', image: '6 jirayod.png' },
        { id: 'soc10', name: 'นางสาวจรรยา สุขขา', image: '20 juanya.png' }
    ],
    pe: [
        { id: 'pe1', name: 'นายนันทวัฒน์ พรมหาชัย', image: '81 nanthawat.png' },
        { id: 'pe2', name: 'นางพรรณี ครุฑเสม', image: '12 pannee.png' },
        { id: 'pe3', name: 'นายณัฐวุฒิ เชื้อปรางค์', image: '80 natthawut.png' },
        { id: 'pe4', name: 'นายอาชาวิน บุญเกิด', image: '14 archawin.png' },
        { id: 'pe5', name: 'นายทวีเกียรติ วงแหวน', image: '21 thaweekieat.png' }
    ],
    career: [
        { id: 'car1', name: 'นางนฤภร ราชานาค', image: '48 nareupon.png' },
        { id: 'car2', name: 'นางชนัญกาญจน์ หอมกลิ่น', image: '43 chanankarn.png' },
        { id: 'car3', name: 'นายโชติปกรณ์ ขวัญมงคล', image: '37 chothipakorn.png' },
        { id: 'car4', name: 'นางราตรี อรชร', image: '46 ratree.png' },
        { id: 'car5', name: 'นางสาวสาวิตรี วงษ์สวรรค์', image: '45 sawitree.png' },
        { id: 'car6', name: 'นางสาวปัทมา โสภาเลิศ', image: '58 phathama.png' },
        { id: 'car7', name: 'นางสาวสุรางคนา ยงสุวรรณ', image: '70 surangkana.png' },
        { id: 'car8', name: 'นางสาวอัญศิกานต์ ยิ้มภากรณ์', image: '47 unsikarn.png' }
    ],
    art: [
        { id: 'art1', name: 'นายตฤณ คงอยู่สุข', image: '56 trin.png' },
        { id: 'art2', name: 'นายพลวัชร สำเรียนรัมย์', image: '71 ponlawat.png' },
        { id: 'art3', name: 'นายปณิธิ คุ้มทรัพย์', image: '75 panithi.png' },
        { id: 'art4', name: 'นางสาวดาวรุ่ง เย็นใส', image: '74 dowrung.png' },
        { id: 'art5', name: 'นายไพศาล คำหอม', image: '88 paisan.png' }
    ],
    guidance: [
        { id: 'gui1', name: 'นางกันยนา สุรชิต', image: '10 kanyana.png' },
        { id: 'gui2', name: 'นางลักขณา โพธิ์ทองโชติกุล', image: '11 rukkana.png' },
        { id: 'gui3', name: 'นางสาวประภาภรณ์ รุ่งเรือง', image: '9 prapapon.png' }
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
    1: 'สายตรงเวลา',
    2: 'สายตั้งใจสอน',
    3: 'สายสอนเกินคาบ',
    4: 'สายข้อสอบโหด',
    5: 'สายเจ้าระเบียบ',
    6: 'สายเข้าใจนักเรียน',
    7: 'สายใจดีมีเมตตา',
    8: 'สายบันเทิง',
    9: 'สายเทคโนโลยี'
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
