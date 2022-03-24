import { FC } from "react";

import {
  HomeContainer,
  HomePage,
  RoadmapContainer,
  RoadmapItem,
  TeamContainer,
  Team,
  LinksContainer,
} from "./styled";

import Image from "next/image";

//! import images
import home from "@public/assets/images/home.png";
import team1 from "@public/assets/images/team-1.png";
import team2 from "@public/assets/images/team-2.png";
import team3 from "@public/assets/images/team-3.png";
import team4 from "@public/assets/images/team-4.png";
import team5 from "@public/assets/images/team-5.png";
import team6 from "@public/assets/images/team-6.png";
import team7 from "@public/assets/images/team-7.png";

import discord from "@public/assets/icons/discord-2.png";
import magic from "@public/assets/icons/magic-2.png";
import twitter from "@public/assets/icons/twitter-2.png";

import Footer from "@layouts/footer";

const Home: FC = () => {
  return (
    <HomePage>
      <HomeContainer id="home">
        <div className="text">
          <div className="title">Welcome to SMU!</div>
          <div className="content">
            Recapture the glory days of university! Enrol your student, send
            them to class, play some beer pong and hey, you just might graduate!
            You and 3,333 classmates in the class of 2022 are making history and
            turning up all across the SOlana Blockchain!
          </div>
        </div>
        <div className="images">
          <Image src={home}></Image>
        </div>
      </HomeContainer>
      <RoadmapContainer id="roadmap">
        <div className="title">ROADMAP V2</div>
        <div className="content">
          <div className="left">
            <RoadmapItem>
              <div className="title">MARCH</div>
              <div className="small-title">
                WEBSITE REFRESH & STAKING LAUNCH
              </div>
              <div className="text">
                Now that we’re a mature collection, it was only right that we
                upgraded our website to house all the greatness that we’ve got
                planned for you! This refresh is also facilitating the launch of
                our staking feature (Finally!). Staking will live in the CAMPUS
                tab of the website and is where you can access all things SMU.
                We will be launching a LP to accompany staking which will trade
                in USDC/SMU.
              </div>
            </RoadmapItem>

            <RoadmapItem>
              <div className="title">MAY</div>
              <div className="small-title">GRADUATION (MUTATION)</div>
              <div className="text">
                You’ve been sending your student to class, learning lots and now
                it’s time to graduate! Holding SMU Students and $SMU Tokens will
                allow you to pay your final tuition fee to graduate your student
                and let him start a career as a hard working career monkey. You
                earn more after your graduate right?
              </div>
              <div className="small-title">MARKETPLACE</div>
              <div className="text">
                A place to spend your hard earned $SMU tokens! We will be
                selling and auctioning off rare SMU’s and other blue chip
                project NFT’s to holders to bolster their NFT wallet with the
                best of the best!
              </div>
              <div className="small-title">TURN KEY CONSULTING</div>
              <div className="text">
                Are you a project that is looking to moon? Rebuild? Launch? Get
                in touch with our team and we will walk you through how we can
                help you acheive your goals as a project. Our talented
                consultants will work directly with your team to ensure best
                possible outcomes. Fees are negotiable depending on scope of
                work and can be paid in $SOL to the project or paid after a
                successful mint.
              </div>
            </RoadmapItem>
          </div>
          <div className="right">
            <RoadmapItem>
              <div className="title">APRIL</div>
              <div className="small-title">PLACEMENT OFFICER</div>
              <div className="text">
                Placement officer will be a place for projects to post roles for
                SMU Holders to apply to. Each application will come with an $SMU
                Token fee. The placement officer will also have an area for you
                to include your resume and expertise so projects can come and
                search on their own.
              </div>
              <div className="small-title">BEER PONG</div>
              <div className="text">
                Need we say more? A merch box with items voted on by the
                community will be available to purchase for $SMU token and sent
                directly to your door. Are you excited? We are...
              </div>
              <div className="small-title">MERCHANDISE STORE</div>
              <div className="text">
                Merchandise is here! You can head over to the merchandise store
                to buy your favourite hoodies, hats and more to rep SMU wherever
                you go!
              </div>
            </RoadmapItem>

            <RoadmapItem>
              <div className="title">SOON</div>
              <div className="small-title">LEARN 2 EARN</div>
              <div className="text">
                We are a university after all? Enrol yourself in our carefully
                curated classes and learn everything you need to know about the
                world of Web3, Cryptocurrency and NFTs! There will be classes
                for the biggest beginners and even some Advanced Placement
                courses for our more experienced students! You’ll earn $SMU as
                you learn and graduate with an NFT to prove you did it!
              </div>
              <div className="small-title">TEACH 2 EARN</div>
              <div className="text">
                Are you an expert in your field? Do you want to teach a class to
                SMU Students? You could earn a steady salary of $SMU Token by
                imparting your knowledge to the community! Get in touch with us,
                we look forward to working with you.
              </div>
            </RoadmapItem>
          </div>
          <div className="line">
            <div className="line-item">
              <div></div>
            </div>
            <div className="line-item-2">
              <div></div>
            </div>
            <div className="line-item-3">
              <div></div>
            </div>
            <div className="line-item-4">
              <div></div>
            </div>
          </div>
        </div>
      </RoadmapContainer>

      <TeamContainer id="team">
        <div className="title">THE TEAM</div>

        <div className="team-group-1">
          <Team>
            <div className="image">
              <img src={team1.src} />
            </div>
            <div className="name">Stace</div>
            <div className="text">CEO/COO</div>
          </Team>
          <Team>
            <div className="image">
              <img src={team2.src} />
            </div>
            <div className="name">Pres</div>
            <div className="text">Founder/Dev</div>
          </Team>
          <Team>
            <div className="image">
              <img src={team3.src} />
            </div>
            <div className="name">TAGZIE</div>
            <div className="text">CFo/CTO/CReative</div>
          </Team>
        </div>

        <div className="team-group-2">
          <Team>
            <div className="image">
              <img src={team4.src} />
            </div>
            <div className="name">Unique</div>
            <div className="text">Business Manager</div>
          </Team>
          <Team>
            <div className="image">
              <img src={team5.src} />
            </div>
            <div className="name">BEARVAULT</div>
            <div className="text">DAO FUND MANAGER</div>
          </Team>
          <Team>
            <div className="image">
              <img src={team6.src} />
            </div>
            <div className="name">TRIXX</div>
            <div className="text">LOGISTICS LEAD</div>
          </Team>
          <Team>
            <div className="image">
              <img src={team7.src} />
            </div>
            <div className="name">Sticky</div>
            <div className="text">community lead</div>
          </Team>
        </div>
      </TeamContainer>
      <LinksContainer id="links">
        <div className="title">LINKS</div>
        <div className="link">
          <div className="item">
            <img src={discord.src} />
          </div>
          <div className="item">
            <img src={magic.src} />
          </div>
          <div className="item">
            <img src={twitter.src} />
          </div>
        </div>
      </LinksContainer>
      <Footer></Footer>
    </HomePage>
  );
};

export default Home;
