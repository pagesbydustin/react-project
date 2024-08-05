import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import NoteCard from "./layout/NoteCard";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";

function Items() {
  const [currentKey, setCurrentKey] = useState(0);

  const handleBackClick = () => {
    const newIndex =
      currentKey === 0 ? dataSet.Main.length - 1 : currentKey - 1;
    setCurrentKey(newIndex);
  };

  const handleForwardClick = () => {
    const newIndex = (currentKey + 1) % dataSet.Main.length;
    setCurrentKey(newIndex);
  };

  return (
    <>
      <h1>Items</h1>
      <Row>
        <Col xs={1} className="d-flex align-items-center">
          <RiArrowLeftCircleLine
            size={35}
            onClick={handleBackClick}
            disabled={currentKey === 0}
          />
        </Col>
        <Col xs={10}>
          <NoteCard key={currentKey} note={dataSet.Main[currentKey]} />
        </Col>
        <Col xs={1} className="d-flex align-items-center">
          <RiArrowRightCircleLine
            size={35}
            onClick={handleForwardClick}
            disabled={currentKey === dataSet.Main.length - 1}
          />
        </Col>
      </Row>
    </>
  );
}

const dataSet = {
  Main: [
    {
      user: "How I am Feeling. - As of writing this I feel immense amounts of shame, embarrassment, and fear for the actions that are the cause of this meeting. I can assure you the actions I made that day and the seriousness of their effect on others have not been lost on me. No matter the outcome of this meeting or this situation I can assure you all that I will do my very best to never have it happen anywhere or anytime again. This action has been a setback in not only my wellness but my progress in handling stressful situations and suddenly arising issues. I have worked alongside my support team and have had to become content with the fact I did some things that morally I detest and thought never possible from myself. To be clear, I am feeling like I have a lot to learn, I am fully aware of the severity of my actions, and I vow to continue work toward this kind of dissociative episode never happening at all.",
      response:
        "Understanding and addressing your emotional state is crucial. It's clear you're experiencing significant distress and remorse. This is a natural response to the situation, and it's commendable that you're taking steps to address it.",
    },
    {
      user: "What happened from my point of view - Before I begin to state my account of the incident I would like to say that nothing in this statement is meant to be an excuse or reasoning of the actions I took in the incident. I do not think I am justified nor do I think it was appropriate in any way and I am aware of my conscious choices that ultimately caused the outburst to be allowed to happen. It is my own fault and no one else is to blame for my actions or how it affected anyone involved and I am working to create a new plan to never have this happen again in my life.",
      response:
        "It's important to differentiate between acknowledging your actions and making excuses. Your statement indicates a clear understanding of your responsibility for the situation, which is a positive step.",
    },
    {
      user: "My account- Starting from the beginning so as to frame my mistakes completely in order to take full accountability for the things I can remember I will begin the day prior to the incident.  Monday I received an email that questioned me about my tardiness to service in the previous weeks which triggered my reactive response of shame and embarrassment causing me to sit in my car and cry before I could respond appropriately and proportionally to the situation. This is the beginning of my missed or ignored compounding triggers that ultimately caused my explosive C-PTSD dissociative episode at Tuesday's band practice.  Moving forward in time I did not talk to my support team about said interaction even though it caused me to have irrational feelings because I truly believed I had my symptoms under control. I also remember briefly being asked by Pr Dan at the end of his day if I was OK, where I responded with a quick response that I am fine and my issues have nothing to do with Hope because at this time I believed my problem lay solely on lack of sleep and amount of outside work taken in the hope of staying afloat during this pay period change and the amount of time between receiving a check. That night (Monday) I did not get more sleep like I needed but instead prepared for my paint job I had before band practice. Then in the morning I made the biggest conscious mistake that led to the episode in question. I heard a click from my front passenger side steering as I drove away from home and I talked myself into pushing through so I could do what I had planned to do. This led to a series of small problems in my day that ultimately came out as the episode we are here to discuss. When I arrived at 4pm, the band was set up, but they were set up around some of the benches left on the chancel so not in the normal places. This was an irritation to me that I tried to ignore as I turned on my system and began to prepare for my side of practice. As the system powered up I realized that the microphone for the lead guitar amplifier was taken down to prevent damage as things were moved in preparation for Monday's floor cleaning. This is where the stress starts to build as I question in my head why the lead of the floor move ignored my request to not put things in the way of the band on the chancel because during the move the band was still cleaning up their personal equipment but we would also need to practice the day after the cleaning. As I walked to the chancel with the microphone to install it became very frustrating to me that my request had been ignored but also that nobody that was there had moved them and I began to hastley move the first of two stacked benches alone. This is when I rolled my left ankle which made me drop the first bench over the edge of the chancel stairs and this is the point the dissociative episode took place. Going forward I only remember kevin the drummer standing near me at my desk as I cried telling me to take off the paint suit I was still wearing because it was going to overheat me , then I remember James Dobson stepping between his mother and I saying that I could not talk to his mother like that and last i remember being asked to leave and I went to my car and cried until I felt it safe enough to drive home. Any other details that were said I have to assume are true because I have no memory outside of the ones shared. ",
      response:
        "Thank you for sharing your perspective. It's clear that a series of events and stressors contributed to the situation. It's important to identify these triggers to develop strategies for managing them in the future.",
    },
    {
      user: "How do you plan to avoid this happening again - I will be looking to start back in therapy as soon as possible to learn new techniques of catching my symptoms before they get out of control as well as actively working to correct my sleep, eating habits and being honest with myself about my workload and whether or not it is too much for me at the time. All of these have slowly gone to the wayside after Renate and Gary Jefferson passed and maybe even before when my mother passed. One of my biggest issues is death and I need to process a lot of them in order to stabilize myself enough to feel back in control.",
      response:
        "Your plan to seek therapy and address underlying issues is a positive step. It's important to recognize the impact of past experiences on your current situation and to develop healthy coping mechanisms.",
    },
    {
      user: "Please give me advise on social standards",
      response:
        "Understanding and Addressing Social Standards\n\nDisclaimer: While I can provide general guidance on social standards, it's essential to consider the specific context of your situation and the cultural norms of your environment.\n\n### Key Social Standards to Consider\n\nBased on your description, here are some core social standards that might be relevant:\n\n#### Respect for Others:\n* Respecting personal space: Avoiding physical and emotional intrusions.\n* Listening actively: Giving full attention to others when they speak.\n* Empathy: Understanding and sharing the feelings of others.\n* Avoiding blame: Taking responsibility for your actions rather than blaming others.\n\n#### Effective Communication:\n* Clear and concise expression: Communicating your thoughts and feelings clearly.\n* Active listening: Paying attention to others' perspectives and responding thoughtfully.\n* Assertiveness: Expressing your needs and opinions respectfully.\n* Conflict resolution: Handling disagreements calmly and constructively.\n\n#### Responsibility and Accountability:\n* Owning your actions: Taking responsibility for your behavior and its consequences.\n* Apologizing sincerely: Expressing genuine remorse for your actions.\n* Making amends: Taking steps to rectify the situation.\n\n### Specific Advice Based on Your Situation\n\n1. Own Your Actions: It seems you've taken significant steps in acknowledging your actions and their impact. Continue to emphasize your remorse and commitment to change.\n2. Empathize with Others: Demonstrate understanding of the hurt and discomfort you caused. This can help build trust and foster forgiveness.\n3. Communicate Clearly: Be direct and honest about your feelings and experiences, but avoid making excuses. Focus on taking responsibility and outlining your plan for improvement.\n4. Seek Support: Emphasize the role of your support team in helping you manage your condition. This can demonstrate your proactive approach to preventing future incidents.\n5. Respect Boundaries: Be mindful of the emotional boundaries of others involved. Avoid rehashing details that may cause further distress.\n\n### Additional Tips\n\n* Practice self-care: Prioritize your mental and physical well-being through healthy habits like sleep, nutrition, and exercise.\n* Develop coping mechanisms: Learn effective strategies for managing stress and triggers.\n* Seek professional help: Consider ongoing therapy or counseling to address underlying issues.\n* Build support networks: Connect with people who understand and support you.\n\n**Remember:** It's important to approach the meeting with sincerity and a genuine desire to learn and grow. By demonstrating self-awareness, empathy, and a commitment to change, you can work towards rebuilding trust and repairing relationships.\n\nWould you like to role-play the meeting to practice what you might say?\n\n**Would you like to explore any of these points further, or do you have any other questions?**",
    },
    {
      user: "is my answer to the question emotionaly prepotionate to the grievnce caused?",
      response:
        "## Assessing the Proportionality of Your Emotional Response\n\n**Determining whether your emotional response is proportionate to the grievance caused is a complex question that requires careful self-reflection.** It's important to consider several factors:\n\n### Factors to Consider:\n\n* The severity of your actions: How significantly did your actions impact others?\n* The nature of your emotions: Are your feelings primarily guilt, shame, or fear?\n* Your personal history: Have you experienced similar situations or triggers in the past?\n* Cultural and societal norms: What are the expected emotional responses in your culture or community?\n\n### Signs of Disproportionate Emotional Response:\n\n* Overwhelming guilt or shame: Feeling excessively responsible for the situation.\n* Difficulty moving forward: Struggling to let go of the past and focus on the present.\n* Impact on daily life: Your emotions significantly interfering with your work, relationships, or overall well-being.\n\n### Seeking Professional Help:\n\nIf you're unsure about the proportionality of your emotional response, consider seeking guidance from a mental health professional. They can provide valuable insights and support.\n\n**It's important to remember that it's normal to experience a range of emotions after a challenging event.** However, if your emotions are significantly impacting your life, it's essential to seek help.\n\n**Would you like to explore any of these points further, or do you have any specific concerns about your emotional response?**",
    },
    {
      user: "ty",
      response: "No problem! Let me know if you need anything else.",
    },
  ],
};

export default Items;
