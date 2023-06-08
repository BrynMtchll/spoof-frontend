import NavigationItem from '@/components/NavigationItem';
import BottomNavigation from '@/components/BottomNavigation';
import SideNavigation from '@/components/SideNavigation';

import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import QueueIcon from '@/icons/QueueIcon';

export default function Navigation() {
  const navigationItems = (type) => {
    return (
      <>
        <NavigationItem type={type} href="/" icon={<PeopleIcon />} label="Nearby Users" />
        <NavigationItem type={type} href="/search" icon={<SearchIcon />} label="Search" />
        <NavigationItem type={type} href="/your-queue" icon={<QueueIcon />} label="Your Queue" />
      </>
    )
  }
  return (
    <>
        <SideNavigation>
          {navigationItems('side')}
        </SideNavigation>
        <BottomNavigation>
          {navigationItems('tab')}
        </BottomNavigation>
    </>
  )
};