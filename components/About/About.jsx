// components/About/About.jsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSeven from "../Hero/HeroSeven";
import HeroEight from "../Hero/HeroEight";

// Section heading with divider (reuse for all sections)
function SectionHeading({ text }) {
  return (
    <div className="mb-4">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">{text}</h2>
      <div className="h-1 w-16 bg-yellow-400 mt-2" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-32 min-h-screen bg-yellow-50">
      {/* HERO HEADER */}
      <section className="relative flex flex-col items-center justify-center pb-16 bg-white overflow-hidden">
        <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
          ABOUT
        </h1>
        <div className="relative text-center">
          <p className="text-yellow-400 uppercase tracking-[1px] font-semibold text-2xl mb-2">
            Sierra H4
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Sierra Hash House Harriers & Harriettes
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
            Freetown's Favorite Drinking Club with a Running Problem
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 space-y-24 py-12">

        {/* WHO WE ARE */}
        <section>
          <SectionHeading text="WHO WE ARE" />
          <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                Welcome to <span className="text-yellow-400 font-semibold">Sierra Hash House Harriers &amp; Harriettes (Sierra H4)</span>,
                where the streets of Freetown become our playground and every run is an adventure waiting to happen.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                We're not your typical running club. We're a vibrant community of runners, walkers, and beer enthusiasts
                who believe that fitness should be fun, social, and maybe just a little bit ridiculous.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                Part of the global Hash House Harriers family since our founding, we bring the spirit of <span className="text-yellow-400">'hashing'</span> to the hills,
                beaches, and bustling streets of Sierra Leone's capital.
              </p>
            </div>

            {/* Decorative map */}
            <div className="ml-auto flex">
              <Image src='/about.png' height={400} width={400} alt='about-image'/>
            </div>
          </div>
        </section>

        {/* OUR ROOTS */}
        <section>
          <SectionHeading text="OUR ROOTS" />
          <div className="mt-8 bg-zinc-900 border border-yellow-400/20 rounded-lg p-8 space-y-6">
            {/* Expanded historical content */}
            <p className="text-gray-200 text-lg leading-relaxed">
              <strong className="text-yellow-400">The Hash House Harriers (abbreviated to HHH or H3)</strong> is an international group of non-competitive running social clubs. An event organized by a club is known as a hash, hash run or simply hashing, with participants calling themselves hashers or hares and hounds.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              The ‘Hash House’ was the mildly derogatory nickname given (for its unimaginative, monotonous food) to the Selangor Club Chambers, Malaya, by the British Civil Servants and businessman who lived and dined there.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              <strong className="text-yellow-400">Ancient Harriers:</strong> The idea of Harriers chasing paper was not new to Malaya in 1938, as there had been such ‘Hare and Hounds’ clubs before in Kuala Lumpur.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              <strong className="text-yellow-400">Hash House Harriers:</strong> In 1938, Thomson, Lee, Bennett and Gispert in Kuala Lumpur founded their own club, following the rules they had learnt elsewhere. It was ‘G’ Gispert who was apparently the moving spirit behind the club, though he never acted as On-Sec or a Joint Master. It is not clear that the club actually had a name at the very beginning, but Gispert is credited with proposing ‘The Hash House Harriers’ when the Registrar of Societies required the gathering to be legally registered. The HHH duly celebrated its 100th run on 15 August 1941, but only 17 runs later was forced into temporary hibernation by the arrival of the Japanese and World War II.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              <strong className="text-yellow-400">The Hash Spreads Out:</strong> The second Hash Chapter was founded in Singapore in 1962. Sydney was the first chapter created outside Malaysia and Singapore, in 1967, and the worldwide expansion had started, but even by the time of K.L.’s 1,500th run, in 1974, the total was only 35, so the subsequent explosion has been spectacular indeed (including, of course, the Lagos Hash House Harriers in 1979).
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              <strong className="text-yellow-400">Interhash:</strong> The first attempts at an Interhash get-together were the K.L. 1,000th post-war run in 1966, and the spectacular 1,500th run in 1974, when attendance was something over 300. The first genuine INTERHASH, in 1978 in Hong Kong broke new ground, with an attendance of around 800.
            </p>
            {/* Closing original root content */}
            <p className="text-gray-200 text-lg leading-relaxed">
              The Hash House Harriers tradition began in 1938 in Kuala Lumpur, Malaysia, when a group of British expatriates decided they needed a way to cure their weekend hangovers and get some exercise. They created a <span className="text-yellow-400">'drinking club with a running problem'</span> based on the old British game of 'Hare and Hounds.'
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              The name came from the 'Hash House' - the Selangor Club where they met and ate what they called 'hash' (mediocre food). Little did they know they were starting a global phenomenon that would spread to over 1,600 cities across 180+ countries.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Sierra H4 proudly carries this tradition forward in Freetown, adding our own West African flavor to the mix. We're putting Sierra Leone on the global hashing map - and we're just getting started.
            </p>
            {/* Learn More Button */}
            <div className="flex">
              <a
                href="https://gotothehash.net/history/shakes.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-semibold px-6 py-2 rounded-lg shadow transition-colors duration-200 ml-auto"
              >
                Learn more about H3 History
              </a>
            </div>
          </div>
        </section>

        {/* RULES, GUIDELINES, OBJECTIVES & PROCLAMATIONS */}
        <section>
          <SectionHeading text="RULES, GUIDELINES, OBJECTIVES & PROCLAMATIONS" />
          <div className="mt-8 bg-zinc-900 border border-yellow-400/20 rounded-lg p-8 space-y-8">

          {/* rules */}
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-2">Rules</h3>
              <ul className="text-gray-200 text-lg space-y-2 list-decimal list-inside">
                <li>
                  There <span className="font-bold">ARE</span> no rules, but the Grand Master (GM) is always right.
                </li>
                <li>
                  If the Grand Master <span className="font-bold">is</span> wrong, then refer to Rule 1.
                </li>
                <li>
                  All other rules do not exist and are therefore, null and void. Some Hash Houses do, in fact, create new rules but in all such cases Rule 1 applies.
                </li>
              </ul>
            </div>

            {/* Guidelines */}
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-2 mt-6">Guidelines</h3>
              <ol className="text-gray-200 text-lg space-y-2 list-decimal list-inside">
                <li>Religious Adviser (RA), usually becomes Grand Master (GM) at the end of his/her tenure unless Mismanagement rules otherwise.</li>
                <li>The tenure of a Mismanagement Team is one year.</li>
                <li>The Hare is responsible for laying the trail or accompanying the Hasher laying the trail.</li>
                <li>The Hash should not provide transport for Hashers to travel to events outside Sierra H4.</li>
                <li>A ‘new Hasher’ turning up after a Run without taking part in the Run cannot be introduced as a Virgin in the Circle.</li>
                <li>
                  To earn a Hash Handle (Hash Name), a Hasher should have RUN/WALKED  at least 10 times. Attending a run at least 10 times and/or hosting a run, does not guarantee you a Hash name. Any decision to name a Hasher is at the GM’s discretion.
                </li>
                <li>
                  Sierra H4 will not rename a Hasher who has been previously named by any other kennel, worldwide. Conversely, Sierra H4 would not expect any other kennel, worldwide, to rename a Hasher that has already been named by Sierra H4. Such a name would not be recognised by Sierra H4. In the very unusual event of Sierra H4 deciding to rename one of its Hashers, at the Hasher's request, the new name will be dreadful and disgusting!!
                </li>
                <li>
                  Hashers will risk being iced, or worse, if not properly dressed in Hash attire, which includes sneakers or proper walking shoes. No sandals, slippers or crocs will be allowed. Badges and patches can only be worn in the circle by visitors or virgins. Repeat offenders will face sanction.
                </li>
                
                <li>
                  All Sierra H4 Hashers are subject to the discipline and rules of the Kennel/GM they are visiting, throughout the time of the visit.
                  If any Hasher from another Kennel warrants discipline/suspension from Sierra H4 events, the GM of the Hasher’s Kennel will be informed within 48 hrs by the GM of Sierra H4.
                  Similarly, Sierra H4 GM would expect reciprocity from his/her fellow GM/HM, if a Sierra H4 Hasher warrants discipline. Undermining the authority of a fellow GM/HM is discouraged.
                </li>
                <li>
                  No Sierra H4 Hasher should conduct their private business at a Sierra H4 venue or event or use the Sierra H4 logo for private business.
                </li>
                <li>
                  Each new Mismanagement Team is encouraged to review this document within the first quarter of their tenure and make sure all members of Sierra H4 know about it.
                  These Guidelines are non-binding. If in doubt refer to Rule No 1.
                </li>
              </ol>
            </div>

            {/* Traditions */}
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-2 mt-6">Traditions</h3>
              <ol className="text-gray-200 text-lg space-y-2 list-decimal list-inside">
                <li>Down Downs to be drunk with the left hand.</li>
                <li>No headgear worn at Down Downs… includes spectacles and sunglasses.</li>
                <li>Permission required to Exit/Enter the Circle. Put your mug on your head and signal whoever is in charge of the circle at the time.</li>
                <li>At a Down Down finish ALL your drink and place your mug upside down on your head. Mug must be upside down on your head whether you finish your drink or not.</li>
                <li>Never point. Bend your arm and direct your elbow towards the person.</li>
                <li>Do not talk in the Circle unless called upon to do so.</li>
                <li>Never refuse to sit on the ice when punished, regardless of your believed innocence.</li>
                <li>A Hasher wearing new shoes is obliged to drink from one of them or surrender it to the shoe stomper.</li>
              </ol>
            </div>

            {/* Objectives */}
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-2 mt-6">Objectives</h3>
              <ol className="text-gray-200 text-lg space-y-2 list-decimal list-inside">
                <li>To promote physical fitness amongst its members.</li>
                <li>To get rid of weekend hangovers.</li>
                <li>To acquire a good thirst and satisfy it in beer.</li>
                <li>To persuade the older members that they are not as old as they feel.</li>
              </ol>
            </div>

            {/* Proclamations */}
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-2 mt-6">Proclamations</h3>
              <ol className="text-gray-200 text-lg space-y-2 list-decimal list-inside">
                <li>
                  If any Sierra H4 Hasher misbehaves at a Run/Walk/Circle and a complaint is made AND seconded by another Hasher who witnessed the infraction the matter will be taken up by Sierra H4 Mismanagement. Otherwise it will be considered null and void.
                </li>
                <li>
                  If any Sierra H4 Hasher misbehaves at an Away event (all Hash events outside Sierra H4 including those organized by other kennels), and a complaint is made by ANY Hasher who was at the event AND seconded by a Sierra H4 Hasher, the matter will be taken up by Sierra H4 Mismanagement Team. Otherwise, it will be considered null and void.
                </li>
                <li>
                  If there is a complaint of bad behaviour by a Sierra H4 Hasher, the complaint can be made via the contact us form on the website  and should be done within 72 hrs of the incident.
                  After 72 hrs, it will be considered null and void.<br />
                  On receipt of a complaint, the Mismanagement member will forward it to the Mismanagement WhatsApp platform for immediate action.<br />
                  The GM will set up an Investigative Committee of which he/she is the Chairperson.<br />
                  The procedure for investigation will be drawn up by the Committee, and its findings must be made public, unfailingly, within 2 weeks of the incident.<br />
                  Failure to cooperate with the investigative committee within 72 hrs of being INFORMED of the complaint will be taken as an admission of guilt.<br />
                  <span className="text-sm text-gray-400">(Reviewed and Approved by SH4 Grand Master, DGM Promiscuous Dick & SH4 Mismanagement Team, 2025)</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section>
          <SectionHeading text="WHAT WE DO" />
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900 border border-yellow-400/20 rounded-lg p-6 flex flex-col items-center text-center">
              <span className="text-5xl mb-4">👟</span>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">WE RUN</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Every week, a 'hare' sets a trail using flour or chalk, and the 'hounds' (that's us) chase it down through Freetown's streets,
                beaches, and hills. It's part treasure hunt, part workout, all fun.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-zinc-900 border border-yellow-400/20 rounded-lg p-6 flex flex-col items-center text-center">
              <span className="text-5xl mb-4">🍻</span>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">WE DRINK</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                After the run comes the circle - where we gather, share laughs, sing questionable songs, and enjoy cold beverages.
                It's where friendships are forged and memories are made.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-zinc-900 border border-yellow-400/20 rounded-lg p-6 flex flex-col items-center text-center">
              <span className="text-5xl mb-4">🎉</span>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">WE CONNECT</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                From birthday runs to the Red Dress Run, from our anniversary celebrations to international hash events, we create experiences that
                bring people together.
              </p>
            </div>
          </div>
        </section>

        {/* OUR MISSION */}
        <section>
          <SectionHeading text="OUR MISSION" />
          <div className="mt-8 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400 pl-8 py-8 rounded-md">
            <ul className="space-y-4 list-none">
              {[
                "To promote physical fitness among our members (and have a laugh while doing it)",
                "To get rid of weekend hangovers (or create new ones, we're flexible)",
                "To acquire a good thirst and satisfy it with beer",
                "To persuade older members that they're not as old as they feel",
                "To showcase the beauty and adventure that Sierra Leone has to offer",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg text-gray-800">
                  <span className="text-yellow-400 text-xl mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* MAKING HISTORY */}
        <section>
          <SectionHeading text="MAKING HISTORY" />
          <div className="mt-8 bg-zinc-900 border border-yellow-400/20 rounded-lg p-8">
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              In 2025, Sierra Leone made history by winning the bid to host the Pan Africa Hash (PAH) 2027 in Freetown - a landmark achievement that beat other African countries.
              This puts Sierra Leone firmly on the international hashing map and showcases our country's growing reputation as a tourism destination.
            </p>
            <div className="bg-black/50 border border-yellow-400/80 rounded-lg p-6 space-y-2 text-center max-w-xl mx-auto">
              <h4 className="text-yellow-400 text-2xl font-bold mb-1">PAH 2027</h4>
              <p className="text-gray-200 text-lg">
                From breathtaking beach runs to lush rainforest trails, vibrant city circles to legendary after-parties,
                Freetown will show the continent what Sierra Leone hospitality is all about. The countdown has begun!
              </p>


              {/* button to PAH 2027 */}
              <div className="flex items-center justify-center gap-4">
               <Link
                 href="/pan-africa-2027"
                 className="bg-[#f9b84f] cursor-pointer  hover:bg-[#e3a63f] text-black font-semibold px-6 py-3 rounded-2xl transition-all">
                On On PAH 2027
              </Link>
            </div>



            </div>
          </div>
        </section>

        {/* JOIN US */}
        <section>
          <SectionHeading text="R U ON?" />
          <div className="mt-8 flex flex-col items-center">
            <p className="text-gray-800 text-lg leading-relaxed text-center max-w-2xl mb-10">
              Whether you're a seasoned hasher or have never heard of hashing before, we welcome everyone. All fitness levels, all ages, all backgrounds.
              If you can walk or run 5km and enjoy good company, you're in.
            </p>
            <div className="w-full grid md:grid-cols-3 gap-6 mb-10">
              {/* Card 1 */}
              <div className="bg-zinc-900 border border-yellow-400/20 rounded-lg p-6 flex flex-col items-center text-center">
                <span className="text-5xl mb-3">🏃</span>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">NO EXPERIENCE NEEDED</h3>
                <p className="text-gray-200 text-lg">First time? Perfect! We'll show you the ropes.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-zinc-900 border border-yellow-400/20 rounded-lg p-6 flex flex-col items-center text-center">
                <span className="text-5xl mb-3">👥</span>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">ALL ARE WELCOME</h3>
                <p className="text-gray-200 text-lg">Locals, expats, visitors - everyone's family here.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-zinc-900 border border-yellow-400/20 rounded-lg p-6 flex flex-col items-center text-center">
                <span className="text-5xl mb-3">🌍</span>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">GLOBAL CONNECTION</h3>
                <p className="text-gray-200 text-lg">Join a worldwide community of hashers.</p>
              </div>
            </div>
            <div>
              <p className="text-yellow-400 text-xl md:text-2xl font-bold text-center mb-2">
                Lace up and hit the trail — the Sierra H4 adventure begins where the road ends.
              </p>
              <p className="text-gray-800 text-base md:text-lg text-center">
                Every run is a story, every hill a challenge, and every circle a celebration.
              </p>
            </div>
          </div>
        </section>


        {/* Mismanagement */}
        <HeroSeven/>

        {/* Our Sponsor */}
        <HeroEight/>




      </div>

      {/* Footer Call-to-action */}
      <section
        className="mt-24 pt-12 pb-8 px-4"
        style={{
          background: "linear-gradient(90deg, rgba(250,204,21,0.1) 0%, rgba(250,204,21,0.05) 60%, transparent 100%)",
          borderTop: "2px solid rgba(250,204,21,0.2)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-3">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              READY TO HASH WITH
              <br />
              <span className="text-yellow-400">SIERRA H4?</span>
            </h2>
          </div>
          <div className="flex gap-2 justify-center text-3xl md:text-4xl">
            <span>🍺</span>
            <span>👟</span>
            <span>🎉</span>
          </div>
          <p className="text-gray-800 text-lg mb-2">
            Contact us, grab your sneakers, and prepare for an adventure!
          </p>
          <div className="text-yellow-400 text-2xl font-extrabold">ON ON!</div>
        </div>
      </section>
    </div>
  );
}