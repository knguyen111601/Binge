const movies = [
    {
        order: 1,
        title: "Iron Man",
        type: "movie",
        releaseDate: "2008",
        img: "https://i.imgur.com/PVdwPlQ.jpg",
        desc: "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
        director: "Jon Favreau",
        cast: {
            cast1: "Robert Downey Jr",
            cast2: "Jon Favreau",
            cast3: "Gwyneth Paltrow"
        }
    },
    {
        order: 2,
        title: "The Incredible Hulk",
        type: "movie",
        releaseDate: "2008",
        img: "https://i.imgur.com/NNUBjjc.jpg",
        desc: "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
        director: "Louis Leterrier",
        cast: {
            cast1: "Edward Norton",
            cast2: "Liv Tyler",
            cast3: "Tim Roth"
        }
    },
    {
        order: 3,
        title: "Iron Man 2",
        type: "movie",
        releaseDate: "2010",
        img: "https://i.imgur.com/mDF5O1C.jpg",
        desc: 'With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and "Rhodey" Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.',
        director: "Jon Favreau",
        cast: {
            cast1: "Robert Downey Jr.",
            cast2: "Don Cheadle",
            cast3: "Jon Favreau"
        }
    },
    {
        order: 4,
        title: "Thor",
        type: "movie",
        releaseDate: "2011",
        img: "https://i.imgur.com/N04ktp9.jpg",
        desc: "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
        director: "Kenneth Branagh",
        cast: {
            cast1: "Chris Hemsworth",
            cast2: "Natalie Portman",
            cast3: "Tom Hiddleston"
        }
    },
    {
        order: 5,
        title: "Captain America: The First Avenger",
        type: "movie",
        releaseDate: "2011",
        img: "https://i.imgur.com/OXyzvSY.jpg",
        desc: "Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
        director: "Joe Johnston",
        cast: {
            cast1: "Chris Evans",
            cast2: "Haley Atwell",
            cast3: "Sebastian Stan"
        }
    },
    {
        order: 6,
        title: "The Avengers",
        type: "movie",
        releaseDate: "2012",
        img: "https://i.imgur.com/Ztjr6l6.jpg",
        desc: "Marvel Studios presents in association with Paramount Pictures Marvel's The Avengers--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
        director: "Joss Whedon",
        cast: {
            cast1: "Robert Downey Jr.",
            cast2: "Chris Hemsworth",
            cast3: "Chris Evans"
        }
    },
    {
        order: 7,
        title: "Iron Man 3",
        type: "movie",
        releaseDate: "2013",
        img: "https://i.imgur.com/TdJzFmj.jpg",
        desc:'Marvel\'s "Iron Man 3" pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy\'s hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man',
        director: "Shane Black",
        cast: {
            cast1: "Robert Downey Jr.",
            cast2: "Gwyneth Paltrow",
            cast3: "Ben Kingsley"
        }
    },
    {
        order: 8,
        title: "Thor: The Dark World",
        type: "movie",
        releaseDate: "2013",
        img: "https://i.imgur.com/R48qWPN.jpg",
        desc: 'In the aftermath of Marvel\'s "Thor" and "Marvel\'s The Avengers," Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.',
        director: "Alan Taylor",
        cast: {
            cast1: "Chris Hemsworth",
            cast2: "Natalie Portman",
            cast3: "Tom Hiddleston"
        }
    },
    {
        order: 9,
        title: "Captain America: The Winter Soldier",
        type: "movie",
        releaseDate: "2014",
        img: "https://i.imgur.com/k4Ljm3r.jpg",
        desc: 'After the cataclysmic events in New York with The Avengers, Marvel\'s "Captain America: The Winter Soldier," finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.',
        director: "Anthony Russo, Joe Russo",
        cast: {
            cast1: "Chris Evans",
            cast2: "Sebastian Stan",
            cast3: "Anthony Mackie"
        }
    },
    {
        order: 10,
        title: "Guardians of the Galaxy",
        type: "movie",
        releaseDate: "2014",
        img: "https://i.imgur.com/SzQspCG.jpg",
        desc: 'An action-packed, epic space adventure, Marvel\'s "Guardians of the Galaxy," expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy\'s fate in the balance.',
        director: "James Gunn",
        cast: {
            cast1: "Chris Pratt",
            cast2: "Dave Bautista",
            cast3: "Zoe Saldana"
        }
    },
    {
        order: 11,
        title: "Avengers: Age of Ultron",
        type: "movie",
        releaseDate: "2015",
        img: "https://i.imgur.com/jtFuk5p.jpg",
        desc: "Marvel Studios presents 'Avengers: Age of Ultron', the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth's Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        director: "Joss Whedon",
        cast: {
            cast1: "James Spador",
            cast2: "Robert Downey Jr.",
            cast3: "Scarlett Johansson"
        }
    },
    {
        order: 12,
        title: "Ant-Man",
        type: "movie",
        releaseDate: "2015",
        img: "https://i.imgur.com/fdbWVkf.jpg",
        desc: 'The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios\' "Ant-Man." Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.',
        director: "Peyton Reed",
        cast: {
            cast1: "Paul Rudd",
            cast2: "Evangeline Lilly",
            cast3: "Michael Douglas"
        }
    },
    {
        order: 13,
        title: "Captain America: Civil War",
        type: "movie",
        releaseDate: "2016",
        img: "https://i.imgur.com/logcLsG.jpg",
        desc: "Marvel's 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two campsÔÇöone led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark's surprising decision to support government oversight and accountability.",
        director: "Anthony Russo, Joe Russo",
        cast: {
            cast1: "Chris Evans",
            cast2: "Robert Downey Jr.",
            cast3: "Tom Holland"
        }
    },
    {
        order: 14,
        title: "Doctor Strange",
        type: "movie",
        releaseDate: "2016",
        img: "https://i.imgur.com/dghM5Wr.jpg",
        desc: 'From Marvel Studios comes "Doctor Strange", the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place - mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long StrangeÔÇöarmed with newly acquired magical powers - is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.',
        director: "Scott Derrickson",
        cast: {
            cast1: "Benedict Cumberbatch",
            cast2: "Rachel McAdams",
            cast3: "Tilda Swinton"
        }
    },
    {
        order: 15,
        title: "Guardians of the Galaxy Vol. 2",
        type: "movie",
        releaseDate: "2017",
        img: "https://i.imgur.com/WB2v6bB.jpg",
        desc: "Set to the backdrop of 'Awesome Mixtape #2,' Marvel's Guardians of the Galaxy Vol. 2 continues the team's adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes' aid as the Marvel cinematic universe continues to expand.",
        director: "James Gunn",
        cast: {
            cast1: "Chris Pratt",
            cast2: "Zoe Saldana",
            cast3: "Dave Bautista"
        }
    },
    {
        order: 16,
        title: "Spider-Man: Homecoming",
        type: "movie",
        releaseDate: "2017",
        img: "https://i.imgur.com/vzfR873.jpg",
        desc: 'A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.',
        director: "Jon Watts",
        cast: {
            cast1: "Tom Holland",
            cast2: "Michael Keaton",
            cast3: "Zendaya"
        }
    },
    {
        order: 17,
        title: "Thor: Ragnarok",
        type: "movie",
        releaseDate: "2017",
        img: "https://i.imgur.com/jdQuYla.png",
        desc:'Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok - the destruction of his homeworld and the end of Asgardian civilization - at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger - the Incredible Hulk!',
        director: "Taika Waititi",
        cast: {
            cast1: "Chris Hemsworth",
            cast2: "Tessa Thompson",
            cast3: "Taika Waititi"
        }
    },
    {
        order: 18,
        title: "Black Panther",
        type: "movie",
        releaseDate: "2018",
        img: "https://i.imgur.com/zPlK3zc.jpg",
        desc: "Marvel Studios' \"Black Panther\" follows T'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T'Challa's mettle as king - and Black Panther - is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
        director: "Ryan Coogler",
        cast: {
            cast1: "Chadwick Boseman",
            cast2: "Michael B. Jordan",
            cast3: "Lupita Nyong'o"
        }
    },
    {
        order: 19,
        title: "Avengers: Infinity War",
        type: "movie",
        releaseDate: "2018",
        img: "https://i.imgur.com/A9Y77hv.jpg",
        desc: 'An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios\' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
        director: "Anthony Russo, Joe Russo",
        cast: {
            cast1: "Robert Downey Jr.",
            cast2: "Chris Evans",
            cast3: "Chris Hemsworth"
        }
    },
    {
        order: 20,
        title: "Ant-Man and The Wasp",
        type: "movie",
        releaseDate: "2018",
        img: "https://i.imgur.com/4fzlmfw.jpg",
        desc: 'From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: "Ant-Man and The Wasp.". In the aftermath of "Captain America: Civil War", Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he\'s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.',
        director: "Peyton Reed",
        cast: {
            cast1: "Paul Rudd",
            cast2: "Evangeline Lilly",
            cast3: "Michelle Pfeiffer"
        }
    },
    {
        order: 21,
        title: "Captain Marvel",
        type: "movie",
        releaseDate: "2019",
        img: "https://i.imgur.com/fGDILCM.jpg",
        desc: 'Set in the 1990s, Marvel Studios\' "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe\'s most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.',
        director: "Anna Boden, Ryan Fleck",
        cast: {
            cast1: "Brie Larson",
            cast2: "Samuel L. Jackson",
            cast3: "Ben Mendelsohn"
        }
    },
    {
        order: 22,
        title: "Avengers: Endgame",
        type: "movie",
        releaseDate: "2019",
        img: "https://i.imgur.com/lzQqkCG.jpg",
        desc:'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios\' grand conclusion to twenty-two films, "Avengers: Endgame."',
        director: "Anthony Russo, Joe Russo",
        cast: {
            cast1: "Robert Downey Jr.",
            cast2: "Chris Evans",
            cast3: "Chris Hemsworth"
        }
    },
    {
        order: 23,
        title: "Spider-Man: Far From Home",
        type: "movie",
        releaseDate: "2019",
        img: "https://i.imgur.com/5FaXYod.jpg",
        desc: 'Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.',
        director: "Jon Watts",
        cast: {
            cast1: "Tom Holland",
            cast2: "Zendaya",
            cast3: "Jake Gyllenhaal"
        }
    },
    {
        order: 24,
        title: "Black Widow",
        type: "movie",
        releaseDate: "2020",
        img: "https://i.imgur.com/8c49tLx.jpg",
        desc: "In Marvel Studios' action-packed spy thriller “Black Widow”, Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
        director: "Cate Shortland",
        cast: {
            cast1: "Scarlett Johansson",
            cast2: "Florence Pugh",
            cast3: "David Harbour"
        }
    },
    {
        order: 25,
        title: "Shang-Chi and The Legend of The Ten Rings",
        type: "movie",
        releaseDate: "2021",
        img: "https://i.imgur.com/omnOTfT.jpg",
        desc: "Marvel Studios' \"Shang-Chi and The Legend of The Ten Rings\" stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
        director: "Destin Daniel Cretton",
        cast: {
            cast1: "Simu Liu",
            cast2: "Awkwafina",
            cast3: "Tony Leung Chiu-wai"
        }
    },
    {
        order: 26,
        title: "Eternals",
        type: "movie",
        releaseDate: "2021",
        img: "https://i.imgur.com/VrlKAt6.jpg",
        desc: "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, The Deviants.",
        director: "Chloé Zhao",
        cast: {
            cast1: "Gemma Chan",
            cast2: "Angelina Jolie",
            cast3: "Kumail Nanjiani"
        }
    },
    {
        order: 27,
        title: "Spider-Man: No Way Home",
        type: "movie",
        releaseDate: "2021",
        img: "https://i.imgur.com/7qKseXB.jpg",
        desc: 'For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
        director: "Jon Watts",
        cast: {
            cast1: "Tom Holland",
            cast2: "Zendaya",
            cast3: "Alfred Molina"
        }
    },
    {
        order: 28,
        title: "WandaVision",
        type: "show",
        releaseDate: "2021",
        img: "https://i.imgur.com/48LQ1tE.jpg",
        desc: 'Marvel Studios captivating new series "WandaVision" which premieres in early 2021 on Disney+. Starring Elizabeth Olsen and Paul Bettany, "WandaVision" marks the first series from Marvel Studios streaming exclusively on Disney+. The series is a blend of classic television and the Marvel Cinematic Universe in which Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems',
        director: "Matt Shakman",
        cast: {
            cast1: "Elizabeth Olsen",
            cast2: "Paul Bettany",
            cast3: "Kathryn Hahn"
        }
    },
    {
        order: 29,
        title: "The Falcon and The Winter Soldier",
        type: "show",
        releaseDate: "2021",
        img: "https://i.imgur.com/POpqTwh.jpg",
        desc: 'Following the events of "Avengers: Endgame" Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.” The all-new series is directed by Kari Skogland; Malcolm Spellman is the head writer. Streaming exclusively on Disney+.',
        director: "Kari Skogland",
        cast: {
            cast1: "Anthony Mackie",
            cast2: "Sebastian Stan",
            cast3: "Wyatt Russell"
        }
    },
    {
        order: 30,
        title: "Loki",
        type: "show",
        releaseDate: "2021",
        img: "https://i.imgur.com/QGWxw2X.jpg",
        desc: 'In Marvel Studios’ "Loki" the mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.” Kate Herron directs and Michael Waldron is head writer. Debuts on Disney+ in June 9, 2021.',
        director: "Kate Herron",
        cast: {
            cast1: "Tom Hiddleston",
            cast2: "Owen Wilson",
            cast3: "Sophia Di Martino"
        }
    },
    {
        order: 31,
        title: "What If...?",
        type: "show",
        releaseDate: "2021",
        img: "https://i.imgur.com/5vFatS6.jpg",
        desc: '"What If…?" flips the script on the MCU, reimagining famous events from the films in unexpected ways. Marvel Studios’ first animated series focuses on different heroes from the MCU, featuring a voice cast that includes a host of stars who reprise their roles. Directed by Bryan Andrews with AC Bradley as head writer, “What If…?" launches exclusively on Disney+ on August 11, 2021.',
        cast: {
            cast1: "Chadwick Boseman",
            cast2: "Jeffery Wright",
            cast3: "Haley Atwell"
        }
    },
    {
        order: 32,
        title: "Hawkeye",
        type: "show",
        releaseDate: "2021",
        img: "https://i.imgur.com/7YlofwM.jpg",
        desc:       'Marvel Studios’ "Hawkeye" stars Jeremy Renner as Hawkeye, who teams up with another well-known archer from the Marvel comics, Kate Bishop, played by Hailee Steinfeld. The cast also includes Vera Farmiga, Fra Fee, Tony Dalton, Zahn McClarnon, Brian d’Arcy James and newcomer Alaqua Cox as Maya Lopez. “Hawkeye” is helmed by Rhys Thomas and directing duo Bert and Bertie.',
        cast: {
            cast1: "Jeremy Renner",
            cast2: "Hailee Steinfeld",
            cast3: "Florence Pugh"
        }
    },
]
module.exports = movies