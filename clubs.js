const clubs = [
    {
      "_id": {
        "$oid": "68177eea890b4c670a69f9f9"
      },
      "club_Name": "Lincoln Labs",
      "club_Description": "The club\u2019s mission is to ignite a passion for electronics among students by offering hands-on experiences, fostering creativity, and encouraging collaboration. It aims to bridge the gap between theoretical knowledge and practical application through various activities and projects. ",
      "club_Mentor": "Aditya Abburi",
      "club_Head": ""
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69f9fa"
      },
      "club_Name": "Computer Vision",
      "club_Description": "The Computer Vision Club is dedicated to exploring the frontiers of artificial intelligence, image processing, and visual computing. It serves as a dynamic platform for students to collaborate on innovative projects, engage in research, and apply real-world solutions through hands-on experiences. Welcoming coders, designers, and marketing enthusiasts alike, the club fosters a multidisciplinary environment where creativity meets cutting-edge technology. ",
      "club_Mentor": "Rahul Roy",
      "club_Head": ""
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69f9fb"
      },
      "club_Name": "PMI",
      "club_Description": "Project Management Institute is an international organization aiming to further the field of project management as well as the study of the subject. The club at Mahindra University will be helping students at the university pick up essential skills in the area of Project Management which will help them launch and be more successful in their careers. ",
      "club_Mentor": "Keerti Pendyal",
      "club_Head": "Yamira Chava"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69f9fc"
      },
      "club_Name": "Sakhi",
      "club_Description": "The club will focus on addressing the challenges that women face, providing a variety of activities such as workshops, discussion groups, and networking events. ",
      "club_Mentor": "Jyothi Rani Korem",
      "club_Head": ""
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69f9fd"
      },
      "club_Name": "7 Screens",
      "club_Description": "The 7 Screens aims to give students a place to explore their interests in a range of media-related fields, such as social media, content creation, painting, design thinking, journalism, filmmaking, podcasting, etc. The club will develop critical thinking, creativity, communication, and teamwork while providing hands-on experience creating high-quality media output. This orientation is a fantastic opportunity to learn about our club, which operates like a dynamic media house, engaging in a variety of creative activities. ",
      "club_Mentor": "Shashidhar Nanjundaiah",
      "club_Head": ""
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69f9fe"
      },
      "club_Name": "Hult Prize",
      "club_Description": "PHult Prize MU conducts an exciting On-Campus round in the form of a start-up battle, where teams compete for a chance to advance to the international round. We empower our students to break free from conventional boundaries and leverage their diverse backgrounds, talents, and knowledge to create meaningful change. Throughout this captivating entrepreneurial journey, participants are inspired to tackle critical issues, including poverty alleviation, healthcare accessibility, educational equality, and environmental sustainability. ",
      "club_Mentor": "Keerthi Kadam",
      "club_Head": "Sahithi"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69f9ff"
      },
      "club_Name": "Kalakriti",
      "club_Description": "The primary objective of this club is to spread knowledge about\u00a0various aspects of Indian culture. It is accomplished\u00a0through conduct of diverse activities and events showcasing \u00a0\u00a0different aspects of Indian culture such as dance, music, food and dress forms etc., representing the vibrant\u00a0diversity of India. ",
      "club_Mentor": "Gopinath GR",
      "club_Head": "Parth Yadav"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa00"
      },
      "club_Name": "Outreach Club",
      "club_Description": "Outreach is one of the very few clubs that works towards betterment of the society. Having four sectors, we individually focus on various social aspects and try to do our best to contribute as much as we can to their betterment whilst giving practical social experience and knowledge to students ",
      "club_Mentor": "Dr. Deepti Avirneni",
      "club_Head": "Pragati Shinde"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa01"
      },
      "club_Name": "Celeste",
      "club_Description": "The club often organizes stargazing nights where members can observe the night sky with telescopes, learn to identify constellations, and witness celestial events like meteor showers. They can delve into specific topics, discuss current research, and explore their interest in a fun and social environment. ",
      "club_Mentor": "Kamna Pande",
      "club_Head": "Srikanth C"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa02"
      },
      "club_Name": "Vipanan",
      "club_Description": "At Vipanan students are taught marketing skills like how to sell a pen, like the scene from \u201cThe Wolf of Wall Street\u201d to how to convince a customer that even a lie is a truth! Many such marketing tricks and trivia are taught at the club.\u00a0 ",
      "club_Mentor": "Pradeep Racherla",
      "club_Head": "Guntupalli Kavyasri Lekhana"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa03"
      },
      "club_Name": "Hurricane Programming Club",
      "club_Description": "The activities include coding competitions, webinars and collaborating with other colleges to promote a healthy coding environment. Coding club highly values problem solving and critical thinking skills. ",
      "club_Mentor": "Dr. Om Prakash Patel",
      "club_Head": "K Revanth Reddy"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa04"
      },
      "club_Name": "MU Podcast Club",
      "club_Description": "Creating and producing podcasts to share student voices and ideas.",
      "club_Mentor": "Dr. Pankaj Narke",
      "club_Head": "Garneti Siddhartha"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa05"
      },
      "club_Name": "The Erudite",
      "club_Description": "The Erudite Club conducts events like debates, impromptu speaking events, discussions on socially relevant issues, light hearted events like Devil\u2019s Advocate, poetry and scriptwriting workshops, book fairs and a book club. ",
      "club_Mentor": "Bhanukiran Perabathini",
      "club_Head": "Shreyas Aditya Baksi"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa06"
      },
      "club_Name": "Ranjith Shankaran's Mastershot",
      "club_Description": "Photography and cinematography club led by students and mentored by media faculty.",
      "club_Mentor": "Ani Thomas",
      "club_Head": "Amarthya Raj"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa07"
      },
      "club_Name": "IET",
      "club_Description": "It aims to inspire, inform and influence the global engineering community to engineer a better world by sharing knowledge that helps solve the challenges that matter. Now, the prestige of this institute is available as an On-Campus chapter here at Mahindra University! ",
      "club_Mentor": "",
      "club_Head": ""
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa08"
      },
      "club_Name": "Blockchain",
      "club_Description": "Exploring decentralized technology and cryptocurrency innovations.",
      "club_Mentor": "Raghu Kishore Neelisetty",
      "club_Head": "Mogili Akshaya"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa09"
      },
      "club_Name": "Media",
      "club_Description": "The aim of The Media Club is to centralise any media related activities for all events happening in MU. The club focuses on photo/video coverage and trailers for the same. ",
      "club_Mentor": "Rajnarayan",
      "club_Head": "Tanasi Singarapu"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa0a"
      },
      "club_Name": "Gas Monkeys",
      "club_Description": "Automobile and motorsports enthusiast club.",
      "club_Mentor": "Sanjeevi N",
      "club_Head": "Aditya Rachakonda"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa0b"
      },
      "club_Name": "Synolo",
      "club_Description": "A student-run club for design, branding, and visual storytelling.",
      "club_Mentor": "Mahipal Jetta",
      "club_Head": "Anant S Kumar"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa0c"
      },
      "club_Name": "Math Club",
      "club_Description": "Engages in mathematical discussions, puzzles, and competitions.",
      "club_Mentor": "Prof. Biswarup Biswas",
      "club_Head": "Utkarsh Mangal"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa0d"
      },
      "club_Name": "AUV",
      "club_Description": "Builds autonomous underwater vehicles for competitions and research.",
      "club_Mentor": "Sebastian Uppapalli",
      "club_Head": "Amit Saraf"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa0e"
      },
      "club_Name": "Beyond Barriers",
      "club_Description": "Encourages inclusivity and supports students with disabilities.",
      "club_Mentor": "Priyadarshini",
      "club_Head": "Anshu Namana"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa0f"
      },
      "club_Name": "Insight",
      "club_Description": "Focuses on data science, analytics, and machine learning.",
      "club_Mentor": "Debopam Chakrabarti",
      "club_Head": "Pranjal Agarwal"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa10"
      },
      "club_Name": "Paleastro",
      "club_Description": "Combines paleontology and astronomy for curious science lovers.",
      "club_Mentor": "Ravi",
      "club_Head": "Gaurav Nayak"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa11"
      },
      "club_Name": "8 Counts",
      "club_Description": "Dance club with teams participating in various dance forms and competitions.",
      "club_Mentor": "PRAFULLA KALAPATAPU",
      "club_Head": "Arya Pandey"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa12"
      },
      "club_Name": "Adventure Club",
      "club_Description": "Organizes trekking, hiking, and adventure activities.",
      "club_Mentor": "Prof. Anirban Ghosh",
      "club_Head": "Anumala Sai Yashica"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa13"
      },
      "club_Name": "EIC",
      "club_Description": "Entrepreneurship and Innovation Cell encouraging startup culture.",
      "club_Mentor": "",
      "club_Head": "Vishwesh Palakuri"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa14"
      },
      "club_Name": "Ambrosia",
      "club_Description": "The culinary club organizing food fests and cooking events.",
      "club_Mentor": "Akanksha Singh",
      "club_Head": "Veda Narayan Gunti"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa15"
      },
      "club_Name": "Qubit",
      "club_Description": "Club for exploring quantum computing and its applications.",
      "club_Mentor": "Jayasri D",
      "club_Head": "Ritika Buchupalli"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa16"
      },
      "club_Name": "Enigma",
      "club_Description": "Puzzle solving, quizzing, and logical thinking club.",
      "club_Mentor": "Prafulla Kalapatapu",
      "club_Head": "Ritika Buchupalli"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa17"
      },
      "club_Name": "Voguenze",
      "club_Description": "Fashion club that focuses on styling, ramp walk, and aesthetics.",
      "club_Mentor": "",
      "club_Head": "Jaahnavi Reddy"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa18"
      },
      "club_Name": "Inquisitive Club",
      "club_Description": "General knowledge, quizzes, and curiosity-driven discussions.",
      "club_Mentor": "",
      "club_Head": ""
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa19"
      },
      "club_Name": "Artfelt",
      "club_Description": "Promotes student mental health and emotional expression through art.",
      "club_Mentor": "Prof Sayoni Laha",
      "club_Head": "Divya Ananya Moduga"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa1a"
      },
      "club_Name": "Chess Club",
      "club_Description": "Encourages competitive and casual chess playing on campus.",
      "club_Mentor": "Anagha Tobi",
      "club_Head": "Gade Samyukta"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa1b"
      },
      "club_Name": "AERO",
      "club_Description": "Club for aerospace and aerodynamics-related projects and learning.",
      "club_Mentor": "Prasaad Pokkunuri",
      "club_Head": "Pranav Yelapragada"
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa1c"
      },
      "club_Name": "Roboverse",
      "club_Description": "Robotics club focused on building, programming, and competing in robotics events.",
      "club_Mentor": "",
      "club_Head": ""
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa1d"
      },
      "club_Name": "Echo",
      "club_Description": "Music club celebrating vocal and instrumental talent.",
      "club_Mentor": "",
      "club_Head": ""
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa1e"
      },
      "club_Name": "Kairos",
      "club_Description": "Philosophy and psychology discussion club.",
      "club_Mentor": "",
      "club_Head": ""
    },
    {
      "_id": {
        "$oid": "68177eea890b4c670a69fa1f"
      },
      "club_Name": "Cognitia",
      "club_Description": "Club focused on cognitive science, AI, and neuroscience intersections.",
      "club_Mentor": "Suder Bukya",
      "club_Head": ""
    }
  ];
  
  // Render cards
  const container = document.getElementById("club-container");
  
  clubs.forEach(club => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${club.club_Name}</h3>
      <p>${club.club_Description.substring(0, 100)}...</p>
      <p><strong>Mentor:</strong> ${club.club_Mentor || 'N/A'}</p>
    `;
    card.onclick = () => openModal(club);
    container.appendChild(card);
  });
  
  // Modal logic
  function openModal(club) {
    document.getElementById("modal-title").innerText = club.club_Name;
    document.getElementById("modal-description").innerText = club.club_Description;
    document.getElementById("modal-mentor").innerHTML = `<strong>Mentor:</strong> ${club.club_Mentor || 'N/A'}`;
    document.getElementById("modal-head").innerHTML = `<strong>Club Head:</strong> ${club.club_Head || 'N/A'}`;
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  