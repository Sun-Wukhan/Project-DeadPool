import { RiHomeSmileLine } from 'react-icons/ri'
import { MdCampaign } from 'react-icons/md'
import { MdTrendingUp } from 'react-icons/md'
import { RiRefund2Line } from 'react-icons/ri'
import { AiFillBug } from 'react-icons/ai'
import { MdForum } from 'react-icons/md'
import { MdHistoryEdu } from 'react-icons/md'
import { GiArchitectMask } from 'react-icons/gi'


export const navItems = [
  {
    title: 'Home',
    link: 'home',
    icon: <RiHomeSmileLine />,
  },
  {
    title: 'My Campaign',
    link: 'campaign',
    icon: <MdCampaign/>,
  },
  {
    title: 'Popular',
    link: 'popular',
    icon: <MdTrendingUp/>,
  },
  {
    title: 'My Funds',
    link: 'funds',
    icon: <RiRefund2Line/>,
  },
  {
    title: 'History',
    link: 'history',
    icon: <MdHistoryEdu/>,
  },
  {
    title: 'Forum',
    link: 'forum',
    icon: <MdForum/>,
  },
  {
    title: 'Report Bug',
    link: 'report',
    icon: <AiFillBug/>,
  },
  {
    title: 'Submit Proof',
    link: 'submit',
    icon: <GiArchitectMask/>,
  },
]
