'use client';

import ScrollButton from '@/components/ScrollButton';
import AboutHeroComponent from '@/components/AboutComponents/AboutHeroComponent';
import AboutCountComponent from '@/components/AboutComponents/AboutCountComponent';
import VisionMissionComponent from '@/components/AboutComponents/VisionMissionComponent';
import AboutDifferentComponent from '@/components/AboutComponents/AboutDifferentComponent';
import TeamComponent from '@/components/AboutComponents/MeetTeamComponents/TeamComponent';
import AboutCommunityComponent from '@/components/AboutComponents/AboutCommunityComponent';

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
      <AboutHeroComponent />
      <AboutCountComponent />
      <VisionMissionComponent />
      <AboutDifferentComponent />
      <TeamComponent />
      <AboutCommunityComponent />
      <ScrollButton sectionId="about" />
    </div>
  );
};

export default AboutPage;
