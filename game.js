



const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let img=document.createElement('img');
document.body.appendChild(img);

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}






const textNodes = [
  {
    id: 10,
    text: 'You realize youre dead. A small gust of wind blows by and whispers quietly in your ear, "Sometimes your imagination plays tricks on you; sometimes it doesnt. Knowing the difference can save your life... or your soul. "',
    options: [
        {
            text: 'Restart',
            nextText: 1
        }

    ]
  },
  {
    id: 14,
    text: 'You find yourself in your reality. Do you wish to take the red pill or blue pill? ',
    options: [
        {
            text: 'Blue Pill',
            nextText: 1
        },
        {
          text: 'Red Pill',
          nextText: 8
        }

    ]
  },
  {
    id: 1,
    text: 'The game is written in JavaScript. I cannot put apostrophes in the dialogue because the code sees the apostrophe as a command and not a text. ',
    options: [
      {
        text: 'You hear something...',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You tread closer to the origin of the noise. Tip. Toe. Tip. Toe.',
    options: [
        {
            text: 'STOP WALKING',
            nextText: 3
        }

    ]
  },
  {
    id: 3,
    text: 'Almost instantly the space around you stood still, almost non-existent. You dare not to move. You feel your not alone.',
    options: [
        {
            text: 'Unknown Voice: "Sometimes, the things you see in the shadows are more than just shadows"',
            nextText: 4
        }

    ]
  },
  {
    id: 4,
    text: 'You heard someone. You ponder who the voice belongs to. The curiosity soon faded. The soothing, gentle voice made you feel dread and isolated. You stood still.',
    options: [
        {
            text: '...',
            nextText: 5
        }

    ]
  },
  {
    id: 5,
    text: 'The Unknown Speaker contiued to talk to himself. Then you heard scribbles. The unknown entity is narrating itself while writing. You want to leave but curiosity is holding you back. ',
    options: [
        {
            text: 'Stay',
            nextText: 6
        },
        {
          text: 'Leave',
          nextText: 7
        }

    ]
  },
  {
    id: 6,
    text: 'You stayed. The Unknown speaker says out loud, "My dear Wormwood. This is the 8th letter I have written to you. Now I am sure that the training college you had gone to has gone to pieces. Has no one ever told you about the law of Undulation? Humans are like amphibians: Half spirit and Half animal.',
    options: [
        {
            text: '...',
            nextText: 8
        }

    ]
  },
  {
    id: 7,
    text: 'You begin to slowly walk away. Unfortunetly you steped on a small pebble, crushing it, which made a small POP sound. The Unkown Speaker immediately stood up. You feel a gust of wind behind you, then you hear a loud crunch sound. In less than a second, your legs begin to feel weak.  ',
    options: [
        {
            text: '...',
            nextText: 10
        }

    ]
  },
  {
    id: 8,
    text: 'Unkown Speaker continues: "As spirits they belong to the eternal world, but as animals they inhabit time. This means that while their spirit can be directed to an eternal object, their bodies, passions, and imaginations are in continual change, for to be in time means to change. The Unkown Speaker momentarily stops writing. ',
    options: [
        {
            text: 'Peek',
            nextText: 9
        },
        {
          text: 'escape',
          nextText: 12
        }

    ]
  },
  {
    id: 9,
    text: 'You silently peek. You see the unknown speaker standing up, its back facing a desk. On the desk a lantern lights up the room, including the Unknown Entity. It appears to be a demon: covered in rock-like scales that burn like coal for days after being shed; whenever the demon inhales, its lungs glow bright enough to be seen through its chest; the face is twisted into an unnatural smile.', 
    
    options: [
        {
            text: 'Look Away',
            nextText: 11
        },
        

    ]
  },
  {
    id: 11,
    text: 'As you look away, the demon notices a tiny strand of hair poking out. It snared and menacingly stomped towards you. You knew the demon noticed you, yet you didnt run.',
    options: [
        {
            text: 'Attempt to Escape',
            nextText: 13
        }

    ]
  },
  {
    id: 12,
    text: 'You took the opportunity to quickly escape. As you silently ran through the darkness, you fell through a hole. You fell through the abyss. It felt like hours until suddenly, you woke up from your bed.',
    options: [
        {
            text: '...',
            nextText: 14
        }

    ]
  },
  {
    id: 13,
    text: 'You tried to escape but your legs felt heavy. The demon found you. He stared into your eyes, through your soul. Demon: "What do we have here? How long have you been here?"',
    options: [
        {
            text: '...',
            nextText: 15
        }

    ]
  },
  {
    id: 15,
    text: 'Demon: "Not a talker? Good, Good. Then you shall be my partner from now on. Call me Screwtape." Screwtape grasps your throat and lifts you in the air.',
    options: [
        {
            text: 'Gasp',
            nextText: 16
        }

    ]
  },
  {
    id: 16,
    text: 'Screwtape drops you on a moldy, wooden chair. You calm down while Screwtape grabs his writing tool and continues writing. Screwtape: "The Enemy wants to do the opposite. Now it may surprise you to learn that in His efforts to get permanent possession of a soul, He relies on the troughs or low points in human life even more than on the peaks.” ',
    options: [
        {
            text: 'The Enemy?',
            nextText: 17
        }

    ]
  },
  {
    id: 17,
    text: 'Screwtape laughs at you. Screwtape: "You must be the dumbest human ever to exist. I am a demon. Who in this entire reality do you think is an enemy to demons?" Screwtape leans forward, about an inch away from your face. "God and His damn Holy creations!" ',
    options: [
        {
            text: '...',
            nextText: 18
        }

    ]
  },
  {
    id: 18,
    text: 'Screwtape continues: “Say, are you a man of God?',
    options: [
        {
            text: 'Yes',
            nextText: 23
        },
        {
          text: 'No',
          nextText: 19
        }

    ]
  },
  {
    id: 19,
    text: 'You said no. You lied to the demons face. You lied about your faith. You WERE a man of God. You went to church every Sunday, prayed every evening and meal, attended Theology class, etc. Immediately after, everything went black.. You stood in an unknown liquid that reached to your knees. All of the sudden, you feel like youre choking. You try to breathe but the air just feels like water. Youre drowning yet still alive and conscious. You hear Screwtape whisper: “I know every truth and lie you ever told. I know your desires. I KNOW EVERYTHING ABOUT YOU.”',
    options: [
        {
            text: 'Wake Up',
            nextText: 20
        }

    ]
  },
  {
    id: 20,
    text: 'You woke up from your bed gasping for air. Sweat dripping down your face. You realize what you have done. You regret the decision you made. You suspect that the dream you had wasnt an actual dream, but reality in another dimension. You sit on your bed, contemplating on your next choice.',
    options: [
        {
            text: 'Go to Church',
            nextText: 22
        },
        {
          text: 'Stay at Home',
          nextText: 21
        }

    ]
  },
  {
    id: 21,
    text: 'You chose to stay home. Ignoring what happened, your stomachs growled. So you stood up and decided to make breakfast. You feel the need to play video games for the rest of the day. A thin smoke floats over your bed. Screwtape observes you and smirks. Screwtape: “His sinful soul is easily prone to vice.” You have sinned by lying, denying your faith to the lord, indulging, and not confessing your sins. You have created a large gap between you and God while Screwtape tempts you further, expanding his power without you realizing it.',
    options: [
        {
            text: 'Restart',
            nextText: 1
        },
        {
          text: 'Change your past actions',
          nextText: 20
        },
        {
          text: 'Change your mind',
          nextText: 41
        }

    ]
  },
  {
    id: 41,
    text: ' You changed your mind. You realized Screwtape fills your imagination with sensual delights and gratifications with food and entertainment. If you had not realized it, he would have increased the number of their sins. You quickly ran to your car and drove to church. You described your dream to your priest. Your priest  grants you absolution. After the prayer of forgiveness, he assigns you a penance. He tells you to apologize and confesse your actions to God and swear to devote your efforts to spreading your experience to others so they can be saved. You leave the church and begin spreading the message to everyone you meet.',
    options: [
        {
            text: 'Restart',
            nextText: 1
        }

    ]
  },
  {
    id: 22,
    text: 'You chose to go to church. You quickly ran to your car and drove to church. You described your dream to your priest. Your priest  grants you absolution. After the prayer of forgiveness, he assigns you a penance. He tells you to apologize and confesse your actions to God and swear to devote your efforts to spreading your experience to others so they can be saved. You leave the church and begin spreading the message to everyone you meet.',
    options: [
        {
            text: 'Restart',
            nextText: 1
        },
        {
          text: 'Change your past actions',
          nextText: 18

        }

    ]
  },
  {
    id: 23,
    text: 'You said yes. You proclaimed out loud with no fear, you are a man of God and you love God very much.',
    options: [
        {
            text: '...',
            nextText: 24
        }

    ]
  },
  {
    id: 24,
    text: 'Screwtape: “Interesting…, then you must know who St. Ignatius is, right?”',
    options: [
        {
            text: 'Yes',
            nextText: 25
        }

    ]
  },
  {
    id: 25,
    text: 'Screwtape: “If you havent noticed, my job is to tempt humans.” Screwtape points at the paper. “This letter is for a demon who wants to learn how to tempt humans. Demons like him struggle to do their jobs due to Saints and Gods followers. Read my letter.” Screwtape hands you his letter and you begin to read it. Screwtape: “How will you fight against this?"',
    options: [
        {
            text: 'Answer',
            nextText: 26
        }

    ]
  },
  {
    id: 26,
    text: 'You answered his question. You: “Humans face a lot of troubles and we quickly choose the easiest route. Oftentimes we jump to pleasures or worldly distractions. This leads to many of us sinning. Every person should learn how to be patient and stay strong because eventually the tough times will end and hope will come.”',
    options: [
        {
            text: '...',
            nextText: 27
        }

    ]
  },
  {
    id: 27,
    text: 'You return his letter back to him. Screwtape: “I didnt kill you because I believe you still have some use left. You shall be an example to future demons.” Screwtape raises his hands and summons a hidden door. Screwtape: “I will test you and show demons how to break believers like you!” Screwtape grabs you and throws you through the door.',
    options: [
        {
            text: '...',
            nextText: 28
        }

    ]
  },
  {
    id: 28,
    text: 'You get up and observe your surroundings. You see a school and a small park.',
    options: [
        {
            text: 'Walk to School',
            nextText: 29
        },
        {
          text: 'Walk to Park',
          nextText: 33
        }

    ]
  },
  {
    id: 29,
    text: 'You walk to the School. As you walk towards the school, you see a group of kids kicking and bullying another kid. As you walk closer you can see the kid being bullied is covered in bruises and is lying on the ground. One of the bullies grabbed one of the boys from the sidelines and yelled, “Hey twirp! Get over here and start beating up Denny! Come on, I promise its fun.” Denny, fearing he might get hurt too, gave in and proceeded to kick the life out of the boy. There you saw a shadowy figure behind Denny, giggling and encouraging Dennys actions. Then, Denny started to enjoy it.',
    options: [
        {
            text: 'Walk Closer',
            nextText: 30
        }

    ]
  },
  {
    id: 30,
    text: 'As you walk closer, the head bully looks at you and shouted, “Ditch!” All of the bullies ran away, only leaving the lifeless kid on the ground and Denny. Denny cried. As you approached the scene, you quickly gave the kid first-aid. After treating the kids wound, you look at Denny and ask “Why did you kick him?” Denny replies while crying, “I didnt want to. I was scared I would be next so I started to kick him. But I dont know why but I wanted to kick him more and more!”',
    options: [
        {
            text: 'Respond',
            nextText: 31
        }

    ]
  },
  {
    id: 31,
    text: 'You respond: “I understand. You probably had to deal with those bullies everyday. They made you feel small and powerless. Once you were given the opportunity to show dominance, you felt happy. The evil spirit saw your weakness and used it to his advantage. Remember, the evil spirits will always try their best to find your weakness so they can destroy you from the inside out. Transform yourself by your redemptive sufferings and control your emotions so your walls are harder to break.”',
    options: [
        {
            text: '...',
            nextText: 32
        }

    ]
  },
  {
    id: 32,
    text: 'Denny nods his head, picks up the injured kid and walks to the nearest nurse.',
    options: [
        {
            text: 'Stand up and walk back',
            nextText: 36
        }

    ]
  },
  {
    id: 33,
    text: 'You walk towards the park. You see a little girl crying under a tree. You went to her and asked her whats wrong? Girl: “I feel very lonely and I have no friends. Everyday at school, everyone around me tries to stay away from me. I think they think Im weird. I want to be part of the cool group and have a lot of friends. One of the cool girls said I could be friends with them if I killed a bunny. I dont know what to do.” The little girl cried even more.',
    options: [
        {
            text: '...',
            nextText: 34
        }

    ]
  },
  {
    id: 34,
    text: 'As soon as the little girl finishes crying, the cool girl appears. Behind the cool girl is a shadowy figure. You pretend not to see the entity. The entity giggles and whispers, “Yes. The girl is naive and is all alone. She believes in no God. Another easy target.” The cool girl hands the little girl a knife and says “Do it!” Then the cool girl leaves.',
    options: [
        {
            text: 'Grab the knife',
            nextText: 35
        }

    ]
  },
  {
    id: 35,
    text: 'You snatch the knife and comfort the little girl. You: “You must listen to me. When youre lonely and desperate, never do something horrible in order to satisfy someone. In times of struggle, remain strong because there are people who would want to be your friend and like you as who you are. I recommend you to go to church. Learn about God. God loves you because he created you in his image. God will always be your friend and he will help protect you from evil people and spirits."',
    options: [
        {
            text: 'Stand up and walk back',
            nextText: 36
        }

    ]
  },
  {
    id: 36,
    text: 'You walk back and look around you. Deep down you knew Screwtape was watching you. You shout: “Come out from hiding!” Screwtape didnt respond. You grew impatient and started to walk. You start to wonder why you met Screwtape. Why are you fighting so hard? Where is God and why cant God just help you. Screwtape forced you to experience a never ending torture. You felt more alone and sad.',
    options: [
        {
            text: 'Remember your enemy',
            nextText: 37
        }

    ]
  },
  {
    id: 37,
    text: 'You remember that Screwtape forced you into this world. Screwtape has control over this realm. You knew God had left his natural powers to resist the temptations of the enemy. You can resist with the help of God, God has sufficient grace for eternal salvation. Your soul is on fire and you start to pray to God. Screwtape saw this and many temptations to distract you from God. Those were shown to be ineffective.',
    options: [
        {
            text: 'Continue to pray',
            nextText: 38
        }

    ]
  },
  {
    id: 38,
    text: 'You continue to pray. God answers your prayers and gives you strength. Screwtape saw his efforts were ineffective and opened the mysterious door. You stood up and walked towards the door. As you pass through the door, you challenge Screwtape. You: “Ready to lose?”',
    options: [
        {
            text: 'Change past actions',
            nextText: 25
        },
        {
          text: 'Restart',
          nextText: 1
        }

    ]
  },
  

]

startGame()


